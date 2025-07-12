import React from 'react';

type SelectValueType = string | number | readonly string[] | undefined;

interface SelectProps {
  value: SelectValueType;
  onValueChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: SelectValueType[];
  disable?: boolean;
}

function Select({
  value,
  onValueChange,
  options,
  disable = false,
}: SelectProps) {
  return (
    <select
      className="w-full border border-slate-200 rounded px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
      value={value}
      onChange={onValueChange}
      disabled={disable}
    >
      {options?.map((value) => (
        <option key={`${value}`}>{value}</option>
      ))}
    </select>
  );
}

export default Select;
