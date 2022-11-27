import React, { FC, memo, useState } from "react";
import { UiNumberInput } from "~/lib";

const AydatInput: FC = memo(() => {
  const [price, setPrice] = useState<number>();

  return (
    <div>
      {" "}
      <UiNumberInput
        label="Aydat (₺)"
        placeholder=""
        value={price}
        onChange={(val) => setPrice(val)}
        parser={(value) => value?.replace(/\₺\s?|(,*)/g, "")}
        formatter={(value) =>
          !Number.isNaN(parseFloat(value as string))
            ? `₺ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            : "₺ "
        }
      />
    </div>
  );
});

export default AydatInput;
