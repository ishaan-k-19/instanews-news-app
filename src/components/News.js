import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import { v4 as uuidv4 } from 'uuid';

// News Component: Fetches and displays news articles with infinite scrolling
const News = (props) => {
  // State management hooks
  const [articles, setArticles] = useState([]); // Stores fetched articles
  const [loading, setLoading] = useState(true); // Tracks loading state
  const [page, setPage] = useState(1); // Tracks current page for pagination
  const [totalArticles, setTotalArticles] = useState(0); // Tracks total available articles

  // Utility function to capitalize first letter of category
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Fetches initial news articles and updates component state
  const updateNews = async () => {
    // Progress tracking for loading state
    props.setProgress(10);
    
    // Construct API URL based on category, page, and page size
    const url = `https://api.instaanews.online/api/articles/${props.category}?page=${page}&pageSize=${props.pageSize}`;
    
    // Set loading state and fetch articles
    setLoading(true);
    const data = await fetch(url);
    props.setProgress(30);
    
    // Parse response and update state
    const parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalArticles(parsedData.totalArticles);
    setLoading(false);
    props.setProgress(100);
  }

  // Effect hook to update page title and fetch news on category change
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - InstaNews`;
    updateNews();
    // eslint-disable-next-line 
  }, [props.category]);

  // Handles infinite scrolling by fetching next page of articles
  const fetchMoreData = async () => {
    // Increment page number
    const nextPage = page + 1;
    
    // Construct URL for next page
    const url = `https://api.instaanews.online/api/articles/${props.category}?page=${nextPage}&pageSize=${props.pageSize}`;
    
    // Fetch and append new articles
    const data = await fetch(url);
    const parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalArticles(parsedData.totalArticles);
    setPage(nextPage);
  };

  // Render news articles in a responsive grid with infinite scroll
  return (
    <>
      {/* Page title with capitalized category */}
      <h1 className="text-center" style={{ margin: '90px 0px 35px 0px' }}>
        InstaNews - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      
      {/* Show loading spinner while initial articles are loading */}
      {loading && <Spinner />}
      
      {/* Infinite scroll component */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalArticles}
        loader={<Spinner />}
      >
        {/* News items grid */}
        <div className="container">
          <div className="row">
            {/* Map and render each article */}
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={uuidv4()}>
                  <NewsItem 
                    title={element.title ? element.title : ""} 
                    description={element.description ? element.description : ""} 
                    image={element.image ? element.image : "/InstaNews.png"} 
                    newsUrl={element.url} 
                    author={element.source.name} 
                    date={element.publishedAt} 
                    source={element.source.name} 
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

// Default prop values
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
}

// Prop type validation
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func.isRequired
}

export default News;