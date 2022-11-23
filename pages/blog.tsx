import React from 'react'

type Props = {}

const Blog = (props: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] h-screen w-full flex items-center justify-center flex-col'>
        <img src="https://media.tenor.com/FtGd7MNyIqkAAAAd/construction-crane.gif" className='w-52 rounded-md' alt="" />
        <h1 className="text-white text-8xl">404</h1>
        <h3 className="text-white text-3xl">This page is under construction</h3>
    </div>
  )
}

export default Blog