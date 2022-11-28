import React, { FC, memo, useState } from "react";
import { UiNumberInput } from "~/lib";
import { isDev } from "~/utils/helpers";

const FloorNoInput: FC = memo(() => {
  const [floorNo, setFloorNo] = useState<number>();

  return (
    <div>
      {" "}
      <UiNumberInput
        label="Floor number"
        placeholder="which floor is the property located at"
        value={floorNo}
        onChange={(val) => setFloorNo(val)}
        parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
      />
    </div>
  );
});


if(isDev){
  FloorNoInput.displayName = 'FloorNoInput'
}



export default FloorNoInput;
