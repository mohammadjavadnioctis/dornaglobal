import React, { FC, forwardRef, useEffect, useState } from "react";
import { isDev } from "~/utils/helpers";
import { Group, Avatar, Text, Select, createStyles } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";
import turkeyFlag from "~/public/icons/countryFlags/turkey.svg";
import { useRouter } from "next/router";
import { BiChevronDown } from "react-icons/bi";

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  image: string;
  label: string;
  description: string;
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: "orange !important",
    color: "white",
  },
  input: {
    backgroundColor: "transparent !important",
    color: "white",
  },
}));

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, description, ...others }: ItemProps, ref) => {
    console.log('the image: ', image)
    return (
    <div ref={ref} {...others}>
      <Group noWrap>
        {/* <Avatar src={image} /> */}
        <img src={image} className='w-8 h-6'
        // @ts-ignore
        crossorigin="crossOrigin"
         />

        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs" color="dimmed">
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )}
);

if (isDev) {
  SelectItem.displayName = "SelectItem";
}

const LangSelect: FC = () => {
  const [lang, setLang] = useState<string>("en");
  const { classes } = useStyles();
  const router = useRouter()

  const handleLangChange = (e: string) => {
      setLang((prevLang)=> e)
      router.push(`${router.asPath}`, undefined, {locale: e})

  }

  return (
    <div>
      {/* <NativeSelect
        value={lang}
        onChange={(event) => setLang(event.currentTarget.value)}
        data={["English", "فارسی", "русский", "العربية"]}
        rightSection={<IconChevronDown size={14} />}
        classNames={{
          wrapper: classes.wrapper,
          input: classes.input,
        }
      /> */}
      <Select
        value={lang}
        onChange={handleLangChange}
        placeholder={lang as string}
        itemComponent={SelectItem}
        data={data}
        // searchable
        maxDropdownHeight={400}
        nothingFound=""
        rightSection={<BiChevronDown />}
        // filter={(value, item) =>
        //   item?.label.toLowerCase().includes(value.toLowerCase().trim()) ||
        //   item.description.toLowerCase().includes(value.toLowerCase().trim())
        // }
      />
    </div>
  );
};

const data = [
  {
    image: "https://countryflagsapi.com/png/united kingdom",
    label: "English",
    value: "en",
    description: "",
  },

  {
    image: "https://countryflagsapi.com/svg/turkey",
    label: "Türkçe",
    value: "tr",
    description: "",
  },
  {
    image: "https://countryflagsapi.com/svg/ru",
    label: "русский",
    value: "ru",
    description: "",
  },
  {
    image: "https://countryflagsapi.com/svg/iran",
    label: "فارسی",
    value: "fa",
    description: "",
  },
  // {
  //   image: "https://countryflagsapi.com/svg/sa",
  //   label: "العربية",
  //   value: "ar",
  //   description: "",
  // },
];

if (isDev) {
  LangSelect.displayName = "LangSelect";
}

export default LangSelect;
