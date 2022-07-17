import React from "react";
import {useSelector} from "react-redux";
import ProjectItem from "./ProjectItem";

export default function MainProjects() {
    let {mainProjects} = useSelector((state) => state.PortfolioReducer.portfolio);
    const renderProjects = ()=>{
        return mainProjects.map((project, index) => <ProjectItem key={index} item={project}/>)
    }
  return (
    <div className="container w-75 pb-4" id='projects'>
      <p className="display-4 text-center">Feature projects</p>
      <div className="row">
        {renderProjects()}
      </div>
    </div>
  );
}
