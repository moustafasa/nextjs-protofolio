import Image from "next/image";
import SectionHead from "./SectionHead";

export default function About() {
  return (
    <div className="min-h-screen">
      <SectionHead title="about" />
      <div className="container flex flex-col items-center py-16 gap-20 md:flex-row md:">
        <div className="rounded-circle shadow-lg shadow-blue-300 grid place-items-center p-5 mx-5 ">
          <Image
            src={"/imgs/about.jpeg"}
            alt="my photo"
            width={370}
            height={370}
            className=" transition-transform duration-300 shadow-100 shadow-black-shadow1 rounded-circle hover:scale-[1.2] hover:-rotate-[10deg] "
          />
        </div>
        <div className="text-center">
          <h3 className="text-green-300 text-5xl font-bold mb-7 capitalize">
            who am i ?
          </h3>
          <p className="leading-loose text-black-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            temporibus ut minus suscipit iste vel voluptas accusamus aliquid ex
            eaque similique ab, accusantium itaque earum iure velit laboriosam
            et dolore Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Nesciunt, dolor. Reprehenderit, illum at. Eveniet delectus explicabo
            odit ab? Atque ex reprehenderit numquam tenetur enim odio aliquam a
            placeat molestiae nihil?
          </p>
        </div>
      </div>
    </div>
  );
}
