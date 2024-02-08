import { ChainSubtotal } from '@/app/_components';
import { chains } from '@/app/_lib/constants';
import Image from 'next/image';
import React from 'react';

const DeductionSection = () => {
  return (
    <div className="h-fit flex flex-col gap-3 m-4 p-4 rounded-[16px] bg-[#FECE00]">
      <h2 className="text-center text-[24px]">Deduction detailed by chain:</h2>
      {/* deduction content */}
      <div className="flex flex-col items-center">
        {/* deduction LHS */}
        <div className="w-[366px]">
          {/* heading */}
          <div className="grid grid-flow-col bg-[#ffffff] w-[366px] rounded-[8px] mb-[8px]">
            <h4 className="w-[220px] p-[6px] text-center text-[21px]  border-r-[1px] border-solid border-[#1C1B1F]">
              Chain
            </h4>
            <h4 className="text-center text-[21px] p-[6px] w-[146px]">
              Subtotal
            </h4>
          </div>
          {/* chain - subtotal */}
          <div className="flex flex-col overflow-y-scroll h-[450px]">
            {chains.map((chain) => (
              <ChainSubtotal chain={chain.name} key={chain.name} />
            ))}
          </div>
        </div>
        {/* deduction total */}
        <div className="bg-[#f1f1f1] font-normal border-[#1c1b1f1b] border-solid border-[1px] rounded-[8px] w-[100%] h-[100%] flex flex-col p-2 items-center justify-center">
          <div className="grid grid-flow-col gap-[10px] pb-[0px] font-semibold">
            <Image
              src={'/logo.svg'}
              alt="logo"
              width={30}
              height={30}
              className="self-center place-self-center"
            />
            <h1 className="text-[32px] self-center place-self-center">
              Unify Total
            </h1>
          </div>
          <h2 className="text-[32px]">$3.000 usdc</h2>
        </div>
        <button className="mt-2 w-[100%] text-[21px] font-normal bg-[#0BD262] text-[#000000] hover:shadow-[0px_6px_0px_0px_#091D31] h-fit  rounded-[8px] px-8 py-2 flex items-center justify-center gap-4  border-[1px] border-solid border-[#091D31] z-50">
          <h4>Transfer Now</h4>
          <Image
            src={'/rocket.svg'}
            alt="transfer"
            width={21}
            height={21}
            className=""
          />
        </button>
      </div>
    </div>
  );
};

export default DeductionSection;