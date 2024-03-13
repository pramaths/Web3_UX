'use client';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AccountInfo, ConnectWallet, NotifTransact } from '..';
import Link from 'next/link';
import { notifs } from '../../_lib/constants';
import { useAuthCore } from '@particle-network/auth-core-modal';

const Navbar = () => {
  const currentPage = usePathname();
  // console.log(currentPage);

  const router = useRouter();

  const handleRedirectHome = () => {
    router.push('/');
  };

  const authCore = useAuthCore();

  return (
    <div className="w-[100vw] flex flex-row items-center justify-between py-[6px] pl-32 pr-20 border-b-[1px] border-solid border-[#1c1b1f] bg-[#f1f1f1] z-40">
      {/* logo name */}
      <div
        className="self-center place-self-start grid grid-flow-col gap-[10px] w-fit"
        onClick={handleRedirectHome}
      >
        <Image
          src={'/logo.svg'}
          alt="logo"
          width={50}
          height={50}
          className="self-center place-self-center"
        />
        <h2 className="text-[39px] self-center place-self-center">UNIFY</h2>
      </div>
      {/* nav name notif */}
      {(currentPage == '/dashboard' ||
        currentPage == '/mynfts' ||
        currentPage == '/walletInfo') && (
        <div className="grid grid-flow-col gap-8 self-center place-self-end">
          {/* nav items */}
          <div className="grid grid-flow-col self-center place-self-center pl-8 gap-8">
            <Link
              href={'/dashboard'}
              className={`text-[21px] hover:border-b-2 hover:font-semibold hover:cursor-pointer ${
                currentPage == '/dashboard' ? 'border-b-2' : ''
              } border-solid border-[#1c1b1f]`}
            >
              Transfer
            </Link>
            <Link
              href={'/walletInfo'}
              className={`text-[21px] hover:border-b-2 hover:font-semibold hover:cursor-pointer
            ${
              currentPage == '/walletInfo' ? 'border-b-2' : ''
            } border-solid border-[#1c1b1f]`}
            >
              Info
            </Link>
            {/* <Link
              href={'/mynfts'}
              className={`text-[21px] hover:border-b-2 hover:font-semibold hover:cursor-pointer ${
                currentPage == '/mynfts' ? 'border-b-2' : ''
              } border-solid border-[#1c1b1f]`}
            >
              My NFTs
            </Link> */}
          </div>
          {/* name notif */}
          <div className="rounded-full border-[1px] border-[#48637C] border-solid grid grid-flow-col">
            {/* name */}
            <AccountInfo />
            {/* <div className="px-5 grid grid-flow-col gap-[10px] py-[6px]">
                <Image
                  src={'/wallet.svg'}
                  alt="wallet"
                  width={24}
                  height={24}
                  className="self-center place-self-center"
                />
                <h3 className="text-[21px] self-center place-self-center">
                  {curEns}
                </h3>
              </div> */}
            {/* notif */}
            <div
              className="px-5 grid grid-flow-col gap-[10px] bg-[#48637C] hover:font-normal hover:opacity-75 py-[6px] rounded-r-full text-[#ffffff] hover:cursor-pointer"
              onClick={() => authCore.openWallet()}
            >
              <Image
                src={'/notifications.png'}
                alt="notif bell"
                width={18}
                height={18}
                className="place-self-center self-center"
              />
              <h3 className="text-[21px]">No New</h3>
            </div>
          </div>
        </div>
      )}
      {currentPage == '/' && (
        <Link
          href={'/getStarted'}
          className="text-[21px] font-normal bg-[#48637C] text-[#ffffff] hover:shadow-[0px_6px_0px_0px_#091D31] h-fit w-fit rounded-[8px] px-8 py-2 flex gap-4 justify-center border-[1px] border-solid border-[#091D31] z-50"
        >
          Get Started
        </Link>
      )}
      {currentPage == '/getStarted' && (
        <div>
          <ConnectWallet
            style={
              'text-[18px] font-normal bg-[#48637C] text-[#ffffff] hover:shadow-[0px_6px_0px_0px_#091D31] h-fit w-fit rounded-[8px] px-8 py-2 flex gap-4 justify-center border-[1px] border-solid border-[#091D31] z-50'
            }
            isNav={false}
          />
        </div>
      )}
      {/* {(currentPage == '/create' ||
        currentPage == '/login' ||
        currentPage == '/loader') && (
          <div className="flex gap-2 items-center">
            <div className="bg-[#777777] rounded-full p-4"></div>
            <h4 className="text-[18px]">
              {currentAddress.slice(0, 5)}...{currentAddress.slice(38, 42)}
            </h4>
          </div>
        )} */}
    </div>
  );
};

export default Navbar;
