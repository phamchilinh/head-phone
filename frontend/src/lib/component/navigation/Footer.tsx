import Image from 'next/image';
import image from 'public/static/images/Logo.svg';
import React from 'react';

import Container from '../layouts/Container';
import { Button } from '../ui/button/Button';
import { Input } from '../ui/input/Input';

export const Footer = () => {
  return (
    <>
      <Container>
        <hr className="" />
        <div className="mb-[100px] grid h-[308px] grid-cols-10 items-end">
          <div className="col-span-3 pb-44">
            <div className="relative h-[32px] w-[187px]">
              <Image src={image} layout="fill" alt="setel" />
            </div>
          </div>
          <div className="col-span-2 pl-[20px] pb-3 text-[#544837]">
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="col-span-2 pl-[20px] text-[#544837]">
            <ul className="space-y-2">
              <li>Disclaimer</li>
              <li>Financing</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="col-span-3 space-y-5">
            <Input id="inline-full-name" type="text" value="Jane Doe" />
            <Button
              name={'Sign up Now'}
              text={'text-white text-base font-bold leading-6'}
              bgColor={'bg-[#FF9900]'}
              w={'w-[131px]'}
              h={'h-[39px]'}
            />
          </div>
        </div>
      </Container>
    </>
  );
};
