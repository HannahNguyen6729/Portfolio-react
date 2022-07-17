import React from 'react'
import {useSelector} from 'react-redux';

export default function RecentProject() {
    let {recentProject} = useSelector((state) => state.PortfolioReducer.portfolio);
  return (
    <div className="container pt-5 pb-4">
        <p className="display-4 text-center mb-4">Recent projects</p>
           <div>
           {recentProject.map((item,index) =>(
              <div className='row mb-5 p-5 note-info rounded' key={index}>
                <div className='col-lg-6 my-2'>
                  <img className="img-fluid" src={item.img} alt={item.name} style={{minHeight: '220px'}} />
                </div>
                <div className='col-lg-6 ps-5 my-2'>
                  <h5> {item.name} </h5>
                  <p>{item.description}</p>
                  <a href={item.website } target="_blank" rel="noopener noreferrer" className="btn btn-info me-2">Web</a>
                  <a href={item.gitRepo} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info">Source</a>
                </div>
              </div>
            ))}
           </div>
      </div>
  )
}
