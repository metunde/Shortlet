<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UploadApartment extends Model
{
    /** @use HasFactory<\Database\Factories\UploadApartmentFactory> */
    use HasFactory;

    protected $table = 'upload_apartments';

    protected $fillable = [
        'location',
        'stars',
        'description',
        'guest_no',
        'amenities',
        'price',
    ];

    protected $casts = [
        'amenities' => 'string',
        'price' => 'decimal:2',
    ];
}
