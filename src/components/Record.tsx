import React from "react";
import { MicContainer } from "./Main";
import { MicIcon } from "../assets/icons/MicIcon";
import Image from "next/image";

function Record({ voice, onClick }: RecordProps) {
  return (
    <>
      {voice === "record" && (
        <section className="relative flex flex-col items-center justify-center gap-4 text-[#0C0D0D]">
          <MicContainer title="Record audio" onClick={onClick}>
            <MicIcon />
          </MicContainer>
          <Image
            src="/arrow.gif"
            className="absolute bottom-10 right-5 h-10 w-auto rotate-90"
            alt="arrow"
            width={40}
            height={40}
          />
          <small className="rounded-xl bg-[#FFFFFF11] px-5 py-2 text-[#CCC]">
            Presiona el botón para empezar a grabar
          </small>
        </section>
      )}
    </>
  );
}

export { Record };
