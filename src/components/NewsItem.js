import React from 'react';

// NewsItem Component: Displays individual news article card
const NewsItem = (props) => {
  // Destructure props for easy access to article details
  let { title, description, image, newsUrl, author, date, source } = props;

  return (
    <div className='my-3'>
      {/* Card container with fixed minimum height */}
      <div className="card" style={{ minHeight: "680px" }}>
        {/* Source badge positioned absolutely in top-right corner */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
          <span className=" badge rounded-pill bg-danger">{source}</span>
        </div>

        {/* Article featured image */}
        <img src={image} className="card-img-top" alt="..." />

        {/* Card body with article details */}
        <div className="card-body" style={{ position: "relative" }}>
          {/* Article title */}
          <h5 className="card-title">{title} </h5>

          {/* Article description with ellipsis */}
          <p className="card-text">{description}...</p>

          {/* Author and publication date */}
          <p className="card-text">
            <small>
              By {!author ? "unknown" : author} on {new Date(date).toUTCString()}
            </small>
          </p>

          {/* "Read More" button linking to full article */}
          <a 
            href={newsUrl} 
            style={{ position: "absolute", bottom: "20px" }} 
            target='_blank' 
            className="btn btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;