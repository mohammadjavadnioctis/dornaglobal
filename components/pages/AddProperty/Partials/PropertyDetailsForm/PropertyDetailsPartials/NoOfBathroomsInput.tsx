import React, { FC, memo, useState } from "react";
import { UiNumberInput } from "~/lib";
import { isDev } from "~/utils/helpers";

const NoOfBathroomsInput: FC = memo(() => {
  const [NoOfBathrooms, setNoOfBathrooms] = useState<number>();

  return (
    <div>
      {" "}
      <UiNumberInput
        label="Number of bathrooms"
        value={NoOfBathrooms}
        onChange={(val) => setNoOfBathrooms(val)}
        parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
      />
    </div>
  );
});



if(isDev){
  NoOfBathroomsInput.displayName = 'NoOfBathroomsInput'
}


export default NoOfBathroomsInput;
