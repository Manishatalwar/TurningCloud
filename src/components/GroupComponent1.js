import React from 'react';

const GroupComponent1 = () => {
  return (
    <div className="self-stretch bg-white flex flex-col items-start justify-start pt-[11px] pb-[10.399999999999975px] pr-[11.199999999999989px] pl-3 gap-[3px] z-[2] mt-[-33px] text-left text-4xs text-gray-500 font-poppins">
      <div className="w-[204px] h-[229.4px] relative bg-white hidden" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[9px_0px]">
        <div className="w-[149.8px] flex flex-row items-start justify-start gap-[0px_5px]">
          <div className="flex-1 rounded-sm bg-white flex flex-row items-start justify-start py-0 px-0.5 gap-[0px_3px] z-[1] border-[1px] border-solid border-orange">
            <div className="flex flex-col items-start justify-start pt-[4.099999999999994px] px-0 pb-0">
              <div className="w-[5.8px] h-[5.8px] relative rounded-[50%] bg-orange" />
            </div>
            <div className="relative font-medium">Mustard Yellow</div>
          </div>
          <div className="w-[61px] rounded-sm bg-white box-border flex flex-row items-start justify-start py-0 px-0.5 whitespace-nowrap z-[1] border-[1px] border-solid border-gainsboro-200">
            <div className="relative font-medium">Multiplier : 5</div>
          </div>
        </div>
        <div className="self-stretch relative text-gray-300 z-[1]">
          Item Name
        </div>
      </div>
      <div className="w-[176.7px] relative text-xs font-medium inline-block z-[1]">
        Mens white check Shirt regular fit
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[13px_0px]">
        <div className="self-stretch flex flex-col items-start justify-start text-gray-300">
          <div className="w-[176.7px] relative inline-block z-[1]">
            Design Number
          </div>
          <div className="self-stretch relative text-2xs text-gray-500 z-[1]">
            DN098234839
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[0px_6px]">
          <div className="rounded-sm bg-gainsboro-200 flex flex-row items-start justify-start py-0 px-[3px] z-[1]">
            <div className="relative font-semibold">XL</div>
          </div>
          <div className="rounded-sm bg-gainsboro-200 flex flex-row items-start justify-start py-0 px-[3px] whitespace-nowrap z-[1]">
            <div className="relative font-semibold">Instock : 100</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px_0px] text-xs">
          <div className="flex flex-row items-start justify-start gap-[0px_11px]">
            <div className="relative font-semibold whitespace-nowrap z-[1]">
              ₹ 799.67
            </div>
            <div className="relative [text-decoration:line-through] font-medium text-darkgray whitespace-nowrap z-[1]">
              ₹ 1299.67
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0px_8px] text-2xs">
            <img
              className="h-[30px] w-8 relative min-h-[30px] z-[1]"
              alt=""
              src="/date-range-1.svg"
            />
            <div className="bg-gainsboro-400 flex flex-row items-end justify-start py-0 pr-2 pl-2.5 gap-[0px_25px] z-[1]">
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[5px]">
                <div className="flex flex-row items-start justify-start">
                  <div className="w-[22px] flex flex-row items-start justify-start pt-px px-0 pb-0 box-border">
                    <b className="ml-[-1px] flex-1 relative inline-block z-[1]">
                      XL
                    </b>
                  </div>
                  <div className="rounded-21xl bg-white flex flex-row items-start justify-start py-px pr-1 pl-[5px] whitespace-nowrap z-[1] ml-[-1px]">
                    <div className="h-[19px] w-[55px] relative rounded-21xl bg-white hidden" />
                    <div className="relative font-medium z-[1]">+5 More</div>
                  </div>
                </div>
              </div>
              <div className="h-[30px] w-5 relative">
                <div className="absolute top-[0px] left-[0px] box-border w-px h-[30px] border-r-[1px] border-solid border-gainsboro-300" />
                <img
                  className="absolute top-[9px] left-[8px] w-3 h-3 overflow-hidden"
                  alt=""
                  src="/frame-4.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
