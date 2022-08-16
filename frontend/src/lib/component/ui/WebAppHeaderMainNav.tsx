import React from 'react';

import { Button } from './button/Button';

interface IpropsWebAppMenu {
  classCss: string;
}
export const WebAppHeaderMainNav = ({ classCss }: IpropsWebAppMenu) => {
  const signin = 'Sign In';
  const signup = 'Sign Up';
  return (
    <>
      <div className={`${classCss} flex place-content-center space-x-4`}>
        <Button
          name={signin}
          bgColor={''}
          text={''}
          w={'w-[110px]'}
          h={'h-[46px]'}
          border={'border-[#BCD0E5] border-[1px]'}
        />
        <Button
          name={signup}
          bgColor={'bg-[#FF9900]'}
          text={'text-white'}
          w={'w-[110px]'}
          h={'h-[46px]'}
        />
      </div>
    </>
  );
};
