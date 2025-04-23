import posterImage from '../../images/aparte3.jpg'
import Header from '../../js/components/header'



const About = () => {



    return (
        <div className="flex w-full  min-h-screen flex-col items-center bg-black pb-2 text-[#EDEDEC] lg:justify-center dark:bg-[#0a0a0a]">
         <Header/>

            <div className="flex w-full items-center py-3 scroll px-40 opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                <main className="flex w-full flex-col text-sm">
                    <section className='apartments flex w-full min-h-screen flex-col items-center pb-2 text-[#EDEDEC] lg:justify-start'>
                        <div className='py-5 text-4xl'>About Our Company</div>
                        <div className='py-5 mb-10'>
                            <img src={posterImage} alt="" className='h-[60vh] w-[99vw]' />
                        </div>
                        <div className="flex flex-row">
                            <div className='flex-1/2 items-start mr-3 justify-start'>
                            <video className="h-full w-full rounded-lg" controls>
      <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
    </video>
                            </div>
                        <div className='my-3 px-6 flex-1/2 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quae eligendi, tempore animi harum rem sapiente sint ullam reiciendis nihil provident officia? Quibusdam porro deleniti, nemo, itaque aspernatur dolor ratione ab animi ipsum eius quis autem obcaecati eos veniam unde saepe. A obcaecati sequi suscipit amet voluptatum ut beatae doloribus sed blanditiis, expedita minima ratione assumenda. Officia inventore, voluptatum quidem in saepe dolor minus labore est id similique alias provident exercitationem vitae sunt repudiandae enim itaque, incidunt corporis ratione quod sapiente rem vero dolores nesciunt! Pariatur porro non deserunt tempore, ex odit, autem sunt, illum ab officiis earum veritatis? Quo.
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

export default About