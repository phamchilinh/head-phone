import React from 'react';

interface IpropInput {
  value: string;
  id: string;
  type: string;
  className?: string;
  readonly?: boolean;
}
export const Input = ({ value, id, type, className, readonly = true }: IpropInput) => {
  const classBase =
    'h-[48px] w-full appearance-none rounded border border-[#BCD0E5] bg-white py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-gray-200 focus:outline-none';
  return (
    <>
      <input
        className={className || classBase}
        id={id}
        type={type}
        value={value}
        readOnly={readonly}
      />
    </>
  );
};
