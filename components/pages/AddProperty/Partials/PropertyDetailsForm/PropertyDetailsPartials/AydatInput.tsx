import React, { FC, memo, useState } from "react";
import { usePropertyContext } from "~/contexts/AddPropertyContext";
import { UiNumberInput } from "~/lib";
import { isDev } from "~/utils/helpers";

interface AidatType {
  errorHandlingProp?: any
}


const AydatInput: FC<AidatType> = memo((props) => {
  // const [price, setPrice] = useState<number>();
  const {errorHandlingProp} = props
  const {details: {aydat}, setDetails} = usePropertyContext()

  const handleChange = (event: number) => {
    setDetails(prevState => ({...prevState , aydat: event}))
  }


  return (
    <div>
      {" "}
      <UiNumberInput
        label="Aidat (₺)"
        placeholder=""
        value={aydat}
        onChange={handleChange}
        parser={(value) => value?.replace(/\₺\s?|(,*)/g, "")}
        formatter={(value) =>
          !Number.isNaN(parseFloat(value as string))
            ? `₺ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            : "₺ "
        }
        {...errorHandlingProp}
      />
    </div>
  );
});


if(isDev){
  AydatInput.displayName = 'AydatInput'
}



export default AydatInput;
