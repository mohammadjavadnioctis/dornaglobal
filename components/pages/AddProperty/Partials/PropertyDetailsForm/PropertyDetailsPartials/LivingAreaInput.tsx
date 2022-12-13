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
    const handleChange = (event: number | undefined) => {
      setDetails(prevState => ({...prevState , livingArea: event }  ))
    }

  return (
    <div>
      {" "}
      <UiNumberInput
        label="Living Area ( m2 )"
        value={livingArea}
        onChange={e => handleChange(e)}
        parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
        {...errorHandlingProp}
      />
    </div>
  );
});



if(isDev){
  LivingAreaInput.displayName = 'LivingAreaInput'
}


export default LivingAreaInput;
