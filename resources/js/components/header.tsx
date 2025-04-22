
import { Link, usePage } from "@inertiajs/react"
import { type SharedData } from '@/types';

const Heading = () => {

    const { auth } = usePage<SharedData>().props;

    return(
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
        </div>
    )

}

export default Heading