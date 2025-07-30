<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
class ProductController extends Controller
{
     public function index()
    {
        $products = Product::latest()->get();
        return Inertia::render('Products/Index', ['products' => $products]);
    }

    public function create()
    {
        return Inertia::render('Products/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'description' => 'required',
            'stock' => 'required|integer',
            'price' => 'required|numeric',
            'is_active' => 'required|boolean',
            'available_from' => 'required|date',
            'image' => 'nullable|string',
        ]);

        Product::create($data);
        return redirect()->route('products.index');
    }

    public function edit(Product $product)
    {
        return Inertia::render('Products/Edit', ['product' => $product]);
    }

    public function update(Request $request, Product $product)
    {
        $data = $request->validate([
            'name' => 'required',
            'description' => 'required',
            'stock' => 'required|integer',
            'price' => 'required|numeric',
            'is_active' => 'required|boolean',
            'available_from' => 'required|date',
            'image' => 'nullable|string',
        ]);

        $product->update($data);
        return redirect()->route('products.index');
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->route('products.index');
    }
}
