import React, { useState } from "react";

import Iridescence from "./Iridescence.jsx";
import Header from "./Header.jsx";

function App() {
  return (
    <>
      <Header />

      <Iridescence
        color={[0.5, 0.6, 0.8]}
        mouseReact
        amplitude={0.1}
        speed={1}
      />
    </>
  );
}

export default App;
