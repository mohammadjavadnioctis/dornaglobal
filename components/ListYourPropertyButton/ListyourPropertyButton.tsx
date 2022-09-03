import { Button, createStyles } from "@mantine/core";
import Link from "next/link";
import React, { FC } from "react";
import { FaRegHandshake } from "react-icons/fa";

const useStyles = createStyles((theme) => ({
  root: {
    borderColor: "white",
    "&:hover": {
      background: "#8b5cf6",
      borderColor: "#8b5cf6",
      color: "white",
    },
    transition: "all 0.1s linear ",
  },
  inner: {
    color: "white",
  },
}));

const Icon: FC = () => {
  return <FaRegHandshake className="text-white w-4 h-4" />;
};

const ListyourPropertyButton = () => {
  const { classes } = useStyles();
  return (
    <Link href="/" className="cursor-pointer">
      <Button
        leftIcon={<Icon />}
        variant="outline"
        classNames={{ inner: classes.inner, root: classes.root }}
      >
        {" "}
        List your Property{" "}
      </Button>
    </Link>
  );
};

export default ListyourPropertyButton;
