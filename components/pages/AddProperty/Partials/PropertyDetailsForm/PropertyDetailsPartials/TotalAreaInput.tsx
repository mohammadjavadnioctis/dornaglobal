import React, { FC, memo, useState } from "react";
import { UiNumberInput } from "~/lib";
import { isDev } from "~/utils/helpers";

const TotalAreaInput: FC = memo(() => {
  const [totalArea, setTotalArea] = useState<number>();

  return (
    <div>
      {" "}
      <UiNumberInput
        label="Total area ( m2 )"
        value={totalArea}
        onChange={(val) => setTotalArea(val)}
        parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
      />
    </div>
  );
});



if(isDev){
  TotalAreaInput.displayName = 'TotalAreaInput'
}


export default TotalAreaInput;
