import ArrowConnector from "@/public/Arrow";
import { About, Contact, Experience, Home, Projects, Skills } from "@/shared";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <section className="w-full">
        <Home />
      </section>
      <ArrowConnector />

      <section className="w-full">
        <About />
      </section>
      <ArrowConnector />

      <section className="w-full">
        <Experience />
      </section>
      <ArrowConnector />

      <section className="w-full">
        <Skills />
      </section>
      <ArrowConnector />

      <section className="w-full">
        <Projects />
      </section>
      <ArrowConnector />

      <section className="w-full">
        <Contact />
      </section>
    </main>
  );
}
