import Link from "next/link";

import Timer from "./timer";
import { Button } from "./ui/button";

const ComingSoon = () => {
  return (
    <section className="flex h-[78rem] w-full items-end justify-center bg-[#25293A] px-4 sm:h-[61.625rem] sm:px-6 lg:h-[37.6875rem] lg:justify-between lg:px-8">
      <div className="flex w-full flex-col items-center justify-center gap-10 pb-[6.27rem] sm:gap-12 lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
          <h2 className="text-center text-base leading-12 font-bold tracking-[0.3125rem] text-white uppercase">
            Coming <span className="text-[#5175FF]">4 May 2025</span>
          </h2>
          <Timer
            launchDate="2025-05-31T23:59:59"
            bgColor="#333950"
            textColor="#ffffff"
            labelColor="#999CA8"
          />
        </div>
        <div className="">
          <Button
            className="shadow-[0px_25px_25px_-10px_rgba(63, 91, 194, 0.25)] bg-[#5175FF] text-white hover:bg-[#829CFF]"
            asChild
          >
            <Link href={"/sign-up"}>Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default ComingSoon;
