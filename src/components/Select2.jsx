import React, { useState, useEffect, useRef } from "react";

const CustomSelect = ({ options, placeholder, onApply }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const ref = useRef(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleApply = () => {
    onApply(selectedOption);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block w-full !font-plus text-[#202224]" ref={ref}>
      <button
        className="flex items-center gap-4 w-full py-2 text-left bg-white rounded-md h-12"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block truncate">
          {selectedOption || placeholder || "Выберите"}
        </span>
        <span className="float-right text-[10px] truncate">▼</span>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-[300px] mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="flex flex-wrap p-2 gap-2">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`px-4 py-2 text-sm rounded-md border ${selectedOption === option
                  ? "bg-green-100 border-green-500 text-green-700"
                  : "bg-white border-gray-300 hover:bg-gray-100"
                  }`}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className="block w-full px-4 py-2 mt-2 text-white bg-green-500 rounded-md hover:bg-green-600"
            onClick={handleApply}
          >
            Применить
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
