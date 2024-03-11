import { useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import RightSideBar from "../components/RightSideBar";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Cards from "../components/Cards";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";
import Traceback from "../components/Traceback";
import TopComponent from "../components/TopComponent";
import SearchBarWithContent from "../components/SearchBarWithContent";

const Design = () => {
  const [groupDateTimePickerValue, setGroupDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="w-full h-[900px] relative bg-ghostwhite flex flex-row items-start justify-start tracking-[normal] text-left text-xs text-slategray-100 font-poppins mq900:h-auto">
        <div className="mt-[-76.19999999999999px] ml-[-7px] w-[70.9px] flex flex-row items-start justify-start relative">
          <div className="absolute !m-[0] right-[13.9px] bottom-[4.4px] leading-[25px] font-medium">
            V.21.1
          </div>
          <div className="h-[976.2px] flex-1 relative z-[2] flex items-center justify-center">
            <img
              className="h-full flex-1 max-w-full overflow-hidden z-[2] object-contain absolute left-[4px] top-[13px] w-full [transform:scale(1.494)]"
              loading="lazy"
              alt=""
              src="/group-6287.svg"
            />
          </div>
        </div>
        <main className="flex-1 flex flex-col items-start justify-start gap-[12px_0px] max-w-[calc(100%_-_71px)]">
          <Cards />
          <section className="self-stretch flex flex-row items-start justify-start py-0 pr-3.5 pl-[14.099999999999994px] box-border max-w-full">
            <form className="m-0 flex-1 flex flex-row items-start justify-start gap-[0px_16px] max-w-full">
              <form className="m-0 flex-1 flex flex-col items-end justify-start gap-[13px_0px] max-w-[calc(100%_-_265px)] mq900:max-w-full">
<SearchBarWithContent />
                <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 pr-0 pl-px gap-[0px_15px]">
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[200px] max-w-[204px]">
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[43.599999999999994px] relative gap-[20.5px]">
                      <img
                        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/control-flow@2x.png"
                      />
                      <div className="self-stretch [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.2)_34%,_rgba(0,_0,_0,_0))] flex flex-row items-start justify-between pt-[6.400000000000006px] pb-[19.799999999999997px] pr-[9px] pl-[7px] gap-[20px] z-[1]">
                        <div className="h-[44.2px] w-[204px] relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.2)_34%,_rgba(0,_0,_0,_0))] hidden" />
                        <input
                          className="m-0 h-[18px] w-[18px] relative z-[1]"
                          type="checkbox"
                        />
                        <div className="flex flex-col items-start justify-start pt-[1.5999999999999943px] px-0 pb-0">
                          <div className="rounded-sm bg-gray-500 flex flex-row items-start justify-start py-0 px-[3px] whitespace-nowrap z-[1]">
                            <div className="relative text-4xs font-semibold font-poppins text-white text-left">
                              10% Off
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                        <div className="flex flex-col items-start justify-start gap-[44.2px_0px]">
                          <img
                            className="w-6 h-6 relative object-contain z-[1]"
                            loading="lazy"
                            alt=""
                            src="/prev@2x.png"
                          />
                          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[12.599999999999994px]">
                            <img
                              className="h-[4.5px] w-[31.5px] relative z-[1]"
                              loading="lazy"
                              alt=""
                              src="/group-289589.svg"
                            />
                          </div>
                        </div>
                        <div className="h-6 w-6 relative bg-gray-600 z-[1]">
                          <div className="absolute top-[0px] left-[0px] bg-gray-600 w-full h-full hidden" />
                          <img
                            className="absolute top-[4.7px] left-[4.6px] w-[14.8px] h-[14.8px] overflow-hidden z-[1]"
                            alt=""
                            src="/frame-3.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <GroupComponent1 />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[200px] max-w-[204px]">
                    <GroupComponent />
                    <GroupComponent1 />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[200px] max-w-[204px]">
                    <GroupComponent />
                    <TopComponent/>
                  </div>
                  <Traceback />
                  <Traceback />
                </div>
              </form>
            <RightSideBar/>
            </form>
          </section>
        </main>
      </div>
    </LocalizationProvider>
  );
};

export default Design;
