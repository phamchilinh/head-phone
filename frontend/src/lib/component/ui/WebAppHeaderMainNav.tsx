import React from "react";
import Image from "next/image";
import buy from "public/static/images/buy.svg";
import search from "public/static/images/search.svg";
import user from "public/static/images/user.svg";

interface IpropsWebAppMenu {
  classCss: string;
}
export const WebAppHeaderMainNav = ({ classCss }: IpropsWebAppMenu) => {
  return (
    <>
      <div
        className={`${classCss} flex justify-items-center space-x-12 flex-row w-38`}
      >
        <div className="relative h-[25px] w-[25px]">
          <Image src={search} layout="fill" alt="search" />
        </div>
        <div className="relative h-[27px] w-[27px]">
          <Image src={user} layout="fill" alt="user" />
        </div>
        <div className="relative h-[25px] w-[27px]">
          <Image src={buy} layout="fill" alt="buy" />
        </div>
      </div>
    </>
  );
};
