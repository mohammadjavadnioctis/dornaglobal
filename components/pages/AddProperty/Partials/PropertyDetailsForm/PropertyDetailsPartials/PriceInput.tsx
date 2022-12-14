import React, { FC, memo, useState } from "react";
import { usePropertyContext } from "~/contexts/AddPropertyContext";
import { UiNumberInput } from "~/lib";
import { isDev } from "~/utils/helpers";


interface PriceInputType {
  errorHandlingProp?: any
}

const PriceInput: FC<PriceInputType> = memo((props) => {
  const {errorHandlingProp} = props
  // const [price, setPrice] = useState<number>();
  const {details: {price}, setDetails} = usePropertyContext()
  

  const handleChange = (event: number) => {
    setDetails(prevState => ({...prevState , price: event}))
  }

  return (
    <div>
      {" "}
      <UiNumberInput
        label="Price (₺)"
        placeholder=""
        value={price}
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
  PriceInput.displayName = 'PriceInput'
}



export default PriceInput;
