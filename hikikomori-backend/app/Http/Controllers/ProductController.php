<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Support\Facades\Storage;
class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('images')->get();
        return response()->json($products);
    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'price' => 'required',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        $product = new Product([
            'name' => $request->get('name'),
            'description' => $request->get('description'),
            'price' => $request->get('price'),
        ]);

        $product->save();

        $test = $request->file('images');
        if ($request->hasFile('images')) {
            $test = '123';
            foreach ($request->file('images') as $image) {
                $imagePath = $image->store('product_images', 'public');
                $product->images()->create([
                    'image_path' => $imagePath
                ]);
            }
            
        }

        $product->load('images');

        

        return response()->json($product->load('images'), 201);
    }

    public function show(string $id)
    {
        $product = Product::with('images')->findOrFail($id);
        return response()->json($product);
    }

    public function update(Request $request, string $id)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'description' => 'required',
            'price' => 'required',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        $product = Product::find($id);
        $product = Product::findOrFail($id);
        $product->update($validatedData);
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $imagePath = $image->store('product_images');
                $product->images()->create([
                    'image_path' => $imagePath
                ]);
            }
        }
        return response()->json($product->load('images'));
    }

    public function destroy(string $id)
    {
        $product = Product::find($id);
        $product->delete();
        return response()->json('Product deleted!');
    }
}
