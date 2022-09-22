import React, { FC, memo } from "react";
import UiImage from "~/lib/Image";
import { AgentType } from "~/utils/types";
import { Button, createStyles } from "@mantine/core";
import { isDev } from "~/utils/helpers";

const useStyles = createStyles((theme) => ({
  root: {
    borderColor: "#E9C46A",
    color: "#E9C46A !important",
    "&:hover": {
      background: "#E9C46A",
      borderColor: "#E9C46A",
      color: "white",
    },
    transition: "all 0.1s linear ",
  },
  inner: {
    color: "#E9C46A",
    "&:hover": {
      color: "white",
    },
  },
}));

interface AgentCardType {
  agent: AgentType;
}

const AgentCard: FC<AgentCardType> = memo((props) => {
  const { agent } = props;
  const { name, surname, position, img, description, mail } = agent;
  const { classes } = useStyles();

  return (
    <div className="w-full max-w-[360px] flex flex-col p-4 items-center hover:shadow-xl transition-all duration-300">
      <div className="mb-8">
        <UiImage
          src={img!}
          width={200}
          height={200}
          className="rounded-full overflow-hidden"
        />
      </div>
      <div className="w-full flex flex-col items-center antialiased">
        <span className="text-base font-medium text-accent-600">
          {name} {surname}
        </span>
        <span className="">{position}</span>
        <span className="py-5 text-center text-gray-600">{description}</span>
        <Button
          variant="outline"
          classNames={{ inner: classes.inner, root: classes.root }}
        >
          View More
        </Button>
      </div>
    </div>
  );
});

if (isDev) {
  AgentCard.displayName = "AgentCard";
}

export default AgentCard;
