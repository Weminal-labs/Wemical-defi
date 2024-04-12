import React, { ReactNode } from "react";
import Layout from "@/components/layouts/Layout";

const Page = ({children} : {children : ReactNode}) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
};

export default Page;
