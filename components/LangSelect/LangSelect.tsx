import React, { FC, useState } from "react";
import { isDev } from "~/utils/helpers";
import { NativeSelect, createStyles } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: "transparent !important",
    color: "white",
  },
  input: {
    backgroundColor: "transparent !important",
    color: "white",
  },
}));

const LangSelect: FC = () => {
  const [lang, setLang] = useState("");
  const { classes } = useStyles();
  return (
    <div>
      <NativeSelect
        value={lang}
        onChange={(event) => setLang(event.currentTarget.value)}
        data={["English", "فارسی", "русский", "العربية"]}
        rightSection={<IconChevronDown size={14} />}
        classNames={{
          wrapper: classes.wrapper,
          input: classes.input,
        }}
      />
    </div>
  );
};

if (isDev) {
  LangSelect.displayName = "LangSelect";
}

export default LangSelect;
