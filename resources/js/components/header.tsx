
import { Link, usePage } from "@inertiajs/react"
import { type SharedData } from '@/types';

const Heading = () => {

    const { auth } = usePage<SharedData>().props;

    return(
        <header className="w-full text-sm not-has-[nav]:hidden bg-[#000] sticky top-0 z-1">
        <nav className="flex p-3 items-center justify-between cursor-pointer text-yellow-500 border-b-yellow-400 border-b">
            <Link href='/' className='flex flex-row'>Dreamer's Nest</Link>

            <ul className='flex text-[1rem] flex-row justify-evenly '>
                <Link href='/' className="nav-item ml-2 hover:text-white">Home

                </Link>
                <Link href='about' className="nav-item ml-2 hover:text-white">About Us</Link>
                <Link href='properties' className="relative ml-2 nav-item group hover:text-white">Properties
                    <div className='absolute bg-[#000] text-yellow-500 rounded-[3px] px-4 py-2 sub-menu hidden group-hover:flex-col group-hover:flex '>
                        <Link className='py-1 hover:text-white' href='shortlet'>Shortlet</Link>
                        <Link className='py-1 hover:text-white' href='rent'>Rent</Link>
                        <Link className='py-1 hover:text-white' href='sale'>Sale</Link>
                    </div>

                </Link>
                <Link href="contact" className="nav-item ml-2 hover:text-white">Contact Us</Link>                        </ul>

            <div className="auth">
                {auth.user ? (
                    <Link
                        href={route('dashboard')}
                        className="inline-block rounded-sm border transition-all delay-50 border-[#19140035] px-5 py-1.5 text-sm leading-normal  hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] hover:bg-yellow-500 hover:text-white"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link
                            href={route('login')}
                            className="inline-block rounded-sm transition-all delay-50 border border-transparent px-5 py-1.5 text-sm leading-normal mr-1  hover:border-[#19140035]  dark:hover:border-[#3E3E3A]  hover:bg-yellow-500 hover:text-white"
                        >
                            Log in
                        </Link>
                        <Link
                            href={route('register')}
                            className="inline-block rounded-sm border transition-all delay-50 border-[#19140035] px-5 py-1.5 text-sm leading-normal  hover:border-[#1915014a] dark:border-[#3E3E3A]  dark:hover:border-[#62605b]  hover:bg-yellow-500 hover:text-white"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>

        </nav>
    </header>
    )

}

export default Heading