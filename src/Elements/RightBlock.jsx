import React from "react";
import Sale from "./RightBlock/Sale";
import Form from "./RightBlock/Form";

const RightBlock = () => {
  return (
    <div className="flex flex-col items-center justify-between">
      <Sale />
      <Form />
    </div>
  );
};

export default RightBlock;
