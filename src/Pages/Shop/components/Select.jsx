import { useEffect, useState, useRef } from "react"

const Select = () => {
    const [open, setOpen] = useState(false);
    const options = [
        "Default sorting",
        "Sort by popularity",
        "Sort by new arrivals",
        "Sort by price: low to high",
        "Sort by price: high to low",
    ];

    const [selectedOption, setSelectedOption] = useState("Default sorting");
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setOpen(false);

    };
    return (
        <>
            <div ref={dropdownRef} className="relative inline-block z-1 text-left">
                <button type="button" onClick={() => setOpen(!open)} className="text-[#666] cursor-pointer !font-thin inline-flex items-center justify-between w-56 px-4 py-2 bg-[#fff] border border-[#dfdfdf] text-[14px] outline-none">
                    {selectedOption}
                    <svg className="w-5 h-5 ml-2 text-[#666] !font-thin" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.659l3.71-3.43a.75.75 0 011.04 1.08l-4.245 3.93a.75.75 0 01-1.04 0L5.25 8.27a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
                    </svg>
                </button>
                {open && (
                    <div className="absolute right-0 w-56 mt-[2px] origin-top-right bg-[#fff] border border-[#dfdfdf] rounded-md shadow-lg">
                        <div className="py-1">
                            {options.map((option) => (
                                <button key={option} onClick={() => handleOptionClick(option)} className="cursor-pointer block w-full px-4 py-2 text-left text-[13px] text-[#666] hover:bg-[#f6f6f6] !font-thin">
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Select
