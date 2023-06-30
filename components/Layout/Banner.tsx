import { useEffect, useState } from "react";
import WeatherCard from "@/components/Layout/WeatherCard";

export default function Banner() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const getCurrentDate = () => {
      try {
        const date = new Date();
        const formattedDate = date.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        setCurrentDate(formattedDate);
      } catch (error) {
        console.error(
          "An error occurred while retrieving the current date",
          error
        );
        setCurrentDate("N/A");
      }
    };
    getCurrentDate();
  }, []);

  return (
    <>
      <hr className="w-[270px] md:w-[650px] lg:w-[900px] xl:w-[1250px] mx-auto border mt-1" />
      <div className="grid gap-3 lg:flex flex-row justify-center lg:justify-between font-bold px-5 mb-3 mt-1 text-center lg:text-left">
        <div className="mr-6">
          <h1 className="mt-5 md:mt-3 text-3xl lg:text-5xl">
            {" "}
            <span className="relative inline-block">
              <span className="absolute bottom-0.5 left-0.5 w-full h-2 md:h-3 bg-sky-600"></span>
              <span className="relative z-10">HOT</span>
            </span>{" "}
            NEWS
          </h1>
        </div>
        <div className="flex-1 justify-start mt-3">
          <p>{currentDate}</p>
          <p className="text-sm text-gray-500 font-normal">Today`s Paper</p>
        </div>
        <div className="mt-2">
          {" "}
          <WeatherCard />
        </div>
      </div>
      <hr className="w-[270px] md:w-[650px] lg:w-[900px] xl:w-[1250px] mx-auto mt-2 border" />
    </>
  );
}
