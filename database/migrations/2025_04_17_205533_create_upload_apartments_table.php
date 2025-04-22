<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('upload_apartments', function (Blueprint $table) {
            $table->id();
            $table->text('location');
            $table->integer('stars'); 
            $table->text('description');
            $table->integer('guest_no'); 
            $table->text('amenities'); 
            $table->decimal('price', 10, 2); 
            $table->timestamps();    
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('upload_apartments');
    }
};
