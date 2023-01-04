import { Button, createStyles } from "@mantine/core";
import Link from "next/link";
import React, { FC } from "react";
import { FaRegHandshake } from "react-icons/fa";
import { useRouter } from "next/router";
import useTrans from "~/lib/useTranslate";

const Icon: FC = () => {
  const router = useRouter();
  let isHomePage = router.asPath == "/";
  return (
    <FaRegHandshake
      className={`${isHomePage ? "text-white" : "text-black"} w-4 h-4`}
    />
  );
};
// TODO: this styling should usually be outside of the component it will be moved out on a later update
const ListyourPropertyButton = () => {
  const router = useRouter();
  let isHomePage = router.asPath == "/";
  const useStyles = createStyles((theme) => ({
    root: {
      borderColor: `${isHomePage ? "white" : "black"}`,
      "&:hover": {
        background: "#E9C46A",
        borderColor: "#E9C46A",
        color: "black",
      },
      transition: "all 0.1s linear ",
    },
    inner: {
      color: `${isHomePage ? "white" : "black"}`,
    },
  }));
  const t = useTrans()
  const { classes } = useStyles();
  return (
    <Link href="/add-property" className="cursor-pointer">
      <Button
        leftIcon={<Icon />}
        variant="outline"
        classNames={{ inner: classes.inner, root: classes.root }}
      >
        {" "}
        {t('LIST YOUR PROPERTY')}{" "}
      </Button>
    </Link>
  );
};

export default ListyourPropertyButton;
