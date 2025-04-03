import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import aparte2 from "../../images/bg.png"
import rent1 from "../../images/apt1.avif"
import { useState } from 'react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    const [expand, setExpand] = useState(false)

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex w-full min-h-screen flex-col items-center bg-[#FDFDFC] pb-2 text-[#EDEDEC] lg:justify-center dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full text-sm not-has-[nav]:hidden">
                    <nav className="flex p-3 items-center justify-between cursor-pointer border-b-[#EDEDEC] border-b">
                        <div className='flex flex-row'>logo here</div>

                        <ul className='flex flex-row justify-evenly'>
                            <li className="nav-item px-1">Home

                            </li>
                            <li className="nav-item">About Us</li>
                            <li className="nav-item">Properties
                                <div className='sub-menu hidden'>
                                    <div>Shortlet</div>
                                    <div>Rent</div>
                                    <div>Sale</div>
                                </div>

                            </li>
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
                                        className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
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
                        <section className="hero flex w-full min-h-screen flex-col items-center pb-2 text-[#EDEDEC] lg:justify-center ">
                            <img src={aparte2}
                                alt="aparte"
                                className="w-screen h-screen absolute" />
                            <div
                                className="absolute left-[5vw] top-[35vh] w-[60vw] h-[30vh] bg-black/25 text-white flex items-center justify-center"
                            >
                                introduction text here
                            </div>
                        </section>

                        <section className='apartments flex w-full min-h-screen flex-row items-center pb-2 text-[#EDEDEC] lg:justify-center'>
                            <div className="hero-cols flex flex-col flex-1/2">

                                <div className="relative lets border w-full h-[200px] border-emerald-500 flex flex-row">
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


                                <div className="lets">2</div>
                                <div className="lets">3</div>
                            </div>

                            <div className="hero-cols flex-1/2">right col</div>
                        </section>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
