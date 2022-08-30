import React, { FC, memo } from "react";
import { isDev } from "~/utils/helpers";

interface HeadPropsType {
  containerClassNames?: string;
  title?: string;
  subtitle?: string;
  titleClassnames?: string;
  subtitleClassNames?: string;
}

const Head: FC<HeadPropsType> = memo((props) => {
  const {
    title,
    subtitle,
    titleClassnames,
    subtitleClassNames,
    containerClassNames,
  } = props;
  return (
    <div className={` ${containerClassNames} w-full text-center`}>
      <h2 className={` ${titleClassnames} text-[40px]`}>{title}</h2>
      <h5 className={`${subtitleClassNames}`}>{subtitle}</h5>
    </div>
  );
});

if (isDev) {
  Head.displayName = "head";
}

export default Head;
