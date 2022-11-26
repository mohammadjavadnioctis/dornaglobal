import React, { FC, memo, useState } from "react";
import { UiNumberInput, UiTextArea, UiTextinput } from "~/lib";

interface PropertyDescriptionInput {
  wrapperClassNames?: string;
}

const PropertyDescriptionInput: FC<PropertyDescriptionInput> = memo((props) => {
  const { wrapperClassNames } = props;
  const [description, setDescription] = useState<string>("");

  return (
    <div className={`${wrapperClassNames}`}>
      {" "}
      <UiTextArea
        label='Description'
        placeholder="a short summary of the property"
        value={description}
        onChange={(event) => setDescription(event.currentTarget.value)}
      />
    </div>
  );
});

export default PropertyDescriptionInput;
