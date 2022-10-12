import { TextInput, createStyles } from "@mantine/core";
import React, { FC, useState } from "react";
import { IconSearch } from "@tabler/icons";
import useTrans from "~/lib/useTranslate";

interface MainSearchBarType {}

const MainSearchBar: FC<MainSearchBarType> = (props) => {
  const t  = useTrans();

  const useStyles = createStyles((theme) => ({
    input: {
      width: "100%",
      borderRadius: "26px",
      height: "46px",
      padding: "14px",
    },
    rightSection: {
      paddingRight: "14px",
    },
  }));

  const { classes } = useStyles();

  const [value, setValue] = useState("");
  return (
    <div>
      <TextInput
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        placeholder= {`${t('SEARCH FOR LISTING NO , TITLE ETC')}`}
        rightSection={<IconSearch />}
        classNames={{
          input: classes.input,
          rightSection: classes.rightSection,
        }}
      />
    </div>
  );
};

export default MainSearchBar;
