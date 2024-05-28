import React, { useEffect, useState } from "react";
import Newitems from "./Newitems";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
   

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2910c3a70d7d45519cb09bceb0d0b3b0&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(20);
        let parseData = await data.json();
        props.setProgress(60);
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false);
        props.setProgress(100);
    };
       

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)}- Dailynews`
        updateNews();
        // eslint-disable-next-line 
    }, [])
   
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2910c3a70d7d45519cb09bceb0d0b3b0&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles));
        setTotalResults(parseData.totalResults);
    };
    return (
        <>
            <h1 className="text-center " style={{margin:"70px 0px"}}>
                {" "}
                DAILYNEWS-HUNT APP FROM {capitalizeFirstLetter(props.category)}
            </h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container my-3">
                    <div className="row">
                        {articles.map((element) => {
                            return (
                                <div className="col-md-4" key={element.url}>
                                    <Newitems
                                        title={element.title ? element.title : ""}
                                        description={element.description ? element.description : ""}
                                        imgUrl={element.urlToImage}
                                        NewsUrl={element.url}
                                        author={element.author}
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
};

News.defaultProps = {
    country: "in",
    pagesize: 8,
    category: "general",
};
News.propTypes = {
    country: PropTypes.string,
    page: PropTypes.number,
    category: PropTypes.string,
};

export default News;
