<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Message;
use App\Models\Conversation;
use App\Models\User;
use Inertia\Inertia;

class MessageController extends Controller
{
    // Show messaging interface (Inertia response)
    public function index()
    {
        $users = User::where('id', '!=', auth()->id())->get();
        $conversations = auth()->user()->conversations()->with('users')->get();

        return Inertia::render('Materialize/Message', [
            'users' => $users,
            'conversations' => $conversations,
        ]);
    }

    // Get messages for a conversation (API response)
    public function getMessages($conversationId)
    {
        $messages = Message::where('conversation_id', $conversationId)
            ->with('sender')
            ->orderBy('created_at', 'asc')
            ->get();

        return response()->json($messages);
    }

    // Send a new message (API response)
    public function sendMessage(Request $request)
    {
        $request->validate([
            'conversation_id' => 'required|exists:conversations,id',
            'content' => 'required|string',
        ]);

        $message = Message::create([
            'conversation_id' => $request->conversation_id,
            'sender_id' => auth()->id(),
            'content' => $request->content,
        ]);

        return response()->json($message->load('sender'));
    }

    // Start a new conversation (API response)
    public function startConversation(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
        ]);

        $otherUserId = $request->user_id;
        $currentUserId = auth()->id();

        // Check if conversation already exists
        $existingConversation = Conversation::whereHas('users', function($query) use ($currentUserId, $otherUserId) {
            $query->whereIn('users.id', [$currentUserId, $otherUserId]);
        }, '=', 2)->first();

        if ($existingConversation) {
            return response()->json([
                'error' => 'Conversation already exists!',
                'conversation_id' => $existingConversation->id
            ], 409);
        }

        // Create new conversation
        $conversation = Conversation::create();
        $conversation->users()->attach([$currentUserId, $otherUserId]);

        return response()->json([
            'message' => 'Conversation started!',
            'conversation_id' => $conversation->id
        ], 201);
    }
}