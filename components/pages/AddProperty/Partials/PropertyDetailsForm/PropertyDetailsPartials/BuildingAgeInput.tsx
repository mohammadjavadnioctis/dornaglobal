import React, { FC, memo, useState } from "react";
import { UiNumberInput } from "~/lib";

const BuildingAgeInput: FC = memo(() => {
  const [buildingAge, setBuildingAge] = useState<number>();

  return (
    <div>
      {" "}
      <UiNumberInput
        label="Building Age"
        placeholder=""
        value={buildingAge}
        onChange={(val) => setBuildingAge(val)}
        parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
      />
    </div>
  );
});

export default BuildingAgeInput;