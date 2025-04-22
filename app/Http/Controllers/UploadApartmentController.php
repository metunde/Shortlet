<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\UploadApartment;
use App\Http\Requests\StoreUploadApartmentRequest;
use App\Http\Requests\UpdateUploadApartmentRequest;

class UploadApartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $apartments = UploadApartment::all();

        return Inertia::render('ApartmentList', [
            'apartments' => $apartments
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Upload');

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'location' => 'required|string|max:255',
            'stars' => 'required|integer|min:1|max:5',
            'description' => 'required|string',
            'guest_no' => 'required|integer',
            'amenities' => 'required|string',
            'price' => 'required|numeric',
        ]);
    

        logger('Store method hit'); // write to storage/logs/laravel.log

        UploadApartment::create([
            'location' => $request->location,
            'stars' => $request->stars,
            'description' => $request->description,
            'guest_no' => $request->guest_no,
            'amenities' => $request->amenities,
            'price' => $request->price,
        ]);
    
        return redirect()->back()->with('success', 'Apartment uploaded successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(UploadApartment $uploadApartment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UploadApartment $uploadApartment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
//   public function update(Request $request, UploadApartment $uploadApartment)
// {
//     $request->validate([
//         'location' => 'required|string|max:255',
//         'stars' => 'required|integer|min:1|max:5',
//         'description' => 'required|string',
//         'guest_no' => 'required|integer',
//         'amenities' => 'required|string',
//         'price' => 'required|numeric',
//     ]);

//     $uploadApartment->update($request->all());

//     return redirect()->back()->with('success', 'Apartment updated successfully!');
// }

public function update(Request $request, $id)
{

    $request->validate([
                'location' => 'required|string|max:255',
                'stars' => 'required|integer|min:1|max:5',
                'description' => 'required|string',
                'guest_no' => 'required|integer',
                'amenities' => 'required|string',
                'price' => 'required|numeric',
            ]);

    $uploadApartment = UploadApartment::findOrFail($id);

    $uploadApartment->update([
        'location' => $request->location,
        'stars' => $request->stars,
        'description' => $request->description,
        'guest_no' => $request->guest_no,
        'amenities' => $request->amenities,
        'price' => $request->price,
    ]);

    // Return a success response
return redirect()->back()->with('success', 'Apartment updated successfully!');}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $apartment = UploadApartment::findOrFail($id);
        $apartment->delete();
    
        return redirect()->back()->with('success', 'Apartment deleted successfully!');
    }
    
}
