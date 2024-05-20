import Image from "next/image";
import Link from "next/link";
import { FaAngleDoubleDown } from "react-icons/fa";

function Landing() {
  return (
    <div className="container min-h-screen pt-[calc(1.76rem+theme(spacing.nav))] flex flex-col items-center gap-7 md:flex-row-reverse md:justify-between pb-5">
      <figure className="flex flex-col items-center">
        <div className="relative before:absolute before:w-[60vw] before:h-[60vw] before:bg-green-300 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:max-w-full   before:border-2 before:border-white before:max-h-full before:rounded-circle md:before:w-[30vw] md:before:h-[30vw] max-w-[250px] md:max-w-[500px] ">
          <Image
            src={"/imgs/landing.png"}
            alt="landing page"
            width={500}
            height={550}
          />
        </div>
        <figcaption className="text-center p-5 capitalize text-3xl">
          hello i am moustafa saad
        </figcaption>
      </figure>
      <div className="text-center md:text-left">
        <h1 className="uppercase text-3xl leading-[1.5] font-bold">
          <span className="block text-4xl text-green-300 leading-[1.5]">
            welcome,
          </span>{" "}
          i am a front end web developer
        </h1>
        <p className="capitalize text-xl text-black-text py-3 mb-3">
          let&apos;s take tower in my protofolio
        </p>

        <Link
          href={"#about"}
          className="py-2 px-5 border-2 border-blue-300 text-xl text-blue-300 hover:border-green-300 hover:text-green-300 hover:scale-125 transition-all ease-linear duration-300 hover:shadow-blue-200 hover:shadow-100 md:ms-[15%] inline-block"
        >
          <FaAngleDoubleDown />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
