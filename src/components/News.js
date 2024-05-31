import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import { v4 as uuidv4 } from 'uuid';


const News = (props)=> {
  const[articles, setArticles] = useState([]);
  const[loading, setLoading] = useState(true);
  const[page, setPage] = useState(1);
  const[totalArticles, setTotalArticles] = useState(0);


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  


  const updateNews= async()=> {
    props.setProgress(10);
    let url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&country=${props.country}&lang=en&page=${page}&max=${props.pageSize}&apikey=${props.apiKey}`
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalArticles(parsedData.totalArticles);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(() => {
  document.title = `${capitalizeFirstLetter(props.category)} - InstaNews`
  updateNews(); 
   // eslint-disable-next-line 
  }, []);


  const fetchMoreData = async () => {
    let url = `https://gnews.io/api/v4/top-headlines?category=${props.category}%27&lang=en&country=${props.country}&page=${page+1}&max=${props.pageSize}&apikey=${props.apiKey}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalArticles(parsedData.totalArticles);
    setLoading(false);
  };

    return (
      <>
        <h1 className="text-center" style={{ margin: '90px 0px 35px 0px' }}>InstaNews - Top { capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==  totalArticles}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return <div className="col-md-4" key={uuidv4()}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} image={element.image} rl={element.url} author={element.source.name} date={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>
          </div>

        </InfiniteScroll>
      </>
    );
  }
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News;
