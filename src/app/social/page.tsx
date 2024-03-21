import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>Contact Me </H1>
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
        <ul className="list-inside list-disc space-y-1">
          <li>shamillorsan@gmail.com</li>
        </ul>
        <hr className="border-muted" />
      </section>
    </section>
  );
}
