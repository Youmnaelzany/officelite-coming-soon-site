import Link from "next/link";

import Timer from "./timer";
import { Button } from "./ui/button";

const ComingSoon = () => {
  return (
    <section className="flex h-[78rem] w-full items-end justify-end bg-[#25293A] sm:h-[61.625rem] lg:h-[37.6875rem]">
      <div className="flex flex-col items-center justify-center gap-10 sm:gap-12 lg:flex-row lg:justify-between">
        <div className="lg:w-1/2">
          <h2 className="text-center text-base leading-12 font-bold tracking-[0.3125rem] text-white uppercase">
            Coming <span className="text-[#5175FF]">4 Nov 2025</span>
          </h2>
          <Timer launchDate="2025-4-04T00:00:00" />
        </div>
        <div className="lg:w-1/2">
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
