import React, { ReactNode } from "react";
import Sidebar from "../navigations/Sidebar";
import useLayout from "@/hooks/Layout/useLayout";

interface IProps {
  children: ReactNode;
}

function Layout({ children }: IProps) {
  useLayout();

  return (
    <div className="flex gap-4">
      <Sidebar />
      {children}
    </div>
  );
}

export default Layout;
