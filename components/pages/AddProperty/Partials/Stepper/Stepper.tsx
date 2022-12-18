import React, { FC, memo, useState } from "react";
import { usePropertyContext } from "~/contexts/AddPropertyContext";
import { UIButton, UIGroup, UIStepper } from "~/lib";
import { isDev } from "~/utils/helpers";
import ChooseCategory from "../ChooseCategoryStep/ChooseCategory";
import PropertyDetailsForm from "../PropertyDetailsForm/PropertyDetailsForm";
import PropertyListedStep from "../PropertyListedStep/PropertyListedStep";
import ReviewStep from "../ReviewStep/ReviewStep";
import UploadMediaStep from "../UploadMediaStep/UploadMediaStep";

// TODO : error hadling of forms and  context of the forms
// cities api

const Stepper = memo(() => {
  // const [active, setActive] = useState(0);
  // const nextStep = () =>
  //   setActive((current) => (current < 3 ? current + 1 : current));
  // const prevStep = () =>
  //   setActive((current) => (current > 0 ? current - 1 : current));
  const {activeStep, setActiveStep, prevStep, nextStep} = usePropertyContext()

  return (
    <div className="contianer px-11">
      <UIStepper
        active={activeStep}
        onStepClick={setActiveStep}
        breakpoint="sm"
        className="min-h-[300px]"
      >
        <UIStepper.Step label="First step" description="Choose category" allowStepSelect={false}>
          <ChooseCategory />
        </UIStepper.Step>
        <UIStepper.Step
          label="Second step"
          description="Enter property details"
          allowStepSelect={false}
        >
          <PropertyDetailsForm />
        </UIStepper.Step>
        <UIStepper.Step
          label="Third step"
          description="Upload Images and videos"
          allowStepSelect={false}
        >
          <UploadMediaStep />
        </UIStepper.Step>
        <UIStepper.Step
          label="Fourth step"
          description="Review"
          allowStepSelect={false}
        >
          <ReviewStep />
        </UIStepper.Step>
        <UIStepper.Step label="Fifth step" description="Property Listed" allowStepSelect={false}>
          {/* Step 3 content: Get full access */}
          <PropertyListedStep />
        </UIStepper.Step>
        <UIStepper.Step label="Final step" description="congratulation" allowStepSelect={false}>
          {/* Step 3 content: Get full access */}
        </UIStepper.Step>
        <UIStepper.Completed>
          {/* Completed, click back button to get to previous step */}
        </UIStepper.Completed>
      </UIStepper>


      {/* <UIGroup position="center" mt="xl">
        <UIButton variant="default" onClick={prevStep}>
          Back
        </UIButton>
        <UIButton
          onClick={nextStep}
          className={
            "border border-accent bg-accent text-white hover:bg-white hover:text-accent"
          }
        >
          Next step
        </UIButton>
      </UIGroup> */}
    </div>
  );
});

if (isDev) {
  Stepper.displayName = "Stepper";
}

export default Stepper;
