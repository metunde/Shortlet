import { Head } from '@inertiajs/react';
import aparte2 from "../../images/lagos.jpg";
import aparte from '../../images/aparte.jpg';
import aparte3 from '../../images/aparte3.jpg';
import rent1 from "../../images/apt1.avif"
import man1 from "../../images/man1.jpg"
import man2 from "../../images/man2.jpg"
import woman1 from "../../images/woman1.jpg"
import woman2 from "../../images/woman2.jpg"
import Header from '../../js/components/header'
import Foot from '../../js/components/Footer'
import { ArrowLeft, ArrowRight,Search, Star, } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

export default function Welcome() {

    const [imgIndex, setImgIndex] = useState(0)


    const images = [
        aparte2,
        aparte,
        aparte3
    ]


    const imageIndex = useCallback(() => {
        console.log(imgIndex)
        if (imgIndex < images.length - 1) {
            setImgIndex(imgIndex + 1)
        } else {
            setImgIndex(0)
        };
    }, [images.length, imgIndex])

    const prevImage = () => {
        console.log(imgIndex)
        if (imgIndex > 0) {
            setImgIndex(imgIndex - 1)
        } else {
            setImgIndex(images.length - 1)
        };
    }

    useEffect(() => {
        const interval = setInterval(imageIndex, 20000);

        return () => clearInterval(interval);
    }, [imageIndex]);



    return (
        <>
            <Head title="Welcome">
                <script src="https://kit.fontawesome.com/ca5c95f870.js" crossOrigin="anonymous"></script>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex w-full min-h-screen flex-col items-center bg-[#fafaf1] text-[#EDEDEC] lg:justify-center">
                <Header/>

                <div className="flex w-full items-center opacity-100 transition-all delay-75 duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full flex-col text-sm">
                        <section className="hero relative flex w-full mb-9 min-h-screen flex-col items-center text-[#d4d4a4] lg:justify-center ">
                            <div onClick={prevImage} className="absolute left-3 top-[50%] bg-yellow-500 h-5-w-5"><ArrowLeft color="gold" strokeWidth={1.25} /></div>
                            <div onClick={imageIndex} className="absolute right-3 top-[50%] bg-yellow-500 h-5-w-5"><ArrowRight color="gold" strokeWidth={1.25} /></div>
                            <img src={images[imgIndex]}
                                alt="aparte"
                                className="w-screen h-screen" />
                            <div
                                className="absolute flex flex-col left-[5vw] top-[35vh] px-8  font-semibold w-[60vw] h-[30vh] bg-black/25 text-[#e5e5e2]  items-center justify-center"
                            >
                                <div className="text-3xl my-2">Find Your Perfect Abode</div>
                                Short stays, looking to rent residential apartment or buy a property?
                                Find a property that suits your style and purpose from our available listings
                            </div>
                            <form action="" className='w-fit bg-[#fafaf1] rounded-t transition-all delay-100 text-black h-[6rem] flex flex-row -bottom-12 rounded-9 left-[25vw] absolute mx-5 p-3' method="get">

                                <div className="flex flex-col mx-3 ">
                                    <label htmlFor="location">Choose a location</label>
                                    <input type="text" placeholder='location' className="cursor-pointer focus:border-b-amber-400 border-b transition-all delay-50  border-[#e6e6de] hover:border-black mt-2 h-8 focus:outline-none focus:ring-0" />
                                </div>

                                <div className="flex flex-col mx-3">
                                    <label htmlFor="adults">Adults (over 18 )</label>
                                    <div className="flex flex-row mt-2">
                                        <div className='border cursor-pointer hover:bg-[#b2b2aa] hover:text-[#fff] text-[#b2b2aa] border-[#e6e6de] focus:outline-none  focus:ring-0 px-2 h-[2rem] flex items-center justify-center'>-</div>
                                        <input className=" w-10 h-6  mx-2 border-b-1 focus:outline-none focus:ring-0 border-[#e6e6de] mt-2 transition-all delay-50 hover:border-b-black focus:border-b-amber-400 " />
                                        <div className='border cursor-pointer hover:bg-[#b2b2aa] hover:text-[#fff] text-[#b2b2aa] border-[#e6e6de] focus:outline-none  focus:ring-0 px-2 h-[2rem] flex items-center justify-center'>+</div>
                                    </div>

                                </div>
                                <div className="flex flex-col mx-3">
                                    <label htmlFor="adults">Children</label>
                                    <div className="flex flex-row mt-2">
                                        <div className='border cursor-pointer hover:bg-[#b2b2aa] hover:text-[#fff] text-[#b2b2aa] border-[#e6e6de] focus:outline-none  focus:ring-0 px-2 h-[2rem] flex items-center justify-center'>-</div>
                                        <input className=" w-10 h-6 mx-2 border-b-1 focus:outline-none focus:ring-0 border-[#e6e6de] mt-2 transition-all delay-50 hover:border-b-black focus:border-b-amber-400" />
                                        <div className='border cursor-pointer hover:bg-[#b2b2aa] hover:text-[#fff] text-[#b2b2aa] border-[#e6e6de] focus:outline-none  focus:ring-0 px-2 h-[2rem] flex items-center justify-center'>+</div>

                                    </div>

                                </div>

                                <div className="my-button">
                                    <div className="mx-2 px-3  "><Search className='' size={30} strokeWidth={1.75} /></div>
                                    <div className="mx-2 px-3">Check Availability</div>
                                </div>
                            </form>
                        </section>

                        <section className='apartments bg-[#fafaf1]  flex w-full min-h-screen flex-col px-4 items-center py-3 text-[#0c0c09] lg:justify-center'>
                            <h5 className='text-3xl my-1'>
                                Our Latest Listings And Offers
                            </h5 >
                            <p className='my-1'>
                                Other Customers Found These Listings Appealing
                            </p>
                            <div className='flex flex-row'>
                                <div className="flex flex-col flex-1/3 p-2">
                                    <div className="img">
                                        <img src={rent1} alt="" />
                                    </div>
                                    <div className='p-4 flex flex-col  bg-[#efefc5] flex-2/3'>
                                        <div className='flex flex-row justify-between mb-3'>
                                            <div>location</div>
                                            <div className="stars flex flex-row">
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                            </div>
                                        </div>
                                        <div className='flex flex-col mb-5 '>
                                            <div className='py-[1px]'>tunde's 5 star shortlet apartment in vi</div>
                                            <div className='py-[1px]'>3guests - 5 baths 2beds </div>
                                            <div className='py-[1px]'>wifi, swimming pool, more</div>
                                        </div>
                                        <div className='flex flex-row justify-between p-[1px]'>
                                            <div>price here</div>
                                            <button type="button">learn more</button>
                                        </div>

                                    </div>

                                </div>

                                <div className="flex flex-col flex-1/3 p-2">
                                    <div className="img">
                                        <img src={rent1} alt="" />
                                    </div>
                                    <div className='p-4 flex flex-col bg-[#efefc5] flex-2/3'>
                                        <div className='flex flex-row justify-between mb-3'>
                                            <div>location</div>
                                            <div className="stars flex flex-row">
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                            </div>                                          </div>
                                        <div className='flex flex-col mb-5 '>
                                            <div className='py-[1px]'>tunde's 5 star shortlet apartment in vi</div>
                                            <div className='py-[1px]'>3guests - 5 baths 2beds </div>
                                            <div className='py-[1px]'>wifi, swimming pool, more</div>
                                        </div>
                                        <div className='flex flex-row justify-between p-[1px]'>
                                            <div>price here</div>
                                            <button type="button">learn more</button>
                                        </div>

                                    </div>

                                </div>
                                <div className="flex flex-col flex-1/3 p-2">
                                    <div className="img">
                                        <img src={rent1} alt="" />
                                    </div>
                                    <div className='p-4 flex flex-col bg-[#efefc5] flex-2/3'>
                                        <div className='flex flex-row justify-between mb-3'>
                                            <div>location</div>
                                            <div className="stars flex flex-row">
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                            </div>
                                        </div>
                                        <div className='flex flex-col mb-5 '>
                                            <div className='py-[1px]'>tunde's 5 star shortlet apartment in vi</div>
                                            <div className='py-[1px]'>3guests - 5 baths 2beds </div>
                                            <div className='py-[1px]'>wifi, swimming pool, more</div>
                                        </div>
                                        <div className='flex flex-row justify-between p-[1px]'>
                                            <div>price here</div>
                                            <button type="button">learn more</button>
                                        </div>

                                    </div>
                                </div>


                            </div>
                            <div className='flex flex-row'>
                                <div className="flex flex-col flex-1/3 p-2">
                                    <div className="img">
                                        <img src={rent1} alt="" />
                                    </div>
                                    <div className='p-4 flex flex-col  bg-[#efefc5] flex-2/3'>
                                        <div className='flex flex-row justify-between mb-3'>
                                            <div>location</div>
                                            <div className="stars flex flex-row">
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                            </div>                                          </div>
                                        <div className='flex flex-col mb-5 '>
                                            <div className='py-[1px]'>tunde's 5 star shortlet apartment in vi</div>
                                            <div className='py-[1px]'>3guests - 5 baths 2beds </div>
                                            <div className='py-[1px]'>wifi, swimming pool, more</div>
                                        </div>
                                        <div className='flex flex-row justify-between p-[1px]'>
                                            <div>price here</div>
                                            <button type="button">learn more</button>
                                        </div>

                                    </div>

                                </div>

                                <div className="flex flex-col flex-1/3 p-2">
                                    <div className="img">
                                        <img src={rent1} alt="" />
                                    </div>
                                    <div className='p-4 flex flex-col bg-[#efefc5] flex-2/3'>
                                        <div className='flex flex-row justify-between mb-3'>
                                            <div>location</div>
                                            <div className="stars flex flex-row">
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                            </div>                                          </div>
                                        <div className='flex flex-col mb-5 '>
                                            <div className='py-[1px]'>tunde's 5 star shortlet apartment in vi</div>
                                            <div className='py-[1px]'>3guests - 5 baths 2beds </div>
                                            <div className='py-[1px]'>wifi, swimming pool, more</div>
                                        </div>
                                        <div className='flex flex-row justify-between p-[1px]'>
                                            <div>price here</div>
                                            <button type="button">learn more</button>
                                        </div>

                                    </div>

                                </div>
                                <div className="flex flex-col flex-1/3 p-2">
                                    <div className="img">
                                        <img src={rent1} alt="" />
                                    </div>
                                    <div className='p-4 flex flex-col bg-[#efefc5] flex-2/3'>
                                        <div className='flex flex-row justify-between mb-3'>
                                            <div>location</div>
                                            <div className="stars flex flex-row">
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                            </div>                                          </div>
                                        <div className='flex flex-col mb-5 '>
                                            <div className='py-[1px]'>tunde's 5 star shortlet apartment in vi</div>
                                            <div className='py-[1px]'>3guests - 5 baths 2beds </div>
                                            <div className='py-[1px]'>wifi, swimming pool, more</div>
                                        </div>
                                        <div className='flex flex-row justify-between p-[1px]'>
                                            <div>price here</div>
                                            <button type="button">learn more</button>
                                        </div>

                                    </div>
                                </div>


                            </div>
                            <div className='flex flex-row'>
                                <div className="flex flex-col flex-1/3 p-2">
                                    <div className="img">
                                        <img src={rent1} alt="" />
                                    </div>
                                    <div className='p-4 flex flex-col  bg-[#efefc5] flex-2/3'>
                                        <div className='flex flex-row justify-between mb-3'>
                                            <div>location</div>
                                            <div className="stars flex flex-row">
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                            </div>
                                        </div>
                                        <div className='flex flex-col mb-5 '>
                                            <div className='py-[1px]'>tunde's 5 star shortlet apartment in vi</div>
                                            <div className='py-[1px]'>3guests - 5 baths 2beds </div>
                                            <div className='py-[1px]'>wifi, swimming pool, more</div>
                                        </div>
                                        <div className='flex flex-row justify-between p-[1px]'>
                                            <div>price here</div>
                                            <button type="button">learn more</button>
                                        </div>

                                    </div>

                                </div>

                                <div className="flex flex-col flex-1/3 p-2">
                                    <div className="img">
                                        <img src={rent1} alt="" />
                                    </div>
                                    <div className='p-4 flex flex-col bg-[#efefc5] flex-2/3'>
                                        <div className='flex flex-row justify-between mb-3'>
                                            <div>location</div>
                                            <div className="stars flex flex-row">
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                            </div>
                                        </div>
                                        <div className='flex flex-col mb-5 '>
                                            <div className='py-[1px]'>tunde's 5 star shortlet apartment in vi</div>
                                            <div className='py-[1px]'>3guests - 5 baths 2beds </div>
                                            <div className='py-[1px]'>wifi, swimming pool, more</div>
                                        </div>
                                        <div className='flex flex-row justify-between p-[1px]'>
                                            <div>price here</div>
                                            <button type="button">learn more</button>
                                        </div>

                                    </div>

                                </div>
                                <div className="flex flex-col flex-1/3 p-2">
                                    <div className="img">
                                        <img src={rent1} alt="" />
                                    </div>
                                    <div className='p-4 flex flex-col bg-[#efefc5] flex-2/3'>
                                        <div className='flex flex-row justify-between mb-3'>
                                            <div>location</div>
                                            <div className="stars flex flex-row">
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                            </div>
                                        </div>
                                        <div className='flex flex-col mb-5 '>
                                            <div className='py-[1px]'>tunde's 5 star shortlet apartment in vi</div>
                                            <div className='py-[1px]'>3guests - 5 baths 2beds </div>
                                            <div className='py-[1px]'>wifi, swimming pool, more</div>
                                        </div>
                                        <div className='flex flex-row justify-between p-[1px]'>
                                            <div>price here</div>
                                            <button type="button">learn more</button>
                                        </div>

                                    </div>
                                </div>


                            </div>
                            <button className="py-2.5 text-black px-3 my-button ">See More</button>
                        </section>

                        {/* review section starts  */}
                        <section className=' bg-[#fafaf1]  flex w-full min-h-screen flex-col px-4 items-center py-3 text-[#0c0c09] lg:justify-center'>
                            <div className="flex m-4 p-5 text-3xl font-light  justify-center items-center">Hear what people have to say about their experience with Dreamer's Nest and how they rate us</div>
                            <div className="flex flex-row  m-4 p-5 justify-center items-center">
                                <div className="flex flex-1/4 flex-col p-3 m-2 shadow-sm shadow-[#fcd34d] relative">
                                    <div className="name my-2">Rajesh</div>
                                    <div className="absolute -top-10 right-3 rounded-full w-[6rem] h-[6rem] bg-orange-400 flex items-center justify-center text-xs">
                                        <img className='w-full h-full rounded-full' src={man1} alt="" />
                                    </div>
                                    <div className="stars flex flex-row">
                                        <Star className='text-yellow-500 fill-yellow-500' />
                                        <Star className='text-yellow-500 fill-yellow-500' />
                                        <Star className='text-yellow-500 fill-yellow-500' />
                                        <Star className='text-yellow-500 fill-yellow-500' />
                                        <Star className='text-yellow-500 fill-yellow-500' />
                                    </div>
                                    <div className="experience my-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam debitis architecto a vero voluptates enim.</div>
                                    <div className="date mt-2">date of review</div>
                                </div>
                                <div className="flex flex-1/4 flex-col p-3 m-2 shadow-sm shadow-[#fcd34d] relative">
                                    <div className="name my-2">Andrew</div>
                                    <div className="absolute -top-10 right-3 rounded-full w-[6rem] h-[6rem] bg-orange-400 flex items-center justify-center text-xs">
                                        <img className='w-full h-full rounded-full cov' src={man2} alt="" />
                                    </div>
                                    <div className="stars flex flex-row">
                                        <Star className='text-yellow-500 fill-yellow-500' />
                                        <Star className='text-yellow-500 fill-yellow-500' />
                                        <Star className='text-yellow-500 fill-yellow-500' />
                                        <Star className='text-yellow-500 fill-yellow-500' />
                                        <Star className='text-yellow-500 fill-yellow-500' />
                                    </div>                                    <div className="experience my-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam debitis architecto a vero voluptates enim.</div>
                                    <div className="date mt-2">date of review</div>
                                </div>
                                <div className="flex flex-1/4 flex-col p-3 m-2 shadow-sm shadow-[#fcd34d] relative">
                                    <div className="name my-2">Isime</div>
                                    <div className="absolute -top-10 right-3 rounded-full w-[6rem] h-[6rem] bg-orange-400 flex items-center justify-center text-xs">
                                        <img className='w-[100%] h-[100%] rounded-full' src={woman1} alt="" />
                                    </div>
                                    <div className="stars flex flex-row">
                                        <Star className='text-yellow-500 fill-yellow-500' />
                                        <Star className='text-yellow-500 fill-yellow-500' />
                                        <Star className='text-yellow-500 fill-yellow-500' />
                                        <Star className='text-yellow-500 fill-yellow-500' />
                                        <Star className='text-yellow-500 fill-yellow-500' />
                                    </div>                                    <div className="experience my-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam debitis architecto a vero voluptates enim.</div>
                                    <div className="date mt-2">date of review</div>
                                </div>
                                <div className="flex flex-1/4 flex-col p-3 m-2 shadow-sm shadow-[#fcd34d] relative">
                                    <div className="name my-2">Cynthia</div>
                                    <div className="absolute -top-10 right-3 rounded-full w-[6rem] h-[6rem] bg-orange-400 flex items-center justify-center text-xs">
                                        <img className='w-full h-full rounded-full' src={woman2} alt="" />
                                    </div>
                                    <div className="stars flex flex-row">
                                        <Star className='text-yellow-500 fill-yellow-500' />
                                        <Star className='text-yellow-500 fill-yellow-500' />
                                        <Star className='text-yellow-500 fill-yellow-500' />
                                        <Star className='text-yellow-500 fill-yellow-500' />
                                        <Star className='text-yellow-500 fill-yellow-500' />
                                    </div>                                    <div className="experience my-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam debitis architecto a vero voluptates enim.</div>
                                    <div className="date mt-2">date of review</div>

                                </div>



                            </div>

                            <div className="flex flex-row items-center justify-center">
                                <div className="rounded-full border w-[1rem] mx-2 h-[1rem] bg-[#fcd34d] border-[#fcd34d] "></div>
                                <div className="rounded-full border w-[1rem] mx-2 h-[1rem] border-[#fcd34d] "></div>
                                <div className="rounded-full border w-[1rem] mx-2 h-[1rem] border-[#fcd34d] "></div>
                            </div>                            <div className="flex m-4 p-5 justify-center items-center">
                                <button className='my-button px-5 py-3 w-[9rem] h-[3rem]'>See More</button>

                            </div>


                        </section>
                        {/* review section ends */}

                        {/* listings section starts */}
                        <section className=' flex w-full min-h-screen bg-[#efefc5] flex-col items-center pb-2 text-[#0c0c09] lg:justify-center'>
                            <div className="grid grid-cols-4 gap-4 mx-2 p-3">
                                <div className="flex flex-col flex-1/4 mx-2">
                                    <div className="img">
                                        <img src={rent1} alt="" />
                                    </div>
                                    <div className='p-4 flex flex-col bg-[#efefc5] flex-2/3'>
                                        <div className='flex flex-row justify-between mb-3'>
                                            <div>location</div>
                                            <div className="stars flex flex-row">
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                            </div>                                          </div>
                                        <div className='flex flex-col mb-5 '>
                                            <div className='py-[1px]'>tunde's 5 star shortlet apartment in vi</div>
                                            <div className='py-[1px]'>3guests - 5 baths 2beds </div>
                                            <div className='py-[1px]'>wifi, swimming pool, more</div>
                                        </div>
                                        <div className='flex flex-row justify-between p-[1px]'>
                                            <div>price here</div>
                                            <button type="button">learn more</button>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex flex-col flex-1/4 mx-2">
                                    <div className="img">
                                        <img src={rent1} alt="" />
                                    </div>
                                    <div className='p-4 flex flex-col bg-[#efefc5] flex-2/3'>
                                        <div className='flex flex-row justify-between mb-3'>
                                            <div>location</div>
                                            <div className="stars flex flex-row">
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                            </div>
                                        </div>
                                        <div className='flex flex-col mb-5 '>
                                            <div className='py-[1px]'>tunde's 5 star shortlet apartment in vi</div>
                                            <div className='py-[1px]'>3guests - 5 baths 2beds </div>
                                            <div className='py-[1px]'>wifi, swimming pool, more</div>
                                        </div>
                                        <div className='flex flex-row justify-between p-[1px]'>
                                            <div>price here</div>
                                            <button type="button">learn more</button>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex flex-col flex-1/4 mx-2">
                                    <div className="img">
                                        <img src={rent1} alt="" />
                                    </div>
                                    <div className='p-4 flex flex-col bg-[#efefc5] flex-2/3'>
                                        <div className='flex flex-row justify-between mb-3'>
                                            <div>location</div>
                                            <div className="stars flex flex-row">
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                            </div>
                                        </div>
                                        <div className='flex flex-col mb-5 '>
                                            <div className='py-[1px]'>tunde's 5 star shortlet apartment in vi</div>
                                            <div className='py-[1px]'>3guests - 5 baths 2beds </div>
                                            <div className='py-[1px]'>wifi, swimming pool, more</div>
                                        </div>
                                        <div className='flex flex-row justify-between p-[1px]'>
                                            <div>price here</div>
                                            <button type="button">learn more</button>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex flex-col flex-1/4 mx-2">
                                    <div className="img">
                                        <img src={rent1} alt="" />
                                    </div>
                                    <div className='p-4 flex flex-col bg-[#efefc5] flex-2/3'>
                                        <div className='flex flex-row justify-between mb-3'>
                                            <div>location</div>
                                            <div className="stars flex flex-row">
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                            </div>
                                        </div>
                                        <div className='flex flex-col mb-5 '>
                                            <div className='py-[1px]'>tunde's 5 star shortlet apartment in vi</div>
                                            <div className='py-[1px]'>3guests - 5 baths 2beds </div>
                                            <div className='py-[1px]'>wifi, swimming pool, more</div>
                                        </div>
                                        <div className='flex flex-row justify-between p-[1px]'>
                                            <div>price here</div>
                                            <button type="button">learn more</button>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex flex-col flex-1/4 mx-2">
                                    <div className="img">
                                        <img src={rent1} alt="" />
                                    </div>
                                    <div className='p-4 flex flex-col bg-[#efefc5] flex-2/3'>
                                        <div className='flex flex-row justify-between mb-3'>
                                            <div>location</div>
                                            <div className="stars flex flex-row">
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                            </div>
                                        </div>
                                        <div className='flex flex-col mb-5 '>
                                            <div className='py-[1px]'>tunde's 5 star shortlet apartment in vi</div>
                                            <div className='py-[1px]'>3guests - 5 baths 2beds </div>
                                            <div className='py-[1px]'>wifi, swimming pool, more</div>
                                        </div>
                                        <div className='flex flex-row justify-between p-[1px]'>
                                            <div>price here</div>
                                            <button type="button">learn more</button>
                                        </div>

                                    </div>
                                </div><div className="flex flex-col flex-1/4 mx-2">
                                    <div className="img">
                                        <img src={rent1} alt="" />
                                    </div>
                                    <div className='p-4 flex flex-col bg-[#efefc5] flex-2/3'>
                                        <div className='flex flex-row justify-between mb-3'>
                                            <div>location</div>
                                            <div className="stars flex flex-row">
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                            </div>
                                        </div>
                                        <div className='flex flex-col mb-5 '>
                                            <div className='py-[1px]'>tunde's 5 star shortlet apartment in vi</div>
                                            <div className='py-[1px]'>3guests - 5 baths 2beds </div>
                                            <div className='py-[1px]'>wifi, swimming pool, more</div>
                                        </div>
                                        <div className='flex flex-row justify-between p-[1px]'>
                                            <div>price here</div>
                                            <button type="button">learn more</button>
                                        </div>

                                    </div>
                                </div><div className="flex flex-col flex-1/4 mx-2">
                                    <div className="img">
                                        <img src={rent1} alt="" />
                                    </div>
                                    <div className='p-4 flex flex-col bg-[#efefc5] flex-2/3'>
                                        <div className='flex flex-row justify-between mb-3'>
                                            <div>location</div>
                                            <div className="stars flex flex-row">
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                            </div>
                                        </div>
                                        <div className='flex flex-col mb-5 '>
                                            <div className='py-[1px]'>tunde's 5 star shortlet apartment in vi</div>
                                            <div className='py-[1px]'>3guests - 5 baths 2beds </div>
                                            <div className='py-[1px]'>wifi, swimming pool, more</div>
                                        </div>
                                        <div className='flex flex-row justify-between p-[1px]'>
                                            <div>price here</div>
                                            <button type="button">learn more</button>
                                        </div>

                                    </div>
                                </div><div className="flex flex-col flex-1/4 mx-2">
                                    <div className="img">
                                        <img src={rent1} alt="" />
                                    </div>
                                    <div className='p-4 flex flex-col bg-[#efefc5] flex-2/3'>
                                        <div className='flex flex-row justify-between mb-3'>
                                            <div>location</div>
                                            <div className="stars flex flex-row">
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                            </div>
                                        </div>
                                        <div className='flex flex-col mb-5 '>
                                            <div className='py-[1px]'>tunde's 5 star shortlet apartment in vi</div>
                                            <div className='py-[1px]'>3guests - 5 baths 2beds </div>
                                            <div className='py-[1px]'>wifi, swimming pool, more</div>
                                        </div>
                                        <div className='flex flex-row justify-between p-[1px]'>
                                            <div>price here</div>
                                            <button type="button">learn more</button>
                                        </div>

                                    </div>
                                </div><div className="flex flex-col flex-1/4 mx-2">
                                    <div className="img">
                                        <img src={rent1} alt="" />
                                    </div>
                                    <div className='p-4 flex flex-col bg-[#efefc5] flex-2/3'>
                                        <div className='flex flex-row justify-between mb-3'>
                                            <div>location</div>
                                            <div className="stars flex flex-row">
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                            </div>
                                        </div>
                                        <div className='flex flex-col mb-5 '>
                                            <div className='py-[1px]'>tunde's 5 star shortlet apartment in vi</div>
                                            <div className='py-[1px]'>3guests - 5 baths 2beds </div>
                                            <div className='py-[1px]'>wifi, swimming pool, more</div>
                                        </div>
                                        <div className='flex flex-row justify-between p-[1px]'>
                                            <div>price here</div>
                                            <button type="button">learn more</button>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex flex-col flex-1/4 mx-2">
                                    <div className="img">
                                        <img src={rent1} alt="" />
                                    </div>
                                    <div className='p-4 flex flex-col bg-[#efefc5] flex-2/3'>
                                        <div className='flex flex-row justify-between mb-3'>
                                            <div>location</div>
                                            <div className="stars flex flex-row">
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                            </div>                                          </div>
                                        <div className='flex flex-col mb-5 '>
                                            <div className='py-[1px]'>tunde's 5 star shortlet apartment in vi</div>
                                            <div className='py-[1px]'>3guests - 5 baths 2beds </div>
                                            <div className='py-[1px]'>wifi, swimming pool, more</div>
                                        </div>
                                        <div className='flex flex-row justify-between p-[1px]'>
                                            <div>price here</div>
                                            <button type="button">learn more</button>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex flex-col flex-1/4 mx-2">
                                    <div className="img">
                                        <img src={rent1} alt="" />
                                    </div>
                                    <div className='p-4 flex flex-col bg-[#efefc5] flex-2/3'>
                                        <div className='flex flex-row justify-between mb-3'>
                                            <div>location</div>
                                            <div className="stars flex flex-row">
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                            </div>                                          </div>
                                        <div className='flex flex-col mb-5 '>
                                            <div className='py-[1px]'>tunde's 5 star shortlet apartment in vi</div>
                                            <div className='py-[1px]'>3guests - 5 baths 2beds </div>
                                            <div className='py-[1px]'>wifi, swimming pool, more</div>
                                        </div>
                                        <div className='flex flex-row justify-between p-[1px]'>
                                            <div>price here</div>
                                            <button type="button">learn more</button>
                                        </div>

                                    </div>
                                </div><div className="flex flex-col flex-1/4 mx-2">
                                    <div className="img">
                                        <img src={rent1} alt="" />
                                    </div>
                                    <div className='p-4 flex flex-col bg-[#efefc5] flex-2/3'>
                                        <div className='flex flex-row justify-between mb-3'>
                                            <div>location</div>
                                            <div className="stars flex flex-row">
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                                <Star className='text-yellow-500 fill-yellow-500' />
                                            </div>                                          </div>
                                        <div className='flex flex-col mb-5 '>
                                            <div className='py-[1px]'>tunde's 5 star shortlet apartment in vi</div>
                                            <div className='py-[1px]'>3guests - 5 baths 2beds </div>
                                            <div className='py-[1px]'>wifi, swimming pool, more</div>
                                        </div>
                                        <div className='flex flex-row justify-between p-[1px]'>
                                            <div>price here</div>
                                            <button type="button">learn more</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <button className="py-2.5 my-button text-white px-3 ">See All Listings</button>
                        </section>
                        {/* Listings section ends */}

                        <section className= 'flex w-full h-[10vw] p-10 justify-center items-center flex-row text-white bg-yellow-500'>
                     <div className="flex-3/4 text-2xl font-bold">We specialize in providing you a home-away-from-home experience. </div>
                     <div className="w-[12rem] flex justify-center ml-10">
  <button className="rounded-full w-full my-button group relative flex items-center justify-center">
    Contact Us
    <i
      className="fa-solid fa-arrow-right ml-2 transform transition-all duration-300 delay-100 group-hover:translate-x-1"
    ></i>
  </button>
</div>
          </section>

                        {/* footer section starts */}
                      <Foot/>
                        {/* Footer section ends */}



                    </main>
                </div>
            </div>
        </>
    );
}
