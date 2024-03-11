import { useState } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
const Cards = () => {
 
  return (
    <header className="self-stretch bg-white shadow-[0px_4px_20px_-16px_#8b93bb] flex flex-col items-start justify-start pt-1 px-0 pb-2 box-border gap-[6.45px_0px] max-w-full text-left text-smi text-slategray-200 font-poppins">
      <div className="self-stretch h-[95px] relative bg-white shadow-[0px_4px_20px_-16px_#8b93bb] hidden" />
      <div className="w-[1363.2px] flex flex-row items-start justify-start py-0 pr-[13px] pl-[13.099999999999994px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-end justify-between py-0 pr-px pl-0 box-border gap-[20px] max-w-full">
          <div className="w-[429.3px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border max-w-full">
            <div className="self-stretch bg-white box-border flex flex-row items-start justify-start pt-1.5 pb-[7.200000000000003px] pr-2 pl-[9px] gap-[7px] max-w-full z-[1] border-[1px] border-solid border-lavender">
              <div className="h-[35px] w-[429.3px] relative bg-white box-border hidden max-w-full border-[1px] border-solid border-lavender" />
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <img
                  className="w-4 h-4 relative overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/search2line-3-1.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative whitespace-nowrap z-[1]">{`Search POs, ASNs, & pages etc`}</div>
              </div>
              <div className="rounded bg-slategray-400 flex flex-row items-start justify-start pt-0.5 pb-[1.7999999999999972px] pr-1.5 pl-[5px] relative gap-[21px] z-[2] text-xs">
                <div className="h-[21.8px] w-[122.1px] relative rounded bg-slategray-400 hidden z-[0]" />
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <img
                      className="w-3.5 h-3.5 relative overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/command.svg"
                    />
                  </div>
                  <div className="relative font-medium z-[1]">+K</div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <img
                      className="w-3.5 h-3.5 relative overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/command.svg"
                    />
                  </div>
                  <div className="relative font-medium z-[1]">+Shift+K</div>
                </div>
                <img
                  className="h-[7.8px] w-[4.4px] absolute !m-[0] bottom-[6.9px] left-[41.4px] object-contain z-[1]"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-[485px] flex flex-row items-start justify-start gap-[0px_12px] max-w-full text-3xs text-white">
            <div className="flex flex-col items-start justify-start pt-2 pb-0 pr-4 pl-0">
              <img
                className="w-[25px] h-[25px] relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/help.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-3 pb-0 pr-5 pl-0">
              <img
                className="w-[22px] h-[19px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/upload.svg"
              />
            </div>
            <div className="w-[55px] flex flex-col items-start justify-start pt-[5px] pb-0 pr-6 pl-0 box-border">
              <div className="self-stretch h-[30px] relative">
                <div className="absolute top-[28px] left-[0px] bg-mediumslateblue-200 w-[18px] h-0.5 z-[1]">
                  <div className="absolute top-[0px] left-[0px] bg-mediumslateblue-200 w-full h-full hidden" />
                  <div className="absolute top-[0px] left-[0px] bg-mediumslateblue-100 w-1.5 h-0.5 z-[1]" />
                </div>
                <div className="absolute top-[-5px] left-[-2.1px] flex flex-row items-start justify-start">
                  <img
                    className="h-full w-full absolute !m-[0] bottom-[-12px] left-[-14px] overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/filetextline-1.svg"
                  />
                  <div className="rounded-10xs bg-mediumslateblue-100 flex flex-row items-start justify-start py-[3px] pr-[3px] pl-1 z-[2]">
                    <div className="h-[15px] w-5 relative rounded-10xs bg-mediumslateblue-100 hidden" />
                    <b className="relative leading-[9px] z-[1]">20</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[5px] pb-0 pr-1 pl-0">
              <div className="flex flex-row items-start justify-start relative">
                <img
                  className="h-6 w-6 absolute !m-[0] bottom-[-12px] left-[-13px] overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/notificationline-1.svg"
                />
                <div className="rounded-10xs bg-mediumslateblue-100 flex flex-row items-start justify-start pt-[5px] pb-[3px] pr-0.5 pl-[5px] z-[2]">
                  <div className="h-[15px] w-[25px] relative rounded-10xs bg-mediumslateblue-100 hidden" />
                  <b className="relative leading-[5px] z-[1]">120</b>
                </div>
              </div>
            </div>
            <div className="h-[27px] flex flex-col items-start justify-start pt-2.5 pb-0 pr-[3px] pl-0 box-border">
              <div className="w-px h-[17px] relative box-border z-[1] border-r-[1px] border-solid border-lightsteelblue" />
            </div>
            <div className="flex flex-col items-start justify-start pt-[3.5999999999999943px] px-0 pb-0">
              <div className="w-[31.4px] h-[31.4px] relative rounded-[8.07px] bg-white z-[1]">
                <div className="absolute top-[0px] left-[0px] rounded-[8.07px] bg-white w-full h-full hidden" />
                <div className="absolute top-[0px] left-[0px] rounded-[8.07px] bg-slategray-300 w-full h-full z-[1]" />
                <img
                  className="absolute h-[62.74%] w-[62.74%] top-[18.47%] right-[18.79%] bottom-[18.79%] left-[18.47%] max-w-full overflow-hidden max-h-full z-[2]"
                  loading="lazy"
                  alt=""
                  src="/profile.svg"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start text-xs text-slategray-200">
              <FormControl
                className="self-stretch h-[21px] font-poppins font-semibold text-sm text-darkslateblue"
                variant="standard"
                sx={{
                  borderTopWidth: "0px",
                  borderRightWidth: "0px",
                  borderBottomWidth: "0px",
                  borderLeftWidth: "0px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "100%",
                  height: "21px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "21px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "21px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "21px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "21px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#23235f",
                    fontSize: 14,
                    fontWeight: "SemiBold",
                    fontFamily: "Poppins",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="18px"
                      height="18px"
                      src="/arrowdownsfill-1-1.svg"
                      style={{ marginRight: "2.273736754432321e-13px" }}
                    />
                  )}
                >
                  <MenuItem>Vmart-Procurement Team</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <div className="w-[145px] relative font-medium inline-block whitespace-nowrap box-border pr-5 z-[1]">
                Ashish Kumar Singla
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-whitesmoke-200" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3 pl-[13.099999999999994px] box-border max-w-full text-center text-xs text-dimgray">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
          <div className="w-[335.7px] flex flex-row items-start justify-start max-w-full z-[1]">
            <div className="flex-1 flex flex-row items-center justify-start gap-[0px_5.8px] max-w-full">
              <div className="w-[63px] rounded-md flex flex-row items-center justify-start gap-[0px_10px]">
                <img
                  className="h-navigations-breadcrumb-icon-size w-navigations-breadcrumb-icon-size relative overflow-hidden shrink-0"
                  alt=""
                  src="/home.svg"
                />
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  Home
                </div>
              </div>
              <img
                className="h-navigations-breadcrumb-separator-height w-navigations-breadcrumb-separator-height relative"
                alt=""
                src="/slashbold.svg"
              />
              <FormControl
                className="h-[30px] w-[107.7px] font-poppins font-medium text-xs text-dimgray"
                variant="standard"
                sx={{
                  borderColor: "#e5e7eb",
                  borderStyle: "SOLID",
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "8px",
                  width: "32.171581769437%",
                  height: "30px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "30px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "30px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "30px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "30px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#4b5563",
                    fontSize: 12,
                    fontWeight: "Medium",
                    fontFamily: "Poppins",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "8px",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="17.7px"
                      height="17.7px"
                      src="/text-manipulator.png"
                      style={{ marginRight: "8.3px" }}
                    />
                  )}
                >
                  <MenuItem>Sales Order</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <img
                className="h-navigations-breadcrumb-separator-height w-navigations-breadcrumb-separator-height relative"
                alt=""
                src="/slashbold-1.svg"
              />
              <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-semibold text-gray-400 whitespace-nowrap">
                Product Catalogue
              </div>
            </div>
          </div>
          <div className="w-[158px] flex flex-col items-start justify-start pt-[1.1000000000000014px] px-0 pb-0 box-border text-white">
            <div className="self-stretch bg-mediumslateblue-100 flex flex-row items-start justify-start py-1.5 pr-[34px] pl-[33px] whitespace-nowrap z-[1]">
              <div className="flex-1 relative uppercase font-semibold">
                Place Order
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Cards;
