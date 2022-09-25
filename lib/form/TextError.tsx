import React, { FC, memo, ReactNode } from "react";
import { isDev } from "~/utils/helpers";

interface TextErrorType {
  className: string;
  children: ReactNode;
}

const TextError: FC<TextErrorType> = memo((props) => {
  const { className, children } = props;
  return (
    <div className={`error ${className} `} style={{ color: "red" }}>
      {props.children}
    </div>
  );
});

if (isDev) {
  TextError.displayName = "TextError";
}

export default TextError;
