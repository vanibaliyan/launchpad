import React from 'react'

const Contact = () => {
  return (
    <div className="h-full px-15 py-10 w-full flex flex-col justify-between max-md:gap-3">
        <div className='bg-[#03989E]/20 flex flex-col h-[80%] md:h-full gap-8 md:gap-5 rounded py-8 md:py-2'>
            <h1 className='text-xl font-semibold text-center'>Contact form</h1>
            <div className='flex flex-col px-10 gap-1'>
                <label className='px-2 text-md font-semibold' htmlFor="name">Name</label>
                <input className='px-2 py-1 border-2 border-[#03989E] rounded outline-none' id='name' type="text" placeholder='Enter name' />
            </div>
            <div className='flex flex-col px-10 gap-1'>
                <label className='px-2 text-md font-semibold' htmlFor="name">Email</label>
                <input className='px-2 py-1 border-2 border-[#03989E] rounded outline-none' id='email' type="email" placeholder='Enter email' />
            </div>
            <div className='flex flex-col px-10 gap-1'>
                <label className='px-2 text-md font-semibold' htmlFor="name">Message</label>
                <textarea className='px-2 py-1 border-2 border-[#03989E] rounded outline-none' rows='4' id='message' type="text" placeholder='Enter message' />
            </div>
            <div className='flex items-center justify-center'>
                <button className='px-4 py-1 bg-[#03989E] rounded-xl font-semibold text-white' >Submit</button>
            </div>

        </div>
    </div>
  )
}

export default Contact