
import {Mail, PhoneOutgoing } from 'lucide-react';



const Footer =() => {

    return(
        <section className='flex w-full flex-row px-8 py-14 bg-[#000] text-yellow-500 items-start justify-center'>
        <div className="flex-col flex mx-3  flex-1/3 py-3">
            <span className="text-2xl py-1">About Us</span>
            <span>
                At Dreamers Nest, we redefine modern living by offering premium serviced accommodation and corporate letting solutions. Our mission is to provide high-quality, fully furnished homes tailored to the needs of business travelers, professionals, and short-term residents.</span>
        </div>
        <div className="flex-col flex mx-3 flex-1/3 py-3">
            <span className='text-2xl w-full flex py-1'>Contact Us </span>
    
            <div className="flex-flx-col">
                <div className='flex flex-row my-1'><PhoneOutgoing className='w-4 fill-amber-500 hover:fill-none px-0.5' color="gold" strokeWidth={1.25} />07442407829</div>
                <div className='flex flex-row my-1'><PhoneOutgoing className='w-4 fill-amber-500 hover:fill-none px-0.5' color="gold" strokeWidth={1.25} />07377603180</div>
                <div className='flex flex-row my-1'><Mail className='w-4 fill-amber-500 hover:fill-none px-0.5' color="white" strokeWidth={1.25} /> dreamernest@gmail.com</div>
            </div>
    
    
        </div>
        <div className="flex-col flex mx-3 flex-1/3 py-3">
            <span className='text-2xl py-1'>Connect with us on</span>
            <div className="flex flex-row my-1"><i className="text-amber-500 fa-brands fa-whatsapp px-0.5"></i>WhatsApp</div>
            <div className="flex flex-row my-1"><i className="text-amber-500 fa-brands fa-tiktok px-0.5"></i>TikTok</div>
            <div className="flex flex-row my-1"><i className="text-amber-500 fa-brands fa-instagram px-0.5"></i>Instagram</div>
            <div className="flex flex-row my-1"><i className="text-amber-500 fa-brands fa-telegram px-0.5"></i>telegram</div>
    
    
    
        </div>
        <div className="flex-col flex mx-3 flex-1/3 py-3">
            <div className="flex text-2xl py-1">Useful Links</div>
            <ul>
                <li>FAQs</li>
                <li>Our Values</li>
                <li>Our Services</li>
                <li>Book With Us</li>
                <li></li>
            </ul>
    
    
        </div>
    
    
    
    </section>
    )

  

}

export default Footer