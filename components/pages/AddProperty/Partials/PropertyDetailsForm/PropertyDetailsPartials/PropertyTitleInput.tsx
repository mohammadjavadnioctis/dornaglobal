import React, { FC, memo, useState } from "react";
import { usePropertyContext } from "~/contexts/AddPropertyContext";
import { UiNumberInput, UiTextinput, uiUseForm } from "~/lib";
import { isDev } from "~/utils/helpers";

interface PropertyTitleInputType {
  wrapperClassNames?: string;
  ErrorHandlingProp?: any;
}


const PropertyTitleInput: FC<PropertyTitleInputType> = memo((props) => {
  const { wrapperClassNames } = props;
  const {details: {title}, setDetails} = usePropertyContext()
  // const [title, setTitle] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    setDetails(prevState => ({...prevState , title: value}))
  }

  // const formErrorHandling = uiUseForm({
  //   initialValues: {PropertyTitle: title},
  //   validateInputOnBlur: true,
  //   validate: {
  //     PropertyTitle: (value: any ) => ((value && value.length > 3) ? '' : 'error is this ' )
  //   }
  // })

  const error = () => {
    if(title && typeof title == 'string') return false
    return true
  }
  // console.log('this is the errorhandleing prop: ', {...props.ErrorHandlingProp})
  return (
    <div className={`${wrapperClassNames}`}>
      {" "}
      <UiTextinput
        placeholder="please enter the title of your property"
        label="Property Title"
        value={title}
        onChange={handleChange}
        withAsterisk
        // error={() => error()}
        // {...formErrorHandling.getInputProps('PropertyTitle')}
        {...props.ErrorHandlingProp}
      />
    </div>
  );
});



if(isDev){
  PropertyTitleInput.displayName = 'PropertyTitleInput'
}


export default PropertyTitleInput;
