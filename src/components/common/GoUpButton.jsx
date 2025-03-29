import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const GoUpButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <div
          className="bg-[#f9f9f9] hover:bg-[#E55472] w-[40px] h-[40px] fixed z-10000 flex items-center justify-center shadow-sm right-[3%] bottom-[70px] cursor-pointer transform rotate-[45deg]"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon
            icon={faArrowUp}
            className="text-[#000] hover:text-[#fff] text-[20px] transform rotate-[-45deg] w-[12.5px] h-[20.5px]"
          />
        </div>
      )}
    </>
  );
};

export default GoUpButton;
