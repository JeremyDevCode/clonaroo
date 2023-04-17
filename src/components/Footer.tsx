import React from "react";
import { AfordinIcon } from "../assets/icons/AfordinIcon";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-end w-full h-full text-[#F3F3F3] pb-5">
      <small>Made by</small>
      <AfordinIcon gradient={true} className="w-48 h-12 text-white" />
    </footer>
  );
}

export { Footer };
