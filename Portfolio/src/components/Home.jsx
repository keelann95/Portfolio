import React from 'react'
import DeskCanvas from '../three/DeskCanvas'

const Home = () => {
  return (
    <>
      <section>
        <div className='pt-[70px]'>
            <div  className=' items-center align-middle text-center justify-center'>
            <h5 className=" font-bold  items-center gap-2">
  Hi, I'm Stephen Mwaniki <span className="text-4xl animate-wave">👋</span>
</h5> 
<p className=' pt-4 text-3xl text-gray-400 font-semibold'>Building products & brands</p>
            </div>
        </div>
        <div className='pt-20'>
          <div className=' w-[60%] mx-auto h-[50vh]'>
          <DeskCanvas />
        </div>
        </div>
        
      </section>
    </>
  )
}

export default Home
