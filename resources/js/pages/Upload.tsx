// components/Upload.tsx or Upload.jsx
import { useForm } from "@inertiajs/react";

type UploadProps = {
    onClose: () => void;
};

const Upload = ({ onClose }: UploadProps) => {
    const { data, setData, post, processing } = useForm({
        location: '',
        stars: '',
        description: '',
        guest_no: '',
        amenities: '',
        price: '',
    });

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        post(route('upload.store'), {
            onSuccess: () => {
                onClose(); // Close modal on success
            },
        });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black">✕</button>
                <form onSubmit={handleSubmit} className="text-black space-y-4">
                    <div>
                        <label htmlFor="location">Location</label>
                        <input value={data.location} onChange={(e) => setData('location', e.target.value)} type="text" className="w-full border px-2 py-1" />
                    </div>
                    <div>
                        <label htmlFor="stars">Stars</label>
                        <input value={data.stars} onChange={(e) => setData('stars', e.target.value)} type="text" className="w-full border px-2 py-1" />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input value={data.description} onChange={(e) => setData('description', e.target.value)} type="text" className="w-full border px-2 py-1" />
                    </div>
                    <div>
                        <label htmlFor="amenities">Amenities</label>
                        <input value={data.amenities} onChange={(e) => setData('amenities', e.target.value)} type="text" className="w-full border px-2 py-1" />
                    </div>
                    <div>
                        <label htmlFor="guest_no">Guest No</label>
                        <input value={data.guest_no} onChange={(e) => setData('guest_no', e.target.value)} type="number" className="w-full border px-2 py-1" />
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <input value={data.price} onChange={(e) => setData('price', e.target.value)} type="number" className="w-full border px-2 py-1" />
                    </div>
                    <button type="submit" disabled={processing} className="bg-yellow-500 text-white px-4 py-2 rounded">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Upload;
