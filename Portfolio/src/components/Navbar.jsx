import React from 'react'

const Navbar = () => {
  return (
    <main className=' p-5 shadow-lg shadow-gray-800 text-gray-300'>
      <div className=' flex justify-between items-center '>
        <div className=' '>
          
            <img  className='w-48 ' src="https://see.fontimg.com/api/rf5/KVEA7/ZDc5ODRkNTcxZjQ2NDgyMTg2YjE2MWIzNzg1NDMzMDEudHRm/U3RlcGhlbg/fudged-italic.png?r=fs&h=81&w=1000&fg=FFFFFF&bg=353D4B&tb=1&s=81" alt="Stephen" />
        </div>
        <div>
            <ul>
                <li className=' flex gap-4'>
                    <h2 className=' hover:font-semibold hover:text-white  bg-left-bottom bg-gradient-to-r from-black to-gray-300 bg-[length:0%_8px] bg-no-repeat hover:bg-[length:100%_2px] hover:cursor-pointer transition-all duration-500 ease-out  '>Home</h2>
                    <h2 className=' hover:font-semibold hover:text-white  bg-left-bottom bg-gradient-to-r from-black to-gray-300 bg-[length:0%_8px] bg-no-repeat hover:bg-[length:100%_2px] hover:cursor-pointer transition-all duration-500 ease-out  '>About</h2>
                    <h2 className=' hover:font-semibold hover:text-white  bg-left-bottom bg-gradient-to-r from-black to-gray-300 bg-[length:0%_8px] bg-no-repeat hover:bg-[length:100%_2px] hover:cursor-pointer transition-all duration-500 ease-out  '>Work</h2>
                    <h2 className=' hover:font-semibold hover:text-white  bg-left-bottom bg-gradient-to-r from-black to-gray-300 bg-[length:0%_8px] bg-no-repeat hover:bg-[length:100%_2px] hover:cursor-pointer transition-all duration-500 ease-out  '>Contacts</h2>
                </li>
            </ul>
        </div>
      </div>
    </main>
  )
}

export default Navbar
