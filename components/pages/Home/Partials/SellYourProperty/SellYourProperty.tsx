import React from "react";
import ListyourPropertyButton from "~/components/ListYourPropertyButton/ListyourPropertyButton";
import UiImage from "~/lib/Image";
import useTrans from "~/lib/useTranslate";
// TODO: remove the api key from the image src

const SellYourProperty = () => {
  const t = useTrans()
  return (
    <div className="w-full relative my-16">
      {/* The Image */}

      <div className="aspect-w-1 aspect-h-1 md:aspect-w-16 md:aspect-h-6">
        <div className="overflow-hidden">
          <div className="relative w-full h-full ">
            <UiImage
              src="https://firebasestorage.googleapis.com/v0/b/dorna-global.appspot.com/o/dev%2Fvisit.jpg?alt=media&token=470e574f-1d0a-4d27-9760-21623a0cea73"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      {/* content */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="h-full w-full md:w-1/3 bg-white bg-opacity-60 flex items-center">
          <div className="w-full max-h-full md:max-h-[auto] translate-x-0 md:translate-x-1/2 flex flex-col bg-accent-600 bg-opacity-80 p-4 md:p-12 text-white">
            <h2 className="text-[40px]">{t('SELL YOUR PROPERTY')}</h2>
            <p className="text-base text-medium  mb-5">
              {t('AT THE COMFORT OF YOUR COUCH')}
            </p>
            <p className="mb-5">
              {t('ADD YOUR PROPERTY TO THE LISTINGS OF')} 
              <strong>{t('DORNA GLOBAL')}</strong>{" "}
              {t('IN A MATTER OF MINUTES')}
            </p>
            <ListyourPropertyButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellYourProperty;
