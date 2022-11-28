import React, { FC, memo, useState } from "react";
import { UiNumberInput } from "~/lib";
import { isDev } from "~/utils/helpers";

const LivingAreaInput: FC = memo(() => {
  const [livingAera, setLivingArea] = useState<number>();

  return (
    <div>
      {" "}
      <UiNumberInput
        label="Living Area ( m2 )"
        value={livingAera}
        onChange={(val) => setLivingArea(val)}
        parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
      />
    </div>
  );
});



if(isDev){
  LivingAreaInput.displayName = 'AddrLivingAreaInputessInput'
}


export default LivingAreaInput;
