import React, { FC, memo, useState } from "react";
import { usePropertyContext } from "~/contexts/AddPropertyContext";
import { UiNumberInput } from "~/lib";
import { isDev } from "~/utils/helpers";


interface LivingAreaType {
  errorHandlingProp?: any;
}


const LivingAreaInput: FC<LivingAreaType> = memo((props) => {
  const {errorHandlingProp} = props
  // const [livingAera, setLivingArea] = useState<number>();

  const {details: {livingArea}, setDetails} = usePropertyContext()
    const handleChange = (event: number) => {
      setDetails(prevState => ({...prevState , livingArea: event }  ))
    }

  return (
    <div>
      {" "}
      <UiNumberInput
        label="Living Area ( m2 )"
        value={livingArea}
        onChange={handleChange}
        parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
        {...errorHandlingProp}
      />
    </div>
  );
});



if(isDev){
  LivingAreaInput.displayName = 'AddrLivingAreaInputessInput'
}


export default LivingAreaInput;
