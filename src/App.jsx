import React from "react";
import TextBlock from "./Elements/TextBlock";
import BG from "./Elements/BG";
import RightBlock from "./Elements/RightBlock";

const App = () => {
  return (
    <main className="relative">
      <div className="px-[164px] flex items-center justify-between min-h-screen w-full gap-5">
        <TextBlock />
        <RightBlock />
      </div>
      <BG />
    </main>
  );
};

export default App;
