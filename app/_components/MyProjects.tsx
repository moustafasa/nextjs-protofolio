import SectionHead from "./SectionHead";

function MyProjects() {
  return (
    <div className="section" id="MyProjects">
      <SectionHead title="my projects" />
      <div className="container py-5 flex gap-8 min-h-[calc(100vh-(theme(spacing.nav)))]">
        <div className="flex-1 flex flex-col gap-10 ">
          <div className="flex-1 border-[15px] border-blue-200 rounded-xl bg-blue-200">
            <iframe
              className="w-full h-full"
              src="https://moustafasa.github.io/space-tourism-multi-page-website/"
            ></iframe>
          </div>
          <p className="border-[15px] border-blue-200 rounded-xl p-5 bg-black h-1/5">
            details
          </p>
        </div>
        <ul className=" w-1/5">list</ul>
      </div>
    </div>
  );
}

export default MyProjects;
