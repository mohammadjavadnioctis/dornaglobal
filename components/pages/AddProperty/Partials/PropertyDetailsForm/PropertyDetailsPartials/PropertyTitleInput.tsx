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
        placeholder="please enter the title of your property"
        label="Property Title"
        value={title}
        onChange={(event) => setTitle(event.currentTarget.value)}
        required
        withAsterisk
      />
    </div>
  );
});

export default PropertyTitleInput;
