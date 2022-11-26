import React, { FC, memo, useState } from "react";
import { UiNumberInput } from "~/lib";

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

export default NoOfBathroomsInput;
