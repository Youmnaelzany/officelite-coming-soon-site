import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";

const SimpleSolution = () => {
  return (
    <section className="flex flex-col-reverse items-center justify-center px-4 pt-20 pb-24.5 sm:flex-row sm:justify-between sm:gap-16 sm:px-6 sm:pt-[6.5rem] sm:pb-[8.75rem] lg:gap-24 lg:px-8 lg:pt-[6.37rem] lg:pb-[11.5rem]">
      <div className="flex flex-col items-center justify-center gap-6 text-center sm:w-1/2 sm:items-start sm:text-left">
        <h1 className="text-[2.5rem] leading-12 font-bold text-[#333950] lg:text-[3.5rem] lg:leading-16">
          A simple solution to complex tasks is coming soon
        </h1>
        <p className="text-base leading-[1.625rem] font-normal text-[#747B95] lg:text-lg">
          Say goodbye to inefficient juggling of multiple apps, teams, and
          projects. Officelite is the new collaboration platform built with an
          intuitive interface to improve productivity.
        </p>
        <Button
          className="shadow-[0px_25px_25px_-10px_rgba(63, 91, 194, 0.25)] bg-[#5175FF] text-white"
          asChild
        >
          <Link href={"/sign-up"}>Get Started</Link>
        </Button>
      </div>
      <div className="sm:w-1/2">
        <Image
          src={"/assets/home/illustration-charts.svg"}
          alt="charts"
          width={525}
          height={606}
        />
      </div>
    </section>
  );
};
export default SimpleSolution;
