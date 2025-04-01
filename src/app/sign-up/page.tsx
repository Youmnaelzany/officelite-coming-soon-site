import GetIntoList from "@/components/getinto-list";
import Timer from "@/components/timer";
import WorkSmarter from "@/components/work-smarter";

const SignUp = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-16 px-4 pt-20 sm:gap-[6.5rem] sm:px-6 sm:pt-[6.5rem] lg:flex-row lg:justify-between lg:px-8 lg:pt-[6.37rem]">
      <section className="lg:max-w-1/2">
        <div className="flex flex-col items-center justify-center gap-16 sm:gap-12 lg:items-start lg:gap-10">
          <WorkSmarter />
          <div className="">
            <h2 className="text-center text-base leading-12 font-bold tracking-[0.3125rem] text-[#333950] uppercase lg:text-left">
              Coming <span className="text-[#5175FF]">4 May 2025</span>
            </h2>
            <Timer
              launchDate="2025-05-31T23:59:59"
              bgColor="#EEF2FF"
              textColor="#5175FF"
              labelColor="#333950"
            />{" "}
          </div>
        </div>
      </section>
      <section className="lg:max-w-1/2">
        <GetIntoList />
      </section>
    </main>
  );
};
export default SignUp;
