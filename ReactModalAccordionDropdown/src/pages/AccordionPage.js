import React from "react";
import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: "qqq",
      label: "Can i use React on a project?",
      content:
        "You can use React on any project you want. You can use react with redux as well.",
    },
    {
      id: "uuu",
      label: "Can i use Angular on a project?",
      content:
        "You can use Angular on any project you want. Angular is a framework as well.",
    },
    {
      id: "fff",
      label: "Can i use Next on a project?",
      content:
        "You can use Next on any project you want. Next is build on react and node and is a framework as well.",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;
