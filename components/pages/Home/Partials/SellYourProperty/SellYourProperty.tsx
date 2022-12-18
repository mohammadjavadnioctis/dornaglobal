import React from "react";
import ListyourPropertyButton from "~/components/ListYourPropertyButton/ListyourPropertyButton";
import UiImage from "~/lib/Image";
// TODO: remove the api key from the image src

const SellYourProperty = () => {
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
            <h2 className="text-[40px]">Sell your Property</h2>
            <p className="text-base text-medium  mb-5">
              At the comfort of your couch
            </p>
            <p className="mb-5">
              Add your property to the listings of <strong>Dorna Global</strong>{" "}
              in a matter of minutes.
            </p>
            <ListyourPropertyButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellYourProperty;
