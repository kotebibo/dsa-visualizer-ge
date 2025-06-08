'use client';
import React from 'react';


interface DropdownProps {
  onSelect: (value: number) => void;
  options: any[];
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ onSelect, options, className = '' }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value);
    onSelect(value);
  };

  return (
    <select
      onChange={handleChange}
      className={`px-4 py-2 border rounded bg-white text-gray-800 cursor-pointer ${className}`}
    >
      <option value="">Select array size</option>
      {options.map((size) => (
        <option key={size} value={size}>
          {size} elements
        </option>
      ))}
    </select>
  );
};

export default Dropdown;