import Image from 'next/image';
import image from 'public/static/images/Logo.svg';
import React from 'react';

import Container from '../layouts/Container';
import { WebAppHeaderMainNav } from '../ui/WebAppHeaderMainNav';

export const Navbar = () => {
  return (
    <>
      <Container>
        <div className="sticky flex h-[78px] w-full flex-row items-center bg-white pt-5">
          <div className="grow">
            <div className="relative h-[32px] w-[187px]">
              <Image src={image} layout="fill" alt="setel" />
            </div>
          </div>
          <div className="grow">
            <ul className="float-right flex flex-row space-x-8">
              <li>Product</li>
              <li>Customers</li>
              <li>Pricng</li>
              <li>Resources</li>
            </ul>
          </div>
          <WebAppHeaderMainNav classCss={'pl-14'} />
        </div>
      </Container>
    </>
  );
};
