import { Tooltip, Toast, Popover } from "bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import { objects } from "./variables";
import ReactSlickSlider from "./classes/ReactSlickSlider"

window.onload = () => {
  ReactDOM.render(<ReactSlickSlider />, objects.sliderContainer);
};




