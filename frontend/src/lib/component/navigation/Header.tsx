import Image from 'next/image';
import button from 'public/static/images/button.svg';
import image from 'public/static/images/Image.svg';
import React from 'react';

import Container from '../layouts/Container';
import { Button } from '../ui/button/Button';

export const Header = () => {
  return (
    <>
      <Container>
        <div className="my-12 grid max-h-[496px] w-full grid-cols-11">
          <div className="col-span-5 flex h-[496px] flex-col py-[85px]">
            <div className="grow space-y-[30px] pb-[45px]">
              <div className="text-[44px] font-bold leading-[54px] text-[#2F281E]">
                The Design Thinking superpowers
              </div>
              <div className="text-lg font-normal leading-7 text-[#544837]">
                Tools, tutorials, design and innovation experts, all in one
                place! The most intuitive way to imagine your next user
                experience.
              </div>
            </div>
            <div className="grow pr-[140px]">
              <div className="flex flex-row place-items-center ">
                <div className="grow">
                  <Button
                    name={'Get started'}
                    text={'text-white text-base font-bold leading-6'}
                    bgColor={'bg-[#FF9900]'}
                    w={'w-[175px]'}
                    h={'h-[53px]'}
                  />
                </div>
                <div className="grow">
                  <div className="relative h-[23px] w-[161px]">
                    <Image src={button} layout="fill" alt="what the video" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div className="relative min-h-full">
              <Image src={image} layout="fill" alt="setel" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
