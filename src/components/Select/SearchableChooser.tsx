import React, { useCallback, useState } from "react";
import Select, { components } from "react-select";

export interface Option {
  value: string;
  label: string;
}

export const SearchableChooser: React.FC<{
  className?: string;
  options: Option[];
  onChange?: (value: Option | undefined) => void;
}> = ({ className, options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<Option>();
  const handleChange = useCallback(
    (value: Option | null) => {
      const newValue = value || undefined;
      setSelectedOption(newValue);
      onChange?.(newValue);
    },
    [onChange]
  );
  return (
    <Select<Option>
      className={className}
      defaultValue={selectedOption}
      onChange={handleChange}
      options={options}
      isSearchable={true}
      isClearable={true}
      components={{
        Input: ({ children, ...rest }) => (
          <components.Input
            {...rest}
            inputClassName="outline-none border-none shadow-none focus:ring-transparent"
          >
            {children}
          </components.Input>
        ),
        MenuList: ({ children, ...rest }) => (
          <components.MenuList {...rest} className="border-neon-green border-2">
            {children}
          </components.MenuList>
        ),
        Control: ({ children, ...rest }) => (
          <components.Control {...rest} className="border-neon-green border-4">
            {children}
          </components.Control>
        ),
      }}
    />
  );
};
