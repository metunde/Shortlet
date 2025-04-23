
import Header from '../../js/components/header'

const Contact = () => {




    return (
        <div className="flex w-full min-h-screen flex-col items-center bg-black pb-2 text-[#EDEDEC] lg:justify-center dark:bg-[#0a0a0a]">
        <Header/>

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