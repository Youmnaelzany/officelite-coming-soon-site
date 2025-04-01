"use client";

import { useEffect, useState } from "react";

interface TimeCount {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

interface TimerProps {
  launchDate: string;
  bgColor?: string;
  textColor?: string;
  labelColor?: string;
}

const getTimeLeft = (expiry: string): TimeCount => {
  let days = "0";
  let hours = "0";
  let minutes = "0";
  let seconds = "0";

  const difference = new Date(expiry).getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  const dys = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const mnt = Math.floor((difference / (1000 * 60)) % 60);
  const snd = Math.floor((difference / 1000) % 60);

  days = dys < 10 ? `0${dys}` : dys.toString();
  hours = hrs < 10 ? `0${hrs}` : hrs.toString();
  minutes = mnt < 10 ? `0${mnt}` : mnt.toString();
  seconds = snd < 10 ? `0${snd}` : snd.toString();

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

const Timer = ({
  launchDate,
  bgColor = "#333950",
  textColor = "white",
  labelColor = "white/50",
}: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeCount>(getTimeLeft(launchDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(launchDate));
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [launchDate]);

  return (
    <div className="flex items-center justify-center gap-[0.81rem]">
      <span
        className="flex h-[5.75rem] w-[4.5rem] flex-col items-center justify-center rounded-lg text-[2rem] leading-12 font-bold sm:h-32 sm:w-[6.25rem] sm:text-[3.5rem]"
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
      >
        {timeLeft.days}
        <small
          className="text-xs font-bold sm:text-base sm:leading-7"
          style={{ color: labelColor }}
        >
          Days
        </small>
      </span>
      <span
        className="flex h-[5.75rem] w-[4.5rem] flex-col items-center justify-center rounded-lg text-[2rem] leading-12 font-bold sm:h-32 sm:w-[6.25rem] sm:text-[3.5rem]"
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
      >
        {timeLeft.hours}
        <small
          className="text-xs font-bold sm:text-base sm:leading-7"
          style={{ color: labelColor }}
        >
          Hours
        </small>
      </span>
      <span
        className="flex h-[5.75rem] w-[4.5rem] flex-col items-center justify-center rounded-lg text-[2rem] leading-12 font-bold sm:h-32 sm:w-[6.25rem] sm:text-[3.5rem]"
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
      >
        {timeLeft.minutes}
        <small
          className="text-xs font-bold sm:text-base sm:leading-7"
          style={{ color: labelColor }}
        >
          Minutes
        </small>
      </span>
      <span
        className="flex h-[5.75rem] w-[4.5rem] flex-col items-center justify-center rounded-lg text-[2rem] leading-12 font-bold sm:h-32 sm:w-[6.25rem] sm:text-[3.5rem]"
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
      >
        {timeLeft.seconds}
        <small
          className="text-xs font-bold sm:text-base sm:leading-7"
          style={{ color: labelColor }}
        >
          Seconds
        </small>
      </span>
    </div>
  );
};

export default Timer;
