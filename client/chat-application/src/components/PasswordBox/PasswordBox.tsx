import React from "react";
import { Input } from "@nextui-org/react";
import "../InputBox/InputBox.css";

export default function PasswordBox(props: any) {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <div className="w-full flex flex-col gap-4 border-none outline-none">
        <div className="flex w-10/12 mx-auto flex-wrap outline-none border-none md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            value={props.value}
            onChange={props.onChange}
            name={props.name}
            autoComplete="off"
            className="p-3 my-5 input-box border-none outline-none"
            label={props.label}
            isRequired
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <i className="fa-solid fa-eye"></i>
                ) : (
                  <i className="fa-solid fa-eye-slash"></i>
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
          />
        </div>
      </div>
    </>
  );
}
