import { H1 } from "@/components/ui/H1";
import ProjectCard from "@/components/ProjectCard";
import me from "@/assets/me.jpg";
import propertfinder from "@/assets/projects/propertyfinder.png"
import coffestore from "@/assets/projects/coffeestores.png"
import hamsterwars from "@/assets/projects/hamsterwars.png"
import ewallet from "@/assets/projects/ewallet.png"
import pebble from "@/assets/projects/pebble.png"
import imagegenerator from "@/assets/projects/imagegenerator.png"


export default function Page() {
  return (
    <section className="space-y-6">
      <H1>My Works </H1>

      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
        <a
          href="https://bejewelled-daffodil-db21e6.netlify.app/"
          className="sm:col-span-2 lg:col-span-1 lg:row-span-2"
        >
          <ProjectCard title="Pebble" img={pebble} />
        </a>

        <a
          href="https://coffee-stores-one.vercel.app/"
          className="lg:col-span-2 lg:row-span-1"
        >
          <ProjectCard title="Coffe Stores" img={coffestore} />
        </a>

        <a
          href="https://property-finder-omega.vercel.app/"
          className="lg:col-span-1 lg:row-span-1"
        >
          <ProjectCard title="Hamster Wars" img={hamsterwars} />
        </a>

        <a
          href="https://e-wallet-application.netlify.app/"
          className="lg:col-span-1 lg:row-span-1"
        >
          <ProjectCard title="E-Wallet" img={ewallet} />
        </a>
        <a
          href="https://shamilmusgen.netlify.app/"
          className="lg:col-span-2 lg:row-span-1"
        >
          <ProjectCard title="Project 5" img={imagegenerator} />
        </a>

        <a
          href="https://property-finder-omega.vercel.app/"
          className="lg:col-span-4 lg:row-span-1"
        >
          <ProjectCard title="Project 5" img={propertfinder} />
        </a>
      </div>
    </section>
  );
}
