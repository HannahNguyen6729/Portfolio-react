import React from 'react'

export default function SkillsItem(props) {
  let {item} = props;
  return (
    <div className="col-3 col-lg-2 my-4" >
        <img
          src={item.icon}
          alt={item.name}
          style={{ width: 60, height: 60 }}
          className="img-fluid"
        />
        <p>{item.name}</p>
      </div>
  )
}
