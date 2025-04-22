
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react'
const Contact = () => {

    const { auth } = usePage<SharedData>().props;



    return (
        <div className="flex w-full min-h-screen flex-col items-center bg-black pb-2 text-[#EDEDEC] lg:justify-center dark:bg-[#0a0a0a]">
        <header className="w-full text-sm not-has-[nav]:hidden bg-black sticky top-0 z-1">
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
                        <Link href="contact" className="nav-item">Contact Us</Link>  
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
            <main className="flex w-full items-center flex-col text-sm">
            <div className='text-3xl flex flex-row justify-center items-center py-3 my-6 px-[50px]'>
            
            <div className="flex-1/2 flex items-center justify-center">
            social media Handles
            </div>
            <div className="flex-1/2">
            <form className='flex flex-col' action="get
            ">
              <div className='flex flex-col'>
                <div><label htmlFor="name">Name</label>
                <input type="text" name="name" id="" />
                </div>
                <div></div>
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>  
                
        </form></div>
          </div>
            </main>
        </div>
    </div>
    )
}

export default Contact