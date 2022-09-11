import React, { FC, memo } from "react";
import { isDev } from "~/utils/helpers";

interface TagType {
  text: string;
  wrapperClassNames?: string;
  textClassNames?: string;
}

const Tag: FC<TagType> = memo((props) => {
  const { text, wrapperClassNames, textClassNames } = props;
  return (
    <>
      <div
        className={`${wrapperClassNames} py-1 px-2 m-2 ml-0 bg-gray-500 rounded-md`}
      >
        <span className={`${textClassNames} text-white text-xs`}>{text}</span>
      </div>
    </>
  );
});

if (isDev) {
  Tag.displayName = "Tag";
}

export default Tag;
