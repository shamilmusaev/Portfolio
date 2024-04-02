import me from "@/assets/me.jpg";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Bot } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Shamil Musaev - Portfolio and AI chatbot",
};

export default function Home() {
  return (
    <section className="space-y-16 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat px-2 py-15">
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <H1 className="text-center sm:text-start">Hi, I&apos;m Shamil 👋</H1>
          <p className="text-center sm:text-start">
            I&apos;m a frontend developer from Sweden who builds cool
            projects
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={me}
            quality={100}
            alt="A photo of me"
            height={300}
            width={300}
            sizes="(100vw, 100vh)"
            className="aspect-square rounded-full border-2 object-cover shadow-md dark:border-foreground"
          />
        </div>
      </section>
      <section className="space-y-3 text-center">
        <H2>Ask the chatbot anything about me</H2>
        
      </section>
    </section>
  );
}
