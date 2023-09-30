"use client";

export default function About() {
  return (
    <section className="py-48 text-text tracking-widest">
      <h5 className="mb-2 text-1xl">Hi, I'm</h5>
      <div className="flex items-center text-6xl">
        <h3 className="font-bold text-text">a</h3>
        <h3 className="inline-block text-accent">
          <div className="type-out font-mono">Frontend Engineer</div>
        </h3>
      </div>
      <h3 className="max-w-3xl font-bold text-6xl text-text mb-4 leading-normal">
        making impact web apps to the world
      </h3>
      {/* <h3 className="font-bold text-6xl text-text mb-4">to the world</h3> */}
      <p className="max-w-2xl mt-5 mb-2 text-1xl f-icon">
        I'm passionate about the latest front-end technologies and trends, and
        eager to learn new things. Experience on large-scale system such as
        Facebook
      </p>
      <div className="flex items-center">
        <div className="mr-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-accent"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
          </span>
        </div>
        <a
          className="text-accent font-mono font-bold"
          href="https://www.linkedin.com/in/ying-hsuan-chen1/"
        >
          Looking for new Opportunity
        </a>
      </div>
    </section>
  );
}
