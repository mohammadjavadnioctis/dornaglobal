import React, { FC, memo, useState } from "react";
import { usePropertyContext } from "~/contexts/AddPropertyContext";
import { UiNumberInput } from "~/lib";
import { isDev } from "~/utils/helpers";

const AydatInput: FC = memo(() => {
  // const [price, setPrice] = useState<number>();

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
      />
    </div>
  );
});


if(isDev){
  AydatInput.displayName = 'AydatInput'
}



export default AydatInput;
