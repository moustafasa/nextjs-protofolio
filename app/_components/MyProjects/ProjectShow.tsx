import React from "react";

type Props = {};

export default function ProjectShow({}: Props) {
  return (
    <div className="flex-1 flex flex-col gap-7 lg:px-24">
      <div className="border-[15px] border-blue-200 rounded-xl bg-blue-200">
        <iframe
          className="w-full h-screen"
          src="https://moustafasa.github.io/space-tourism-multi-page-website/"
        ></iframe>
      </div>
      <p className="border-[15px] border-blue-200 rounded-xl p-5 bg-black h-1/5">
        details
      </p>
    </div>
  );
}
