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
import {DatePicker } from "@mui/x-date-pickers";

const RightSideBar = () => {
    const [groupDateTimePickerValue, setGroupDateTimePickerValue] =
    useState(null);
  return (
    <div className="w-[248.7px] bg-white flex flex-col items-start justify-start pt-[13.7px] pb-[108.89999999999998px] pr-[13.700000000000044px] pl-3.5 box-border gap-[6.9px] mq900:hidden mq900:pt-5 mq900:pb-[71px] mq900:box-border mq450:pb-[46px] mq450:box-border">
    <div className="w-[248.7px] h-[781px] relative bg-white hidden" />
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3.000000000000014px]">
      <div className="flex-1 bg-whitesmoke-400 flex flex-row items-start justify-start pt-[4.800000000000001px] px-3 pb-[4.900000000000006px] gap-[9px] z-[1]">
        <div className="h-[42.7px] w-[219.9px] relative bg-whitesmoke-400 hidden" />
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <img
            className="w-4 h-4 relative overflow-hidden shrink-0 z-[1]"
            alt=""
            src="/frame-9.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="relative text-3xs font-poppins text-gray-100 text-left z-[1]">
            Customer
          </div>
          <div className="relative text-xs font-semibold font-poppins text-gray-500 text-left z-[1]">
            SRG India Pvt Ltd
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[5.100000000000023px] gap-[9.9px_0px]">
      <div className="self-stretch bg-whitesmoke-400 flex flex-row items-start justify-start pt-[4.900000000000006px] px-[12.399999999999975px] pb-[4.799999999999997px] gap-[8.3px] z-[1]">
        <div className="h-[42.7px] w-[219.9px] relative bg-whitesmoke-400 hidden" />
        <div className="flex flex-col items-start justify-start pt-[4.099999999999994px] px-0 pb-0">
          <img
            className="w-[19.3px] h-[7px] relative z-[1]"
            alt=""
            src="/group-289570.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="relative text-3xs font-poppins text-gray-100 text-left z-[1]">
            Delivery Location
          </div>
          <div className="relative text-xs font-semibold font-poppins text-gray-500 text-left z-[1]">
            Gurugram-017838
          </div>
        </div>
      </div>
      <div className="self-stretch h-[42.7px] z-[1]">
        <DatePicker
          value={groupDateTimePickerValue}
          onChange={(newValue) => {
            setGroupDateTimePickerValue(newValue);
          }}
          sx={{
            fieldset: {
              borderColor: "transparent",
              borderTopWidth: 1,
              borderRightWidth: 1,
              borderBottomWidth: 1,
              borderLeftWidth: 1,
            },
            "&:hover": {
              fieldset: { borderColor: "transparent" },
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
            },
            "& input::placeholder": {
              textColor: "#0f172a",
              fontSize: 12,
            },
            input: {
              color: "#0f172a",
              fontSize: 12,
              paddingLeft: 0,
              textAlign: "left",
              fontWeight: "600",
            },
            "& .MuiInputBase-root": {
              backgroundColor: "#edeef1",
              height: 42.69999999999999,
              gap: "36.300000000000026px",
              flexDirection: { flexDirection: "row-reverse" },
            },
          }}
          slotProps={{
            textField: {
              size: "medium",
              fullWidth: true,
              required: false,
              autoFocus: false,
              error: false,
              placeholder: "Gurugram-017838",
            },
            openPickerIcon: {
              component: () => (
                <img
                  width="19.3px"
                  height="7px"
                  src="/group-289570-1.png"
                />
              ),
            },
          }}
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[6.900000000000006px]">
        <Button
          className="h-[27.6px] flex-1 z-[1]"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#7e8084",
            fontSize: "12",
            background: "#edeef1",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": { background: "#edeef1" },
            height: 27.59999999999999,
          }}
        >
          Show More
        </Button>
      </div>
      <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-whitesmoke-300" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-px">
        <div className="flex-1 flex flex-col items-start justify-start gap-[7px_0px]">
          <div className="relative text-xs tracking-[0.07em] uppercase font-semibold font-poppins text-gray-500 text-left z-[1]">
            Summary
          </div>
          <div className="self-stretch bg-gainsboro-400 flex flex-row items-start justify-start py-0.5 pr-3.5 pl-2 z-[1]">
            <div className="h-6 w-[218.9px] relative bg-gainsboro-400 hidden" />
            <div className="relative text-smi font-semibold font-poppins text-gray-500 text-left z-[1]">
              #SO_DRAFT_00000017_2024
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-px pb-[2.5px]">
      <div className="flex-1 flex flex-row items-end justify-between gap-[20px]">
        <div className="w-[82px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[13px_0px]">
            <div className="relative text-2xs font-poppins text-gray-200 text-left z-[1]">
              Total Quantity
            </div>
            <div className="relative text-2xs font-poppins text-gray-200 text-left z-[1]">
              Total Items
            </div>
            <div className="relative text-2xs font-poppins text-gray-200 text-left z-[1]">
              Order Quantity
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-start gap-[10px_0px]">
          <div className="relative text-smi font-medium font-poppins text-gray-200 text-right z-[1]">
            21
          </div>
          <div className="relative text-smi font-medium font-poppins text-gray-200 text-right z-[1]">
            7
          </div>
          <div className="relative text-smi font-medium font-poppins text-gray-200 text-right z-[1]">
            21
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[9.000000000000057px]">
      <div className="flex-1 rounded-8xs bg-whitesmoke-100 flex flex-row items-start justify-start pt-[11.300000000000011px] px-[11.799999999999956px] pb-[11.399999999999975px] gap-[4.6px] z-[1]">
        <div className="h-[42.7px] w-[219.9px] relative rounded-8xs bg-whitesmoke-100 hidden" />
        <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <div className="self-stretch relative text-2xs font-poppins text-gray-500 text-left z-[1]">
            Total Bag Price
          </div>
        </div>
        <div className="relative text-smi font-semibold font-poppins text-gray-500 text-right whitespace-nowrap z-[1]">
          ₹ 23031.808
        </div>
      </div>
    </div>
    <div className="self-stretch flex flex-col items-start justify-start gap-[5px_0px]">
      <div className="self-stretch h-[3px] flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border">
        <div className="h-px flex-1 relative box-border z-[1] border-t-[1px] border-solid border-whitesmoke-300" />
      </div>
      <div className="flex flex-row items-start justify-start">
        <div className="relative text-xs tracking-[0.07em] uppercase font-semibold font-poppins text-gray-500 text-left z-[1]">
          Price Breakup
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[5.399999999999977px] pr-0 pl-px">
        <div className="flex-1 flex flex-row items-end justify-between gap-[20px]">
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-px">
            <div className="flex flex-col items-start justify-start gap-[13px_0px]">
              <div className="relative text-2xs font-poppins text-gray-200 text-left z-[1]">
                IGST
              </div>
              <div className="relative text-2xs font-poppins text-gray-200 text-left z-[1]">
                CGST
              </div>
              <div className="relative text-2xs font-poppins text-gray-200 text-left z-[1]">
                SGST
              </div>
              <div className="relative text-2xs font-poppins text-gray-200 text-left z-[1]">
                CESS
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-start gap-[10px_0px]">
            <div className="relative text-smi font-medium font-poppins text-gray-200 text-right whitespace-nowrap z-[1]">
              ₹ 230.80
            </div>
            <div className="relative text-smi font-medium font-poppins text-gray-200 text-right whitespace-nowrap z-[1]">
              ₹ 230.80
            </div>
            <div className="relative text-smi font-medium font-poppins text-gray-200 text-right whitespace-nowrap z-[1]">
              ₹ 230.80
            </div>
            <div className="relative text-smi font-medium font-poppins text-gray-200 text-right whitespace-nowrap z-[1]">
              ₹ 0.00
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-8xs bg-whitesmoke-100 flex flex-row items-start justify-between pt-[8.100000000000023px] pb-2 pr-3 pl-2.5 gap-[20px] z-[1]">
        <div className="h-[36.1px] w-[219.9px] relative rounded-8xs bg-whitesmoke-100 hidden" />
        <div className="w-[95.5px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-[0px_7.2px]">
            <img
              className="h-[16.6px] w-[16.6px] relative overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/frame-10.svg"
            />
            <div className="flex-1 relative text-2xs font-medium font-poppins text-seagreen text-left z-[1]">
              Discount
            </div>
          </div>
        </div>
        <div className="relative text-smi font-semibold font-poppins text-seagreen text-right whitespace-nowrap z-[1]">
          ₹ 690.00
        </div>
      </div>
    </div>
    <div className="self-stretch rounded-8xs bg-whitesmoke-100 flex flex-row items-start justify-between pt-[11.300000000000068px] pb-[11.399999999999975px] pr-3 pl-[11.799999999999956px] gap-[20px] z-[1]">
      <div className="h-[42.7px] w-[219.9px] relative rounded-8xs bg-whitesmoke-100 hidden" />
      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
        <div className="relative text-2xs font-poppins text-gray-500 text-left z-[1]">
          Total Amount
        </div>
      </div>
      <div className="relative text-smi font-semibold font-poppins text-gray-500 text-right whitespace-nowrap z-[1]">
        ₹ 23031.808
      </div>
    </div>
  </div>
  );
};

export default RightSideBar;
