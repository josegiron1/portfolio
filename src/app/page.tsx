import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="h-screen flex flex-row p-24 gap-12">
        <aside className="flex flex-col justify-center gap-1">
          <h4 className="text-lg">Hello</h4>
          <h1 className="text-6xl font-bold">I&apos;m Jose</h1>
          <h3 className="text-2xl font-bold">Full Stack Software Developer</h3>
          <h3 className="text-2xl font-bold">From Puerto Rico</h3>
          <h6 className="text-md">With an insatiable thirst for knowledge, I&apos;ve become enthralled </h6>
          <h6 className="text-md">by JavaScript frameworks. I thrive in the fast-paced, </h6>
          <h6 className="text-md">dynamic world of software development by constantly striving to </h6>
          <h6 className="text-md">understand and implement new technologies.</h6>
          <h6 className="text-md">Welcome to my personal website, where I share my passion for coding.</h6>
          <button className="border-2 rounded-md w-3/12 mx-auto mt-3">Hire me</button>
        </aside>
        <aside className="m-auto">
          <Image src="/hacker.png" alt="" width={500} height={500} />
        </aside>
      </section>
      <section></section>
    </main>
  );
}
