<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory;
     protected $fillable = [
        'name',
        'description',
        'stock',
        'price',
        'is_active',
        'available_from',
        'image',
    ];

    // Cast attributes to proper types
    protected $casts = [
        'is_active' => 'boolean',
        'available_from' => 'date',
        'price' => 'float',
        'stock' => 'integer',
    ];
}
