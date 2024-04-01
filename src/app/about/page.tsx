import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
// import Image from "next/image";
import me from "@/assets/me.jpg";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Florian Walther and his work.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>Hello You</H1>
      {/* <section className="flex justify-center space-y-3"> */}
      <section>
        <div className="w-70 pr-20">
          <p className="font-medium text-4xl tracking-wide leading-normal mt-20">
            My name is Shamil, and I&apos;m absolutely in love with
            bringing projects to life on the internet. My journey kicked off
            quite unexpectedly when I decided to create a website for our family
            restaurant back in 2018. That first dive into the world of HTML and
            CSS, alongside WordPress, marked the beginning of an incredible
            adventure. This project ignited a spark in me for web development,
            leading me to further my studies at IT Högskola. <br /> <br />
            Today, I proudly hold the position of a full-stack developer at
            Frostlight Solutions, where my work revolves around frontend and AI.
            My mission? To make high technology clear and accessible to
            everyone. <br /> <br />
            And guess what? I also recently completed a course on Next.JS, where
            I developed a project that enables people to find or list homes for
            rent. It was a real challenge and a thrill to apply new knowledge.
          </p> <br />

          <ul>
            <li>- HTML, CSS, JavaScript (ES6+)</li>
            <li>- React & Next.JS</li>
            <li>- Langchain</li>
            <li>- Python</li>
            <li>- Node.JS</li>
            <li>- TypeScript</li>
            <li>- Tailwind.CSS</li>
            <li>- Three.JS & GSAP</li>
          </ul>
        </div>
        {/* <Image
          src={me}
          alt="A photo of me"
          height={400}
          width={300}
          quality={100}
          sizes="(100vw, 100vh)"
          className="object-cover "
        /> */}
      </section>
      {/* <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Skills</H2>
        <p>
          I&apos;m a frontend web developer specializing in{" "}
          <strong>React</strong>, <strong>Next.js</strong>, {" "}
          <strong>Python</strong> and <strong>Langchain</strong>.
        </p>
        
      </section>
      
      <hr className="border-muted" />
      <H2>Contact Me </H2>
      <section className="space-y-3">
        <p>Links to my social accounts:</p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <a
              href="https://github.com/shamilmusaev?tab=repositories"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/shamilmusaev/"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <hr className="border-muted" />
      </section>

      <section className="space-y-3">
        <p>Email</p>
        <p>shamillorsan@gmail.com</p>
        
      </section> */}
      {/* <section className="space-y-3">
        <H2>Side projects</H2>
        <p>
          In my free time, I like to work on side projects to keep my skill
          sharp and try out new tech. Here is a list of my current projects:{" "}
        </p>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://smartdiary.co"
              className="text-primary hover:underline"
            >
              SmartDiary.co
            </a>{" "}
            - An AI-powered journaling app
          </li>
          <li>
            <Link
              href="https://books-ai.app"
              className="text-primary hover:underline"
            >
              Books-AI.app
            </Link>{" "}
            - An AI book recommendation app
          </li>
        </ul>
      </section> */}
      {/* <hr className="border-muted" /> */}
    </section>
  );
}
