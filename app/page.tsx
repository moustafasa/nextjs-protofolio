import Landing from "./_components/Landing";
import About from "./_components/About";
import MySkills from "./_components/MySkills/MySkills";
import MyProjects from "./_components/MyProjects/MyProjects";

export default function Home() {
  return (
    <main>
      <Landing />
      <About />
      <MySkills />
      <MyProjects />
    </main>
  );
}
