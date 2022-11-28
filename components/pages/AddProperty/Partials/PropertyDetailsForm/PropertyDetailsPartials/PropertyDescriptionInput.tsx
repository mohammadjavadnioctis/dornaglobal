import React, { FC, memo, useState } from "react";
import { usePropertyContext } from "~/contexts/AddPropertyContext";
import { UiNumberInput, UiTextArea, UiTextinput } from "~/lib";
import { isDev } from "~/utils/helpers";

interface PropertyDescriptionInput {
  wrapperClassNames?: string;
}

const PropertyDescriptionInput: FC<PropertyDescriptionInput> = memo((props) => {
  const { wrapperClassNames } = props;
  // const [description, setDescription] = useState<string>("");
  const {details: {description}, setDetails} = usePropertyContext()
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.currentTarget.value
    setDetails(prevState => ({...prevState , description: value}))
  }
  return (
    <div className={`${wrapperClassNames}`}>
      {" "}
      <UiTextArea
        label='Description'
        placeholder="a short summary of the property"
        value={description}
        onChange={handleChange}
      />
    </div>
  );
});


if(isDev){
  PropertyDescriptionInput.displayName = 'PropertyDescriptionInput'
}



export default PropertyDescriptionInput;
