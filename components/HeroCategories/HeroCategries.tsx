import Link from "next/link";
import React from "react";
import { BiBuildingHouse } from "react-icons/bi";
import { UiI18n } from "~/lib";
import useTrans from "~/lib/useTranslate";

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
  const t = useTrans()
  const i18n = UiI18n()
  return (
    <ul className="flex justify-center text-white mt-12">
      {SampleCatetgories.map((category) => (
        <Link href="#" key={category.id}>
          <li className="mr-3 md:mr-5 flex justify-center items-center flex-col cursor-pointer">
            {" "}
            <BiBuildingHouse className="w-7 h-7" />{" "}
            <span className=" px-4 pt-1 pb-2 font-[Roboto,sans-serif] text-base font-semibold">
              {/* {
              i18n?.exists(t(`HERO_CATEGORIES.${category.name.toUpperCase()}`)) 
                ? t(`HERO_CATEGORIES.${category.name.toUpperCase()}`) 
                : t(category.name.toUpperCase() + 'hi') 
              } */}
              {t(category.name.toUpperCase())}
            </span>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default HeroCategries;
