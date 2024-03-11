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
const SearchBarWithContent = () => {
 
  return (
  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0px_14px] max-w-full">
<div className="flex-1 bg-white flex flex-row items-start justify-start py-[9px] pr-[11px] pl-2.5 box-border gap-[68px] max-w-full mq700:flex-wrap mq700:min-w-full mq900:gap-[34px] mq450:gap-[17px]">
  <div className="h-12 w-[695px] relative bg-white hidden max-w-full" />
  <div className="flex-1 flex flex-row items-start justify-start gap-[0px_9.9px] min-w-[213px] max-w-full mq450:flex-wrap">
    <TextField
      className="[border:none] bg-[transparent] h-[30px] flex-1 font-poppins text-xs text-slategray-200 min-w-[149px] z-[1]"
      placeholder="Search Products"
      variant="outlined"
      InputProps={{
        startAdornment: (
          <img
            width="15.9px"
            height="15.6px"
            src="/iconoutlinesearch.svg"
          />
        ),
      }}
      sx={{
        "& fieldset": { borderColor: "#dae4ee" },
        "& .MuiInputBase-root": {
          height: "30px",
          backgroundColor: "#fff",
          paddingLeft: "8.199999999999989px",
          borderRadius: "0px 0px 0px 0px",
          fontSize: "12px",
        },
        "& .MuiInputBase-input": {
          paddingLeft: "3.9000000000000057px",
          color: "#67768e",
        },
      }}
    />
    <img
      className="self-stretch w-[89.1px] relative max-h-full min-h-[30px] z-[1]"
      loading="lazy"
      alt=""
      src="/layout-toggle.svg"
    />
  </div>
  <div className="w-[278px] flex flex-row items-start justify-start gap-[0px_9.5px]">
    <button className="cursor-pointer py-1.5 pr-2.5 pl-[11px] bg-white flex flex-row items-start justify-start gap-[0px_65px] z-[1] border-[1px] border-solid border-lavender">
      <div className="h-[18px] w-[22px] relative hidden" />
      <div className="relative text-xs font-medium font-poppins text-gray-200 text-left z-[1]">
        Add Remarks
      </div>
    </button>
    <div className="flex-1 bg-white flex flex-row items-start justify-start py-1.5 pr-3.5 pl-[8.5px] gap-[0px_65px] z-[1] border-[1px] border-solid border-lavender">
      <div className="h-[18px] w-[22px] relative hidden" />
      <div className="relative text-xs text-left z-[1]">
        <span className="font-poppins">
          <span className="text-gray-200">{`Show by : `}</span>
          <span className="text-gray-500 whitespace-pre-wrap">{`  `}</span>
        </span>
        <span className="text-gray-500 whitespace-pre-wrap">
          <span className="font-semibold font-poppins">
            {" "}
            Sizes
          </span>
        </span>
      </div>
    </div>
    <img
      className="h-[30px] w-[30px] relative min-h-[30px] z-[1]"
      loading="lazy"
      alt=""
      src="/date-range.svg"
    />
  </div>
</div>
<div className="w-[372px] bg-white flex flex-row items-start justify-between py-0 pr-3.5 pl-3 box-border max-w-full gap-[20px] mq450:flex-wrap">
  <div className="self-stretch w-[372px] relative bg-white hidden max-w-full" />
  <div className="flex flex-col items-start justify-start pt-[13.9px] px-0 pb-0">
    <div className="flex flex-row items-start justify-start gap-[0px_6.8px]">
      <img
        className="h-[20.2px] w-[20.2px] relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
        alt=""
        src="/frame-1.svg"
      />
      <div className="flex flex-col items-start justify-start pt-[1.1000000000000014px] px-0 pb-0">
        <div className="relative text-xs font-poppins text-gray-100 text-left z-[1]">
          Scan Product by...
        </div>
      </div>
    </div>
  </div>
  <div className="h-12 w-[140px] flex flex-row items-end justify-start gap-[0px_12.9px]">
    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[9.799999999999995px]">
      <FormControl
        className="self-stretch h-[28.3px] text-xs text-black z-[1]"
        variant="standard"
        sx={{
          borderTopWidth: "1px",
          borderRightWidth: "1px",
          borderBottomWidth: "1px",
          borderLeftWidth: "1px",
          backgroundColor: "rgba(217, 217, 217, 0.5)",
          borderRadius: "0px 0px 0px 0px",
          width: "93.20000000000005px",
          height: "28.300000000000004px",
          m: 0,
          p: 0,
          "& .MuiInputBase-root": {
            m: 0,
            p: 0,
            minHeight: "28.300000000000004px",
            justifyContent: "center",
            display: "inline-flex",
          },
          "& .MuiInputLabel-root": {
            m: 0,
            p: 0,
            minHeight: "28.300000000000004px",
            display: "inline-flex",
          },
          "& .MuiMenuItem-root": {
            m: 0,
            p: 0,
            height: "28.300000000000004px",
            display: "inline-flex",
          },
          "& .MuiSelect-select": {
            m: 0,
            p: 0,
            height: "28.300000000000004px",
            alignItems: "center",
            display: "inline-flex",
          },
          "& .MuiInput-input": { m: 0, p: 0 },
          "& .MuiInputBase-input": {
            color: "#000",
            fontSize: 12,
            fontWeight: "Mixed",
            fontFamily: "Mixed",
            textAlign: "left",
            p: "0 !important",
            marginLeft: "5px",
          },
        }}
      >
        <InputLabel color="secondary" />
        <Select
          color="secondary"
          disableUnderline
          displayEmpty
          IconComponent={() => (
            <img
              width="14px"
              height="14px"
              src="/chevrondown.svg"
              style={{ marginRight: "4.2000000000000455px" }}
            />
          )}
        >
          <MenuItem> Design No</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
    </div>
    <div className="h-12 w-px relative box-border z-[1] border-r-[1px] border-solid border-gainsboro-100" />
    <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[13.5px]">
      <img
        className="w-[21px] h-[21px] relative overflow-hidden shrink-0 z-[1]"
        alt=""
        src="/frame-2.svg"
      />
    </div>
  </div>
</div>
</div>
  );
};

export default SearchBarWithContent;
