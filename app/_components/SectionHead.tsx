type Prop = { title: string };

export default function SectionHead({ title }: Prop) {
  return (
    <h2 className=" bg-blue-300 p-3 text-center capitalize text-5xl font-bold  relative before:absolute before:top-0 before:left-0  before:-translate-y-full before:h-2 before:w-full before:bg-heading before:bg-heading-gradient before:-rotate-180 after:absolute after:bottom-0 after:left-0 after:translate-y-full after:h-2 after:w-full after:bg-heading after:bg-heading-gradient my-nav">
      {title}
    </h2>
  );
}
