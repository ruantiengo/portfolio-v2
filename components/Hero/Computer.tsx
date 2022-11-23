import React from 'react'
import { getTecImage } from '../../helpers/getTecImage'

type Props = {}

function Computer({}: Props) {
  return (
    <div className='absolute bottom-0 left-56 w-96 z-0'>
        <div>
            <div className='flex'>
                <div className='flex flex-col justify-between align-items'>
                    <div className='flex relative'>
                        <div className='absolute bg-gradient-to-r left-2  from-cyan-500 to-blue-500 h-40 w-1 rounded-l-sm animate-pulse brightness-200 saturate-200 blur-l-md blur-xl'></div>
                        <div className='bg-black h-40 w-[78px] ml-[7px] gradient-border rounded-r-sm flex items-center justify-center'>
                            <img src={"https://img.icons8.com/color/480/razer.png"} className="w-4 mb-24 brightness-200 animate-pulse" alt="" />
                        </div>
                    </div>
                    <div className='flex justify-between w-12 ml-[24px] mx-auto'>
                        <div className='w-3 h-1 bg-black'></div>
                        <div className='w-3 h-1 bg-black'></div>
                    </div>
                    
                </div>

                <div className='flex flex-col justify-center relative items-center'>
                    <div className='border-[7px] border-black w-[320px] h-32 ml-[80px] bg-black z-20 mb-8 rounded-sm'>
                        <img src="coding.png" alt="" className='object-cover h-full w-full' />
                    </div>
                    <div className='absolute h-20 w-5 bg-black right-[150px] bottom-0 z-0'></div>
                    <div className='absolute ml-6 mb-[-3px] h-[5px] w-[400px] bg-black  bottom-1 left-0'></div>
                    <div className='absolute ml-6 h-[55px] w-[200px]  bottom-0 left-[70px] bg-gradient-to-r  from-green-300 to-green-500  animate-pulse blur-3xl'></div>
                    <div className='absolute ml-6 h-[10px]  w-[200px] bg-black  bottom-1 left-[70px]'></div>
                    <div className='absolute ml-40 h-[15px]  w-[35px] bg-black  bottom-1 left-[160px] rounded-t-lg animate-bounceX'></div>
                </div>
            </div>
            <div className='h-[15px] w-[600px] bg-yellow-800 rounded-sm'></div>
            <div className='flex justify-between w-[600px] px-1'>
                <div className=' h-32 w-3 bg-zinc-900 '></div>
                <div className='h-32 w-3 bg-zinc-900 '></div>
            </div>
        </div>
    </div>
  )
}

export default Computer