import rent1 from "../../images/apt1.avif"
import { useState } from 'react';
import Header from '../../js/components/header'


const Properties = () => {



    const [expand, setExpand] = useState(false)
    return (
        <div className="flex w-full min-h-screen flex-col items-center bg-black pb-2 text-[#EDEDEC] lg:justify-center dark:bg-[#0a0a0a]">
          <Header/>

            <div className="flex w-full items-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                <main className="flex w-full items-center flex-col text-sm">
                <div className='text-3xl justify-center items-center py-3 my-6 px-[50px]'>
                 Find a property that suits your style and purpose.               </div>
                    <section className='apartments flex w-full min-h-screen flex-row items-center pb-2 text-[#EDEDEC] lg:justify-center'>
                        <div className="hero-cols flex flex-col flex-1/2 mx-3 px3">

                            <div className="relative lets mb-3 border bg-white text-black w-full h-[200px] border-emerald-500 flex flex-row">
                                <div className=''>
                                    <img
                                        className={`w-full h-full cursor-pointer transition-all duration-300 ${expand ?
                                            'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[50vh] max-h-[70vh] max-w-[70vw] z-50' :
                                            'static'
                                            }`}
                                        src={rent1}
                                        alt="apartment image"
                                        onClick={() => setExpand(!expand)}

                                    />

                                </div>


                                <div className='p-4 flex flex-col flex-2/3'>
                                    <div className='flex flex-row justify-between mb-3'>
                                        <div>location</div>
                                        <div>stars</div>
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


                            <div className="relative lets border mb-3 bg-white text-black w-full h-[200px] border-emerald-500 flex flex-row">
                                <div className=''>
                                    <img
                                        className={`w-full h-full cursor-pointer transition-all duration-300 ${expand ?
                                            'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[50vh] max-h-[70vh] max-w-[70vw] z-50' :
                                            'static'
                                            }`}
                                        src={rent1}
                                        alt="apartment image"
                                        onClick={() => setExpand(!expand)}

                                    />

                                </div>


                                <div className='p-4 flex flex-col flex-2/3'>
                                    <div className='flex flex-row justify-between mb-3'>
                                        <div>location</div>
                                        <div>stars</div>
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

                            <div className="relative lets mb-3 bg-white text-black border w-full h-[200px] border-emerald-500 flex flex-row">
                                <div className=''>
                                    <img
                                        className={`w-full h-full cursor-pointer transition-all duration-300 ${expand ?
                                            'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[50vh] max-h-[70vh] max-w-[70vw] z-50' :
                                            'static'
                                            }`}
                                        src={rent1}
                                        alt="apartment image"
                                        onClick={() => setExpand(!expand)}

                                    />

                                </div>


                                <div className='p-4 flex flex-col flex-2/3'>
                                    <div className='flex flex-row justify-between mb-3'>
                                        <div>location</div>
                                        <div>stars</div>
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

                        <div className="hero-cols flex flex-col flex-1/2 mx-3 px3">

                            <div className="relative lets mb-3 border bg-white text-black w-full h-[200px] border-emerald-500 flex flex-row">
                                <div className=''>
                                    <img
                                        className={`w-full h-full cursor-pointer transition-all duration-300 ${expand ?
                                            'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[50vh] max-h-[70vh] max-w-[70vw] z-50' :
                                            'static'
                                            }`}
                                        src={rent1}
                                        alt="apartment image"
                                        onClick={() => setExpand(!expand)}

                                    />

                                </div>


                                <div className='p-4 flex flex-col flex-2/3'>
                                    <div className='flex flex-row justify-between mb-3'>
                                        <div>location</div>
                                        <div>stars</div>
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


                            <div className="relative lets border mb-3 bg-white text-black w-full h-[200px] border-emerald-500 flex flex-row">
                                <div className=''>
                                    <img
                                        className={`w-full h-full cursor-pointer transition-all duration-300 ${expand ?
                                            'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[50vh] max-h-[70vh] max-w-[70vw] z-50' :
                                            'static'
                                            }`}
                                        src={rent1}
                                        alt="apartment image"
                                        onClick={() => setExpand(!expand)}

                                    />

                                </div>


                                <div className='p-4 flex flex-col flex-2/3'>
                                    <div className='flex flex-row justify-between mb-3'>
                                        <div>location</div>
                                        <div>stars</div>
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

                            <div className="relative lets mb-3 bg-white text-black border w-full h-[200px] border-emerald-500 flex flex-row">
                                <div className=''>
                                    <img
                                        className={`w-full h-full cursor-pointer transition-all duration-300 ${expand ?
                                            'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[50vh] max-h-[70vh] max-w-[70vw] z-50' :
                                            'static'
                                            }`}
                                        src={rent1}
                                        alt="apartment image"
                                        onClick={() => setExpand(!expand)}

                                    />

                                </div>


                                <div className='p-4 flex flex-col flex-2/3'>
                                    <div className='flex flex-row justify-between mb-3'>
                                        <div>location</div>
                                        <div>stars</div>
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
                    </section>

                    <section className='flex w-full h-fit flex-row px-2 items-start py-1 text-[#818104] lg:justify-center'>
                        <div className="flex-col flex mx-3  flex-1/3 py-3">
                            <span className="text-2xl py-1">About Us</span>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam accusantium, quam iusto neque impedit eius rem delectus ratione eveniet ducimus officia consequatur, veritatis totam? Sit doloribus ipsa ea recusandae modi!</span>
                        </div>
                        <div className="flex-col flex mx-3 flex-1/3 py-3">
                            <span className='text-2xl'>Contact Us</span>
                            <div className="flex-flx-col">
                                <div>Phone: 12345678</div>
                                <div>mail: 12345678</div>
                            </div>
                            <div className="flex flex-col">
                                <span>connect with us on</span>
                                <span>Twitter</span>
                                <span>TikTok</span>
                                <span>Instagram</span>
                                <span>Instagram</span>
                                <span>Whatsapp</span>
                                <span>Telegram</span>
                            </div>
                        </div>
                        <div className="flex-col flex mx-6 flex-1/3 py-3">
                            <span>Support</span>
                            <form action="" method="post">

                            </form>
                        </div>

                    </section>
                </main>
            </div>
        </div>
    )
}

export default Properties