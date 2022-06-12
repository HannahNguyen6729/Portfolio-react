import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function OtherProjects() {
  let {otherProjects} = useSelector(state => state.PortfolioReducer.portfolio)
  const renderItems = ()=>{
    return otherProjects.map((item, index) => (
      <tr className="table-info" key={index}>
                <th >{item.name}</th>
                <td>{item.description}</td>
                <td><a href={item.gitRepo} target="_blank" rel="noopener noreferrer"
                className="btn btn-info btn-rounded btn-sm">Source</a></td>
      </tr>
    ))
  }
  return (
    <motion.div className="container pb-5" 
    whileInView={{ y: [300, 0] ,  opacity:[0,1]}}
    transition={{ ease: "easeIn", duration: 1}}>
      <p className="display-4 text-center">Other projects</p>
          <table className="table">
            <tbody>
              {renderItems()}
            </tbody>
          </table>
    </motion.div>
  );
}
