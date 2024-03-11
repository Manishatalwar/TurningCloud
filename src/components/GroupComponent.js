import React from 'react';

const GroupComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[43.599999999999994px] relative gap-[88.7px] text-left text-4xs text-white font-poppins">
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/control-flow@2x.png"
      />
      <div className="self-stretch bg-gradient-to-r from-[rgba(0,0,0,0.2)] via-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.2)] flex flex-row items-start justify-between pt-[6.400000000000006px] pb-[19.799999999999997px] pr-[9px] pl-[7px] gap-[20px] z-[1]">
        <div className="h-[44.2px] w-[204px] relative bg-gradient-to-r from-[rgba(0,0,0,0.2)] via-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.2)] hidden" />
        <input
          className="m-0 h-[18px] w-[18px] relative z-[1]"
          type="checkbox"
        />
        <div className="flex flex-col items-start justify-start pt-[1.5999999999999943px] px-0 pb-0">
          <div className="rounded-sm bg-gray-500 flex flex-row items-start justify-start py-0 px-[3px] whitespace-nowrap z-[1]">
            <div className="relative font-semibold">10% Off</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-[13px] pl-[12.6px]">
        <img
          className="h-[4.5px] w-[31.5px] relative z-[1]"
          alt=""
          src="/group-289589.svg"
        />
      </div>
    </div>
  );
};

export default GroupComponent;
