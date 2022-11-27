import React, { FC, memo, useState } from "react";
import { usePropertyContext } from "~/contexts/AddPropertyContext";
import { UiNumberInput, UiTextinput } from "~/lib";

interface PropertyTitleInputType {
  wrapperClassNames?: string;
}

const PropertyTitleInput: FC<PropertyTitleInputType> = memo((props) => {
  const { wrapperClassNames } = props;
  const {details: {title}, setDetails} = usePropertyContext()
  // const [title, setTitle] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    setDetails(prevState => ({...prevState , title: value}))
  }

  return (
    <div className={`${wrapperClassNames}`}>
      {" "}
      <UiTextinput
        placeholder="please enter the title of your property"
        label="Property Title"
        value={title}
        onChange={handleChange}
        required
        withAsterisk
      />
    </div>
  );
});

export default PropertyTitleInput;
