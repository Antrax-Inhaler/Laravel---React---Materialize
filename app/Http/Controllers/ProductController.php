<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;
class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
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
