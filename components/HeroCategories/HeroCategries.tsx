import Link from "next/link";
import React from "react";
import { BiBuildingHouse } from "react-icons/bi";

const SampleCatetgories = [
  {
    name: "Sale",
    id: 1,
    icon: "",
  },
  {
    name: "Rental",
    id: 2,
    icon: "",
  },
  {
    name: "Daily Rental",
    id: 3,
    icon: "",
  },
  {
    name: "Projects",
    id: 4,
    icon: "",
  },
];

const HeroCategries = () => {
  return (
    <ul className="flex justify-center text-white mt-12">
      {SampleCatetgories.map((category) => (
        <Link href="#" key={category.id}>
          <li className="mr-5 flex justify-center items-center flex-col cursor-pointer">
            {" "}
            <BiBuildingHouse className="w-7 h-7" />{" "}
            <span className=" px-4 pt-1 pb-2 font-[Roboto,sans-serif] text-base font-semibold">
              {category.name}{" "}
            </span>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default HeroCategries;
