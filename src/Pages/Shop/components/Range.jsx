import { useEffect, useState, useRef } from "react";

const Range = () => {

    const minLimit = 50;
    const maxLimit = 5000;
    const [minValue, setMinValue] = useState(minLimit);
    const [maxValue, setMaxValue] = useState(maxLimit);
    const sliderRef = useRef(null);
    const [dragging, setDragging] = useState(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!dragging || !sliderRef.current) return;
            const rect = sliderRef.current.getBoundingClientRect();
            let newValue =
                ((e.clientX - rect.left) / rect.width) * (maxLimit - minLimit) +
                minLimit;
            newValue = Math.max(minLimit, Math.min(maxLimit, newValue));

            if (dragging === "min") {
                if (newValue > maxValue - 10) newValue = maxValue - 10;
                setMinValue(Math.round(newValue));
            } else if (dragging === "max") {
                if (newValue < minValue + 10) newValue = minValue + 10;
                setMaxValue(Math.round(newValue));
            }
        };

        const handleMouseUp = () => {
            setDragging(null);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };

        if (dragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        }
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [dragging, minValue, maxValue]);

    const onMouseDownThumb = (thumb) => (e) => {
        e.preventDefault();
        setDragging(thumb);
    };

    return (
        <>
            <div className="flex flex-col items-start w-[100%]">
                <p className="mb-4 !font-thin flex gap-[30px] text-[16px] font-semibold">
                    <span className="!font-thin">Your range: </span> {"$" + minValue} - {"$" + maxValue}
                </p>
                <div ref={sliderRef} className="relative w-[100%] max-w-md h-10 select-none">

                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#565656] transform -translate-y-1/2"></div>
                    <div className="rangeLine absolute top-1/2 h-1 bg-[#e55472] transform -translate-y-1/2" style={{ left: `${((minValue - minLimit) / (maxLimit - minLimit)) * 100}%`, right: `${100 - ((maxValue - minLimit) / (maxLimit - minLimit)) * 100}%`, }}></div>
                    <div className="rangeButtons absolute w-[12px] h-[12px] bg-[#e55472] rounded-full cursor-pointer" style={{ left: `${((minValue - minLimit) / (maxLimit - minLimit)) * 100}%`, top: "50%", transform: "translate(-50%, -50%)", }} onMouseDown={onMouseDownThumb("min")}></div>
                    <div className="rangeButtons absolute w-[12px] h-[12px] bg-[#e55472] rounded-full cursor-pointer" style={{ left: `${((maxValue - minLimit) / (maxLimit - minLimit)) * 100}%`, top: "50%", transform: "translate(-50%, -50%)", }} onMouseDown={onMouseDownThumb("max")} ></div>
                </div>
            </div>
        </>
    )
}

export default Range
