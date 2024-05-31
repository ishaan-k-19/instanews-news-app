import React from 'react'

const NewsItem=(props)=> {
    let { title, description, image, newsUrl, author, date, source } = props;
    return (
      <div className='my-3'>
        <div className="card" style= {{minHeight: "680px"}}>
          <div style= {{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right:'0'}}>
            <span className=" badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body" style= {{position: "relative"}}>
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small>By {!author ? "unknown" : author} on {new Date(date).toUTCString()}</small></p>
            <a href={newsUrl} style= {{position: "absolute", bottom:"20px"}} target='blank' className="btn btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem
