import React, { Suspense } from "react";
import IMAGE from "./react-logo.png";
import LOGO from "./cat.svg";
import * as styles from "./style.scss";
// @ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component";

const ClickCounter = React.lazy(() => import("./ClickCounter"));

const App = () => {
  return (
    <>
      <h1 className="h1" data-testid="h1">
        Hello React typescript webpack starter template - {process.env.NODE_ENV}{" "}
        {process.env.name}
      </h1>
      <LazyLoadImage src={IMAGE} alt="Logo" width="300" height="300" />
      <LazyLoadImage src={LOGO} alt="Cat logo" width="300" height="300" />{" "}
      <LazyLoadImage src={IMAGE} alt="Logo" width="300" height="300" />
      <LazyLoadImage src={LOGO} alt="Cat logo" width="300" height="300" />{" "}
      <LazyLoadImage src={IMAGE} alt="Logo" width="300" height="300" />
      <Suspense fallback={<div>Loading...</div>}>
        <ClickCounter data-testid="click-counter" />
      </Suspense>
    </>
  );
};

export default App;
