import React from "react";
import { useSelector } from "react-redux";
import SkillsItem from "./SkillsItem";

export default function Skills() {
  let { skills } = useSelector((state) => state.PortfolioReducer.portfolio);
  const renderSkillsItem = () => {
    return skills.map((item,index) => <SkillsItem item={item} key={index}/>);
  };
  return (
    <div className="container-fluid text-center note-info py-5" id='skills'>
      <div className="w-75 mx-auto my-0">
        <p className="display-5 pt-2">My skills and knowledge</p>
        <p>Technologies and languages I use to create my projects</p>
        <div className="row">{renderSkillsItem()}</div>
      </div>
    </div>
  );
}
