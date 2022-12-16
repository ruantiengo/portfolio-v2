
import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import { NavbarProps } from 'sanity';

const StudioNavbar = (props: NavbarProps) => {
  return (
    <div>
      <div className='flex items-center justify-between p-5'>
        <Link href='/blog' className='text-accent flex items-center'>
          <ArrowUturnLeftIcon className='h-6 w-6 text-accent mr-2' />
          Go to the home page
        </Link>

        <div className='hidden md:flex p-5 rounded-lg justify-center border-2 border-accent'>
          <h1 className='font-bold text-white'>
            Remember about the rules of creating a blog posted
          </h1>
       
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;