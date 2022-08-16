import React from 'react';

interface IpropButton {
  name: string;
  text: string;
  bgColor: string;
  w: string;
  h: string;
  rounded?: string;
  border?: string;
}
export const Button = ({
  name,
  text,
  bgColor,
  w,
  h,
  rounded = 'rounded-[4px]',
  border = 'border-[1px]',
}: IpropButton) => {
  return (
    <>
      <button className={`${text} ${bgColor} ${w} ${h} ${rounded} ${border}`}>
        {name}
      </button>
    </>
  );
};
