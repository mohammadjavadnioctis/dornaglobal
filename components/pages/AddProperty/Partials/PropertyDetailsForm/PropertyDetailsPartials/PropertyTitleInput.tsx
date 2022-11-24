import React, { FC, memo, useState } from "react";
import { UiNumberInput, UiTextinput } from "~/lib";

interface PropertyTitleInputType {
  wrapperClassNames?: string;
}

const PropertyTitleInput: FC<PropertyTitleInputType> = memo((props) => {
  const { wrapperClassNames } = props;
  const [title, setTitle] = useState<string>("");

  return (
    <div className={`${wrapperClassNames}`}>
      {" "}
      <UiTextinput
        value={title}
        onChange={(event) => setTitle(event.currentTarget.value)}
      />
    </div>
  );
});

export default PropertyTitleInput;
