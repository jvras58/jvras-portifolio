"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({containerStyles, btnStyles, iconsStyle}) => {
    const swiper = useSwiper();
    return (
        <div className={containerStyles}>
        <button className={btnStyles} onClick={() => swiper.slidePrev()}>
            <PiCaretLeftBold className={iconsStyle} />
        </button>
        <button className={btnStyles} onClick={() => swiper.slideNext()}>
            <PiCaretRightBold className={iconsStyle} />
        </button>
        </div>
    );
};
export default WorkSliderBtns;