import { FC, forwardRef, memo, useEffect, useState } from "react";
import { isDev } from "~/utils/helpers";
// import { useTrans } from "@core/hooks";
import UiImage from "lib/Image";
import Link from "next/link";
import storeConfig from "~/app.config";
// import {

//     InstagramIcon,
//     LinkedinIcon,
//     TwitterIcon,
//     YoutubeIcon
// } from '@core/icons/brand';
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import siteLogo from "public/images/logo.png";

const mapLink =
  "https://www.google.com/maps/search/maslak+1453/@41.0751695,28.9615291,13z/data=!3m1!4b1";
const footerNavigation = {
  products: [
    { name: "Bags", href: "#" },
    { name: "Tees", href: "#" },
    { name: "Objects", href: "#" },
    { name: "Home Goods", href: "#" },
    { name: "Accessories", href: "#" },
  ],
  customerService: [
    { name: "Contact", href: "#" },
    { name: "Delivery", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Warranty", href: "#" },
    // {name: 'Secure Payments', href: '#'},
    // {name: 'FAQ', href: '#'},
    // {name: 'Find a store', href: '#'}
  ],
  company: [
    { name: "Who we are", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    // {name: 'Terms & Conditions', href: '#'},
    // {name: 'Privacy', href: '#'}
  ],
  legal: [
    { name: "Terms of Service", href: "#" },
    { name: "Return Policy", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Delivery Policy", href: "#" },
  ],
  bottomLinks: [
    { name: "Accessibility", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

const FooterPartial: FC = forwardRef((props, ref) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <footer className="bg-white">
      {/* <UiDivider orientation="horizontal" className="border-0 h-20" /> */}

      <div className="container overflow-hidden !px-[15px]">
        <div className="divide-y divider-gray-200 xl:flex xl:justify-center xl:items-center xl:divide-y-0 xl:divide-x-0 xl:h-10 xl:py-0 mb-[50px] xl:mb-0 text-base text-default bg-primary-50 rounded">
          <div className="py-[10px] px-1 xl:py-0 xl:w-1/3 xl:flex-none"></div>
          {/* <div className="py-[10px] px-1 xl:py-0 xl:w-1/3 xl:h-full xl:flex-none">
            <div className="max-w-xs xl:h-full mx-auto px-4 font-semibold  xl:border-l xl:border-gray-200 hover:text-accent-default cursor-pointer transition duration-300 flex items-center justify-center xl:max-w-none xl:px-8">
              {/* <div className="ml-4 flex-auto flex flex-col-reverse " > */}
          {/* <div className="xl:h-full flex items-center mr-3">
                <UiImage
                  src={"/SampleStaticImages/package.png"}
                  width={22}
                  height={22}
                />
              </div> */}
          {/* <span className=""> */}
          {/* <span> Turst</span> */}
          {/* </span> */}

          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>

      <div className="container !px-[15px]">
        <div className="grid xl:grid-cols-[245px_repeat(2,_minmax(0,_1.5fr))]">
          <div className="left xl:pt-14 flex flex-col items-start pl-4 text-usedJustOnce-50">
            <div className=" w-full xl:w-80 flex items-center justify-start mb-4">
              <Link
                className="h-logo cursor-pointer"
                href="/"
                aria-label="Logo"
              >
                <UiImage
                  src={siteLogo}
                  alt={storeConfig.Name}
                  width={150}
                  height={150}
                  priority={true}
                />
              </Link>
            </div>
            <p className="mb-2">
              Maslak Mah. Maslak 1453 9.Sok.B.115 No:34/A saryıer - İSTANBUL
            </p>
            <a href={mapLink} target="_blank" rel="noopener noreferrer">
              <small className="underline">Show on map</small>
            </a>
            {/* <UiDivider orientation="horizontal" className="border-0 h-5" /> */}
            {/* <div> */}
            <div
              className="
                                flex flex-col w-full xl:flex-row justify-center xl:justify-between
                                text-sm text-gray-700 pb-8 space-y-6 xl:space-y-0 
                                "
            >
              <div className="flex items-center space-x-1">
                <a
                  href="https://api.whatsapp.com/send?phone=90212..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                                        flex items-center justify-center w-10 h-10 rounded-full border border-gray-200
                                        transition ease-in-out duration-150 hover:bg-primary-600 hover:text-white hover:border-primary-600
                                       
                                        "
                >
                  <AiOutlineWhatsApp className="w-5 h-5  ml-[2px]" />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                                        flex items-center justify-center w-10 h-10 rounded-full border border-gray-200
                                        transition ease-in-out duration-150 hover:bg-primary-600 hover:text-white hover:border-primary-600
                                        "
                >
                  <AiOutlineFacebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                                        flex items-center justify-center w-10 h-10 rounded-full border border-gray-200
                                        transition ease-in-out duration-150 hover:bg-primary-600 hover:text-white hover:border-primary-600
                                        "
                >
                  <AiOutlineInstagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                                        flex items-center justify-center w-10 h-10 rounded-full border border-gray-200
                                        transition ease-in-out duration-150 hover:bg-primary-600 hover:text-white hover:border-primary-600
                                        "
                >
                  <AiOutlineLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                                        flex items-center justify-center w-10 h-10 rounded-full border border-gray-200
                                        transition ease-in-out duration-150 hover:bg-primary-600 hover:text-white hover:border-primary-600
                                        "
                >
                  <AiOutlineYoutube className="w-4 h-4" />
                </a>
              </div>
            </div>
            {/* </div> */}
          </div>
          <div className="middle xl:pt-20 flex flex-col items-start py-7 pl-14 text-usedJustOnce-50 relative">
            {/* <UiDivider
              orientation={"vertical"}
              className={"absolute h-3/4 left-0"}
            /> */}
            <div className="absolute w-[1px] h-3/4 left-0  bg-gray-400"></div>
            <h5 className="text-base text-[18px] font-medium mb-[26px] ">
              NEED HELP
            </h5>
            <div className="help flex">
              <div className="mr-4">
                <UiImage
                  src={"/SampleStaticImages/orange-phone-icon.png"}
                  width={20}
                  height={20}
                />
              </div>
              <div className="texts ">
                <h3 className=" text-2xl font-semibold text-default mb-3">
                  <a href="tel:+902126740703"> +90 212 123 45 67</a>
                </h3>
                {domLoaded && (
                  <div className="text-sm text-usedJustOnce-50">
                    <p>9:30 - 20:30</p>
                    {/* <p>{t('SATURDAY: 11:00 – 15:00')}</p> */}
                  </div>
                )}
              </div>
            </div>

            {/* <UiDivider
              orientation="horizontal"
              className="h-5 w-[90%] mb-[18px] mt-0"
            /> */}
            <div className="h-5 w-[90%] mb-[18px] mt-0"></div>
            <div className="mail flex items-center">
              <Link
                href={"mailto:costumer@healpointhealthcare.com"}
                className={"h-full grid gap-4 grid-flow-col"}
              >
                <>
                  <div className="h-full flex items-center justify-center">
                    <UiImage
                      src={"/SampleStaticImages/mail.png"}
                      width={16}
                      height={17}
                      className={"mr-4"}
                    />
                  </div>
                  <span className="text-base text-default font-semibold">
                    costumer@dornaglobal.com
                  </span>
                </>
              </Link>
            </div>
          </div>
          <div className="right grid grid-cols-1 md:grid-cols-3 gap-8 py-8 xl:py-20">
            <div>
              <h3 className="text-[18px] text-default font-semibold ">
                Customer Service
              </h3>

              <ul role="list" className="mt-4 xl:mt-6 space-y-3.5">
                {footerNavigation.customerService.map((item) => (
                  <li
                    key={item.name}
                    className="text-base text-default font-normal"
                  >
                    <Link href={item.href} className="hover:text-primary-600">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[18px] text-default font-semibold">
                Company
              </h3>

              <ul role="list" className="mt-4 xl:mt-6 space-y-3.5">
                {footerNavigation.company.map((item) => (
                  <li
                    key={item.name}
                    className="text-base text-default font-normal"
                  >
                    <Link href={item.href} className="hover:text-primary-600">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[18px] text-default font-semibold">Legal</h3>

              <ul role="list" className="mt-4 xl:mt-6 space-y-3.5">
                {footerNavigation.legal.map((item) => (
                  <li
                    key={item.name}
                    className="text-base text-default font-normal"
                  >
                    <Link href={item.href} className="hover:text-primary-600">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container !px-[15px]">
        <div
          className="
                    flex flex-col items-center justify-center xl:flex-row xl:items-center py-6 
                    xl:justify-between text-sm text-gray-700 xl:py-7 border-t border-gary-200
                    "
        >
          <div className="text-left whitespace-nowrap mb-3 xl:mb-0">
            &copy; {new Date().getFullYear()} All Rights Reserved @DornaGlobal
          </div>

          {/* <div className="">
            <div
              className="
                    flex flex-col xl:flex-row items-center justify-center xl:justify-between
                    text-sm text-gray-700  space-y-6 xl:space-y-0
                    "
            >
              <div className="flex items-center space-x-5">
                <div className="relative w-11 h-6">
                  <UiImage
                    src={require("@core/assets/images/mastercard.png")}
                  />
                </div>

                <div className="relative w-11 h-6">
                  <UiImage src={require("@core/assets/images/visa.png")} />
                </div>

                <div className="relative w-11 h-6">
                  <UiImage
                    src={require("@core/assets/images/american-express.png")}
                  />
                </div>

                <div className="relative w-11 h-6">
                  <UiImage src={require("@core/assets/images/troy.png")} />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
});

if (isDev) {
  FooterPartial.displayName = "FooterPartial";
}

export default FooterPartial;
