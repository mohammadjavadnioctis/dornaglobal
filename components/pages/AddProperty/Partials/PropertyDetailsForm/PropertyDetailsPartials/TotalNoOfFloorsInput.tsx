import React, { FC, memo, useState } from "react";
import { UiNumberInput } from "~/lib";
import { isDev } from "~/utils/helpers";

const TotalNoOfFloorsInput: FC = memo(() => {
  const [totalFloorCount, setTotalFloorCount] = useState<number>();

  return (
    <div>
      {" "}
      <UiNumberInput
        label="Total floor count"
        placeholder="how many floors are there in total"
        value={totalFloorCount}
        onChange={(val) => setTotalFloorCount(val)}
        parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
      />
    </div>
  );
});


if(isDev){
  TotalNoOfFloorsInput.displayName = 'TotalNoOfFloorsInput'
}



export default TotalNoOfFloorsInput;
