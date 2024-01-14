import React, { ReactNode } from "react";
import Heading from "../navigations/Heading";
import useLayout from "@/hooks/Layout/useLayout";

interface IProps {
  children: ReactNode;
}

function Layout({ children }: IProps) {
  useLayout();

  return (
    <div className="flex flex-col gap-4">
      <Heading />
      {children}
    </div>
  );
}

export default Layout;
