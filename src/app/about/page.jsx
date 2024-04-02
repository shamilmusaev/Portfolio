"use client";

import { H1 } from "@/components/ui/H1";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "next-themes";



export default function Page() {
  const { theme } = useTheme(); // Получаем текущую тему
  const targetColor = theme === 'dark' ? '#FFFFFF' : '#000000'; // Устанавливаем цвет текста в зависимости от темы

  const [lettersRef, setLettersRef] = useArrayRef();

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const reveal = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top 20%",
        end: "bottom 100%",
      },
      color: "#1C3041",
      duration: 5,
      stagger: 2,
    });

    return () => {
      reveal.kill();
    };
  },);

  const paragraph_1 = `My name is Shamil, and I'm absolutely in love with bringing projects to life on the internet. `;
  const paragraph_2 = `My journey kicked off quite unexpectedly when I decided to create a website for our family restaurant back in 2018. That first dive into the world of HTML and CSS, alongside WordPress, marked the beginning of an incredible adventure.`;
  const paragraph_3 = `This project ignited a spark in me for web development, leading me to further my studies at IT Högskola. Today, I proudly hold the position of a full-stack developer at Frostlight Solutions, where my work revolves around frontend and AI. `;
  const paragraph_4 = `My mission? To make high technology clear and accessible to everyone. And guess what? I also recently completed a course on Next.JS, where I developed a project that enables people to find or list homes for rent. It was a real challenge and a thrill to apply new knowledge.`;

  

  return (
    <section className="space-y-6 mt-30">
      <H1>Hello You</H1>
      <div
        className="text-4xl font-medium leading-normal tracking-wide"
        ref={triggerRef}
      >
        <p className="flex flex-wrap">
          {paragraph_1.split(" ").map((letter, index) => {
            return (
              <span
                ref={setLettersRef}
                key={index}
                className="reveal-text mr-3 text-gray-200"
              >
                {letter}
              </span>
            );
          })}
        </p>

        <br />
        <p className="flex flex-wrap">
          {paragraph_2.split(" ").map((letter, index) => {
            return (
              <span
                ref={setLettersRef}
                key={index}
                className="reveal-text mr-3 text-gray-200"
              >
                {letter}
              </span>
            );
          })}
        </p>
        <br />

        <p className="flex flex-wrap">
          {paragraph_3.split(" ").map((letter, index) => {
            return (
              <span
                ref={setLettersRef}
                key={index}
                className="reveal-text mr-3 text-gray-200"
              >
                {letter}
              </span>
            );
          })}
        </p>

        <br />

        <p className="flex flex-wrap">
          {paragraph_4.split(" ").map((letter, index) => {
            return (
              <span
                ref={setLettersRef}
                key={index}
                className="reveal-text mr-3 text-gray-200"
              >
                {letter}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
