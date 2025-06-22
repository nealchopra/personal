export default function Home() {
  return (
    <div className="max-w-xl mx-auto px-6 py-16 min-h-screen">
      {/* Main Content */}
      <main className="space-y-24 pt-16">
        {/* Introduction */}
        <section>
          <h1 className="text-xl font-[550] text-zinc-800 tracking-tight mb-6">
            Neal Chopra
          </h1>

          <div className="space-y-6 text-zinc-600 font-[450] text-sm">
            <p>
              I&apos;m currently building{" "}
              <a href="https://pointer.so" className="text-zinc-800">
                Pointer
              </a>{" "}
              – a tool that helps users get things done inside software.
            </p>
            <p>
              I care about good design, clever infrastructure, and tools that
              feel like magic.
            </p>
            <p>
              You can find my previous experience on{" "}
              <a
                href="https://www.linkedin.com/in/neal-chopra/"
                className="text-zinc-800"
              >
                Linkedin
              </a>
              , my everyday thoughts on{" "}
              <a href="https://x.com/nealchopra" className="text-zinc-800">
                X
              </a>
              , and my work on{" "}
              <a href="https://github.com/nealchopra" className="text-zinc-800">
                Github
              </a>
              .
            </p>
            <p>Reach out at neal [at] pointer [dot] so.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
