import Image from 'next/image';
import React from 'react';

interface IpropFeatureCard {
  iconUrl: string;
  title: string;
  text: string;
}
export const FeatureCard = ({ iconUrl, text, title }: IpropFeatureCard) => {
  return (
    <>
      <div className="pr-14">
        <div className="relative mb-[30px] h-[50px] w-[50px]">
          <Image src={iconUrl} layout="fill" alt="what the video" />
        </div>
        <div className="pb-[13px] text-2xl font-semibold leading-8 text-[#2F281E]">
          {title}
        </div>
        <div className="font-medium leading-6 text-[#544837]">{text}</div>
      </div>
    </>
  );
};
