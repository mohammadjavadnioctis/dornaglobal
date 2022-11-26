import React, { FC, memo, useState } from "react";
import { UiNumberInput } from "~/lib";

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

export default TotalAreaInput;
