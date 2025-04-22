<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UploadApartmentController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('properties' , function() {
    return Inertia::render('Properties');
});

Route::get('contact' , function() {
    return Inertia::render('Contact');
});

Route::get('about', function(){
    return Inertia::render('About');
});

Route::get('upload', function(){
    return Inertia::render('Upload');
});


Route::get('upload', [UploadApartmentController::class, 'create'])->name('upload.create');
Route::post('upload', [UploadApartmentController::class, 'store'])->name('upload.store');

Route::get('/apartments', [UploadApartmentController::class, 'index']);
Route::delete('/apartments/{id}', [UploadApartmentController::class, 'destroy']);
Route::put('/apartments/{id}', [UploadApartmentController::class, 'update']);




Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');


});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
