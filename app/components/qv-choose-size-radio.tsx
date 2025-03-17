import { cn } from "../lib/utils";
import React from "react";

interface RadioGroupProps {
  options: Array<string>;
  selectedOption: string;
  className: string;
  onChange: (value: string) => void;
}

const QVSizeSelectionRadio: React.FC<RadioGroupProps> = ({
  options,
  className,
  selectedOption,
  onChange,
}) => {
  return (
    <div className={cn(`flex gap-2`, className)}>
      {options &&
        options?.map((option) => (
          <label
            key={option}
            className={cn(
              `block mb-2 cursor-pointer border border-gray-300 p-1 px-2 rounded-full`,
              {
                "border-[#AF7346]": selectedOption === option,
              }
            )}
          >
            <input
              type="radio"
              className="hidden"
              name="radioGroup"
              value={option}
              checked={selectedOption === option}
              onChange={() => onChange(option)}
            />
            <span className="text-sm capitalize text-[#AF7346]">
              {option.toLowerCase()}
            </span>
          </label>
        ))}
    </div>
  );
};

export default QVSizeSelectionRadio;
