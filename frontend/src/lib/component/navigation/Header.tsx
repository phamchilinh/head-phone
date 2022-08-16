import Image from 'next/image';
import image from 'public/static/images/Bitmap.png';
import React from 'react';

import { Button } from '../ui/button/Button';
import ContainerFluid from '../layouts/ContainerFluid';

export const Header = () => {
  return (
    <>
      <ContainerFluid>
        <div className="pb-12 mb-[150px] grid max-h-[616px] w-full grid-cols-11 bg-[#2B2835] text-white">
          <div className="col-span-6">
            <div className="relative h-[766px]">
              <Image src={image} layout="fill" alt="setel" />
            </div>
          </div>
          <div className="col-span-5 flex h-[238px] pt-[200px] pr-[135px] flex-col py-[85px]">
            <div className="grow space-y-[30px] pb-[45px]">
              <div className="text-[44px] font-bold leading-[54px]">
                Beats Studio3 Wireless
              </div>
              <div className="text-lg font-normal leading-7">
                Experience your music like never before.
              </div>
            </div>
            <div className="grow pr-[140px]">
              <div className="flex flex-row place-items-center ">
                <div className="grow">$299.95</div>
                <div className="grow">
                  <Button
                    name={"BUY NOW"}
                    text={"text-white text-base font-bold leading-6"}
                    bgColor={"bg-[#FF9900]"}
                    rounded={"rounded-full"}
                    w={"w-[175px]"}
                    h={"h-[53px]"}
                  />
                </div>
              </div>
            </div>
            <div className='text-lg font-normal leading-7'>
              $60 Apple Music gift card with purchase of select Beats products.*
            </div>
          </div>
        </div>
      </ContainerFluid>
    </>
  );
};
