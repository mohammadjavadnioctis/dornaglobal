import React, { FC, memo } from "react";
import StaffPage from "~/components/pages/StaffPage/StaffPage";
import { isDev } from "~/utils/helpers";

const Staff: FC = memo(() => {
  return (
    <div>
      <StaffPage />
    </div>
  );
});

if (isDev) {
  Staff.displayName = "Staff";
}

export default Staff;
