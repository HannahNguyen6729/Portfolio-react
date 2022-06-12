import React from 'react'

export default function ProjectItem(props) {
    const {name, description, gitRepo, website, img} = props.item;
  return (
    <div className="col-xl-4 col-12 col-lg-6 my-3">
            <div className="card">
                <div className="bg-image hover-overlay ripple hover-zoom" data-mdb-ripple-color="light">
                    <img src={img} alt={name}  className="img-fluid" />
                    <a href="#!">
                    <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                    </a>
                </div>
                <div className="card-body">
                <h5 className="card-title"> {name} </h5>
                <p className="card-text">{description}</p>
                <a href={website} target="_blank" rel="noopener noreferrer" className="btn btn-info me-2">Web</a>
                <a href={gitRepo} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info">Source</a>
            </div>
        </div>
    </div>
  )
}
