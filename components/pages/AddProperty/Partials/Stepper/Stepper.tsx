import React, {FC, memo, useState} from 'react'
import { UIButton, UIGroup, UIStepper } from '~/lib'
import { isDev } from '~/utils/helpers'




const Stepper = memo(
    () => {
        const [active, setActive] = useState(1);
        const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
        const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));


      return (
        <div className='contianer px-11'>
            <UIStepper active={active} onStepClick={setActive} breakpoint="sm">
        <UIStepper.Step label="First step" description="Choose category">
          
        </UIStepper.Step>
        <UIStepper.Step label="Second step" description="Enter property details">
          {/* Step 2 content */}
        </UIStepper.Step>
        <UIStepper.Step label="Third step" description="Review">
        </UIStepper.Step>
        <UIStepper.Step label="Fourth step" description="Property Listed">
          {/* Step 3 content: Get full access */}
        </UIStepper.Step>
        <UIStepper.Step label="Final step" description="congratulation">
          {/* Step 3 content: Get full access */}
        </UIStepper.Step>
        <UIStepper.Completed>
          {/* Completed, click back button to get to previous step */}
        </UIStepper.Completed>
      </UIStepper>

      <UIGroup position="center" mt="xl">
        <UIButton variant="default" onClick={prevStep}>Back</UIButton>
        <UIButton onClick={nextStep} className={'border border-accent bg-accent text-white hover:bg-white hover:text-accent'}>Next step</UIButton>
      </UIGroup>
        </div>
      )
    }
)

if(isDev){
    Stepper.displayName = 'Stepper'
}


export default Stepper