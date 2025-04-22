import React, {useState} from 'react'
import { usePage, router } from '@inertiajs/react'

interface Apartment {
  id: number
  location: string
  stars: number
  description: string
  guest_no: number
  amenities: string
  price: number
}


export default function ApartmentList() {
    const [isEditing, setIsEditing] = useState(false)
const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null)

  const { apartments } = usePage().props as unknown as { apartments: Apartment[] }

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this apartment?')) {
      router.delete(`/apartments/${id}`)
    }
  }

  const handleEdit = (apt: Apartment) => {
    setSelectedApartment(apt)
    setIsEditing(true)
  }
  

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Apartments</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Location</th>
            <th className="p-2 border">Stars</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Guests</th>
            <th className="p-2 border">Amenities</th>
            <th className="p-2 border">Price</th>
          </tr>
        </thead>
        <tbody>
          {apartments.map((apt) => (
            <tr key={apt.id}>
              <td className="p-2 border">{apt.location}</td>
              <td className="p-2 border">{apt.stars}</td>
              <td className="p-2 border">{apt.description}</td>
              <td className="p-2 border">{apt.guest_no}</td>
              <td className="p-2 border">{apt.amenities}</td>
              <td className="p-2 border">₦{apt.price}</td>
              <td className="p-2 border">
                <button
                  onClick={() => handleEdit(apt)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Edit
                </button>
              </td>
              <td className="p-2 border">
                <button
                  onClick={() => handleDelete(apt.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isEditing && selectedApartment && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
      <h2 className="text-xl font-bold mb-4">Edit Apartment</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          console.log(selectedApartment)
          router.put(`/apartments/${selectedApartment.id}`,  {
            location: selectedApartment.location,
            stars: selectedApartment.stars,
            description: selectedApartment.description,
            guest_no: selectedApartment.guest_no,
            amenities: selectedApartment.amenities,
            price: selectedApartment.price,
          }, {
            
            onSuccess: () => {
              setIsEditing(false)
            },
          })
        }}
      >
        <label className='text-black' htmlFor="location">Location</label>
        <input
          type="text"
          className="block text-black w-full mb-2 border p-2 rounded"
          value={selectedApartment.location}
          onChange={(e) =>
            setSelectedApartment({ ...selectedApartment, location: e.target.value })
          }
          placeholder="Location"
        />

<label className='text-black' htmlFor="stars">Stars</label>
        <input
          type="number"
          className="block text-black w-full mb-2 border p-2 rounded"
          value={selectedApartment.stars}
          onChange={(e) =>
            setSelectedApartment({ ...selectedApartment, stars: +e.target.value })
          }
          placeholder="Stars"
        />
                <label className='text-black' htmlFor="description">Description</label>

        <textarea
          className="block w-full text-black mb-2 border p-2 rounded"
          value={selectedApartment.description}
          onChange={(e) =>
            setSelectedApartment({ ...selectedApartment, description: e.target.value })
          }
          placeholder="Description"
        />

<label className='text-black' htmlFor="guest_no">Guests</label>

        <input
          type="number"
          className="block text-black w-full mb-2 border p-2 rounded"
          value={selectedApartment.guest_no}
          onChange={(e) =>
            setSelectedApartment({ ...selectedApartment, guest_no: +e.target.value })
          }
          placeholder="Guests"
        />

<label className='text-black' htmlFor="amenities">Amenities</label>

        <input
          type="text"
          className="block text-black w-full mb-2 border p-2 rounded"
          value={selectedApartment.amenities}
          onChange={(e) =>
            setSelectedApartment({ ...selectedApartment, amenities: e.target.value })
          }
          placeholder="Amenities"
        />

<label className='text-black' htmlFor="price">Price</label>

        <input
          type="number"
          className="block text-black w-full mb-4 border p-2 rounded"
          value={selectedApartment.price}
          onChange={(e) =>
            setSelectedApartment({ ...selectedApartment, price: +e.target.value })
          }
          placeholder="Price"
        />

        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="bg-gray-400 text-white px-4 py-2 rounded"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </div>
  )
}
