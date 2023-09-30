import ThemeButton from "./ThemeButton";

export default function Home() {
  return (
    <main className="flex justify-center min-h-screen w-full bg-background py-5 px-12">
      <nav className="w-full max-w-8xl max-auto h-fit flex justify-end items-center">
        <ThemeButton />
      </nav>
    </main>
  );
}
