import { useForm } from "@inertiajs/react"

const Upload = () => {

    const { data, setData, post, processing} = useForm({
        location: '',
        stars: '',
        description: '',
        guest_no: '',
        amenities: '',
        price: '',
    });

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('sending')
        post(route('upload.store'));
        console.log('sent')
        console.log(data)
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit} method="post">
                <div className="flex flex-row">
                    <label  htmlFor="location">Location</label>

                    <input value={data.location} onChange={(e) => setData('location', e.target.value)} type="text" name="location" id="" />
                    </div>

                <div className="flex flex-row">
                <label htmlFor="stars">Stars</label>
                     <input value={data.stars} onChange={(e) => setData('stars', e.target.value)} type="text" name="stars" id="" />
                     </div>

                <div className="flex flex-row">
                <label htmlFor="description">Description</label>
                    <input value={data.description} onChange={(e) => setData('description', e.target.value)} type="text" name="" id="" />
                </div>

                <div className="flex flex-row">
                <label htmlFor="amenities">Amenities</label>
                    <input value={data.amenities} onChange={(e) => setData('amenities', e.target.value)} type="text" name="" id="" />
                    </div>

                <div className="flex flex-row">
                <label htmlFor="guestno">Guest No</label>
                      <input value={data.guest_no} onChange={(e) => setData('guest_no', e.target.value)} type="number" name="" id="" />
                    </div>

                <div className="flex flex-row">
                <label htmlFor="price">Price</label>
                <input value={data.price} onChange={(e) => setData('price', e.target.value)} type="number" name="" id="" />
                </div>
                <button type="submit" disabled={processing}>Submit</button>
                </form>
        </div>
    )
}

export default Upload