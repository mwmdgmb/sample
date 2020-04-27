import React from "react";
import Head from "next/head";
import Header from "../shared/header/header";

const BaseLayout = props => {
  const { children, title } = props;

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>

      <div>
        <Header />
        <main className="cover">
          <div className="container">{children}</div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default BaseLayout;
