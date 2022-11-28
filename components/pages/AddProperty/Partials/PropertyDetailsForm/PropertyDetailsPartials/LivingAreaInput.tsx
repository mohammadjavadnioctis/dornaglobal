import React, { FC, memo, useState } from "react";
import { usePropertyContext } from "~/contexts/AddPropertyContext";
import { UiNumberInput } from "~/lib";
import { isDev } from "~/utils/helpers";

const LivingAreaInput: FC = memo(() => {
  const [livingAera, setLivingArea] = useState<number>();

  const {details: {livingArea}, setDetails} = usePropertyContext()
    const handleChange = (event: number) => {
      setDetails(prevState => ({...prevState , livingArea: event }  ))
    }

  return (
    <div>
      {" "}
      <UiNumberInput
        label="Living Area ( m2 )"
        value={livingAera}
        onChange={handleChange}
        parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
      />
    </div>
  );
});



if(isDev){
  LivingAreaInput.displayName = 'AddrLivingAreaInputessInput'
}


export default LivingAreaInput;
