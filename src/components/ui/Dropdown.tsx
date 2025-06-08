'use client';
import React from 'react';

interface DropdownOption {
  id: string;
  name: string;
}

interface DropdownProps {
  onSelect: (value: number | string) => void;
  options: (number | string | DropdownOption)[];
  className?: string;
  placeholder?: string;
  isNumeric?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ 
  onSelect, 
  options, 
  className = '', 
  placeholder = "Select option",
  isNumeric = false 
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const rawValue = event.target.value;
    
    if (rawValue === '') return;
    
    // If isNumeric is true, parse as number, otherwise keep as string
    const value = isNumeric ? parseInt(rawValue) : rawValue;
    onSelect(value);
  };

  return (
    <select
      onChange={handleChange}
      className={`px-4 py-2 border rounded bg-white text-gray-800 cursor-pointer ${className}`}
    >
      <option value="">{placeholder}</option>
      {options.map((option, index) => {
        // Handle different option types
        if (typeof option === 'object' && 'id' in option && 'name' in option) {
          return (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          );
        } else {
          return (
            <option key={index} value={option}>
              {isNumeric ? `${option} elements` : option}
            </option>
          );
        }
      })}
    </select>
  );
};

export default Dropdown;