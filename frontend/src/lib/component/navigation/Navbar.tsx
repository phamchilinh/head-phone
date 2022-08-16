import Image from 'next/image';
import image from 'public/static/images/Logo.svg';
import React from 'react';

import { WebAppHeaderMainNav } from '../ui/WebAppHeaderMainNav';
import ContainerFluid from '../layouts/ContainerFluid';

export const Navbar = () => {
  return (
    <>
      <ContainerFluid>
          <div className="fixed z-10 flex h-[78px] w-full flex-row items-center bg-[#191720] bg-opacity-30 px-[95px] py-3">
            <div className="w-[64px]">
              <div className="relative h-[50px] w-[50px]">
                <Image src={image} layout="fill" alt="setel" />
              </div>
            </div>
            <div className="grow px-[130px]">
              <ul className="float-right flex flex-row space-x-8 text-white w-full text-center">
                <li className='grow'>HEADPHONES</li>
                <li className='grow'>EARPHONES</li>
                <li className='grow'>SPEAKERS</li>
                <li className='grow'>EXPLORE</li>
              </ul>
            </div>
            <WebAppHeaderMainNav classCss={""} />
          </div>
      </ContainerFluid>
    </>
  );
};
