import React, { Component } from 'react';
import HorizontalScroll from 'react-scroll-horizontal'
import ReactStars from "react-rating-stars-component";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import PropTypes from 'prop-types';



const Arrow = ({ text, className }) => {
    return <div className={className}>{text}</div>;
  };
  Arrow.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string
  };
  
  export const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
  export const ArrowRight = Arrow({ text: ">", className: "arrow-next" });


export const Slider =(props)=>{
    return(
        <ScrollMenu
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
        >
        
        

                </ScrollMenu>
            

    )
}



export default Slider;