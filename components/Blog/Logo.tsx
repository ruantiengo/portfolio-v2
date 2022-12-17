import Image from 'next/image';
import React from 'react';

const Logo = (props: any) => {
  const { renderDefault, title } = props;

  return (
    <div className='flex items-center space-x-2'>
      <Image
        className='rounded-full object-cover'
        width={50}
        height={50}
        src='https://scontent.fuln8-1.fna.fbcdn.net/v/t58.21685-6/99514553_831205887935821_7157786806899401604_n.png?stp=dst-png_p360x360&_nc_cat=108&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=sXpulZCwOloAX_y0cTo&_nc_ht=scontent.fuln8-1.fna&oh=00_AfDW3q5eENgf_CmYhW19l9dNrcVZ_o_aum87LieFnHuCSg&oe=639CC111'
        alt='logo'
      />
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default Logo;