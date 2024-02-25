import React from "react";
import { Input } from "@nextui-org/react";
import './InputBox.css'

const InputBox = (props: any) => {
  return (
      <>
        <div className="w-full flex flex-col gap-4 border-none outline-none">
          <div className="flex w-10/12 mx-auto flex-wrap outline-none border-none md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              type={props.type}
              value={props.value}
              onChange={props.onChange}
              name={props.name}
              autoComplete="off"
              className="p-3 my-3 input-box border-none outline-none"
              label={props.label}
              isRequired
            />
          </div>
        </div>
      </>
  );
};

export default InputBox;
