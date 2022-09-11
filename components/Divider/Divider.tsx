import React, { FC, memo } from "react";
import { isDev } from "~/utils/helpers";

interface DividerType {
  orientation?: "horizontal" | "vertical";
  space?: string;
}

const Divider: FC<DividerType> = memo((props) => {
  const { orientation = "horizontal", space = "my-4" } = props;
  return (
    <div
      className={`${
        orientation == "horizontal"
          ? `${space} my-8 w-full`
          : `${space} mx-8 h-full`
      }`}
    ></div>
  );
});

if (isDev) {
  Divider.displayName = "Divider";
}

export default Divider;
