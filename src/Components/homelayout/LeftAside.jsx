import React, { Suspense } from "react";
import Catagorit from "../catagorit";

const LeftAside = () => {
  return <div>
     <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <Catagorit></Catagorit>
     </Suspense>
  </div>;
};

export default LeftAside;
