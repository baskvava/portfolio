import About from "./About";
import Experience from "./Experience";
import TechStack from "./TechStack";
import ThemeButton from "./ThemeButton";

export default function Home() {
  return (
    <div className="flex flex-col justify-start bg-background items-center min-h-screen w-full">
      <main className="max-w-8xl w-full max-auto py-5 px-12">
        <nav className="h-fit flex justify-between items-center">
          <h5 className="font-mono text-accent text-lg">Clara Chen</h5>
          <ThemeButton />
        </nav>
        {/* <section className="py-24 max-w-3xl flex flex-wrap"> */}
        <About />
        <Experience />
        <TechStack />
      </main>
    </div>
  );
}
