import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import aparte2 from "../../images/lagos.jpg"
import rent1 from "../../images/apt1.avif"
// import { useState } from 'react';


export default function Welcome() {
    const { auth } = usePage<SharedData>().props;


    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex w-full min-h-screen flex-col items-center bg-black pb-2 text-[#EDEDEC] lg:justify-center dark:bg-[#0a0a0a]">
                <header className="w-full text-sm not-has-[nav]:hidden bg-[#0e112a] sticky top-0 z-1">
                    <nav className="flex p-3 items-center justify-between cursor-pointer border-b-[#EDEDEC] border-b">
                        <div className='flex flex-row'>logo here</div>

                        <ul className='flex flex-row justify-evenly'>
                            <Link href='/' className="nav-item px-1">Home

                            </Link>
                            <Link href='about' className="nav-item">About Us</Link>
                            <Link href='properties' className="nav-item">Properties
                                <div className='sub-menu hidden'>
                                    <div>Shortlet</div>
                                    <div>Rent</div>
                                    <div>Sale</div>
                                </div>

                            </Link>
                            <li className="nav-item">Contact Us</li>
                        </ul>

                        <div className="auth">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal mr-1 text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>

                    </nav>
                </header>
                <div className="flex w-full items-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full flex-col text-sm">
                        <section className="hero flex w-full min-h-screen flex-col items-center pb-2 text-[#d4d4a4] lg:justify-center ">
                            <img src={aparte2}
                                alt="aparte"
                                className="w-screen h-screen absolute" />
                            <div
                                className="absolute flex flex-col left-[5vw] top-[35vh] px-8  font-semibold w-[60vw] h-[30vh] bg-black/25 text-[#e5e5e2]  items-center justify-center"
                            >
                                <div className="text-3xl my-2">Find Your Perfect Abode</div>

                              Short stays, looking to rent residential apartment or buy a property? 
                              Find a property that suits your style and purpose from our available listings 
                            </div>
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

                                  <div className="flex flex-col flex-1/3 p-2">
                                  <div className="img">
                                    <img src={rent1} alt="" />
                                  </div>
                                  <div className='p-4 flex flex-col bg-[#efefc5] flex-2/3'>
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
                                  <div className="flex flex-col flex-1/3 p-2">
                                  <div className="img">
                                    <img src={rent1} alt="" />
                                  </div>
                                  <div className='p-4 flex flex-col bg-[#efefc5] flex-2/3'>
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
                            <button className="py-2.5 bg-[#818104] text-black px-3 ">See More</button>
                        </section>

                        {/* <section className='apartments flex w-full min-h-screen flex-row items-center pb-2 text-[#EDEDEC] lg:justify-center'>
                            <div className="hero-cols flex flex-col flex-1/2">

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

                            <div className="hero-cols flex-1/2">right col</div>
                        </section> */}

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
                        <div className="flex-col flex mx-3 flex-1/3 py-3">
                        <span>Support</span>
                        <form action="" method="post">

                        </form>
                        </div>

</section>


                        
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
