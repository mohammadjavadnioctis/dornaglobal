import React, { FC, memo } from "react";
import { isDev } from "~/utils/helpers";
import AgentBaner from "./partials/Banner/AgentBanner";

const StaffPage: FC = memo(() => {
  return (
    <div>
      <AgentBaner />
    </div>
  );
});

if (isDev) {
  StaffPage.displayName = "StaffPage";
}

export default StaffPage;
