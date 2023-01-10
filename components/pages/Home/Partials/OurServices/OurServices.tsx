import React, { FC } from "react";
import Head from "~/components/Head/Head";
import useTrans from "~/lib/useTranslate";
import { isDev } from "~/utils/helpers";
import ServiceCard from "./ServiceCard";

const SampleServiceData = [
  {
    name: "Property Management",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, perferendis.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/dorna-global.appspot.com/o/dev%2Fpeople.png?alt=media&token=f3dcb6eb-a675-4a6e-ad26-d5aa30053025",
    id: "2",
  },
  {
    name: "Property Management",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, perferendis.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/dorna-global.appspot.com/o/dev%2Fbar-chart-board.png?alt=media&token=561a84e8-4f47-4472-b901-0beeb7fb4d8b",
    id: "3",
  },
  {
    name: "Property Management",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, perferendis.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/dorna-global.appspot.com/o/dev%2Fbalance.png?alt=media&token=106901a0-a99d-4b01-a223-40d325cdba41",
    id: "4",
  },
  {
    name: "Property Management",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, perferendis.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/dorna-global.appspot.com/o/dev%2Fbar-chart-stats-up.png?alt=media&token=57ecce1d-38d5-452e-8e79-89e654df25ce",
    id: "5",
  },
  {
    name: "Property Management",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, perferendis.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/dorna-global.appspot.com/o/dev%2Fdonut-chart-1.png?alt=media&token=4a4fcb32-28c9-4767-8e03-56e8c8a24930",
    id: "6",
  },
  {
    name: "Property Management",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, perferendis.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/dorna-global.appspot.com/o/dev%2Fshacking-hands.png?alt=media&token=d5ab7d7c-373f-4cce-8385-13ef2d78e973",
    id: "7",
  },
];

const OurServices: FC = () => {
  const t = useTrans()
  return (
    <section className="container">
      <div className="flex flex-col">
        <Head title={t("SERVICES OF DORNA GLOBAL")} />
        <div className="flex justify-center items-center flex-wrap">
          {SampleServiceData.map((service) => {
            return <ServiceCard key={service.id} {...service} />;
          })}
        </div>
      </div>
    </section>
  );
};

if (isDev) {
  OurServices.displayName = "OurServices";
}

export default OurServices;
