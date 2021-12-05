//newsapi.org/v2/everything?q=Apple&from=2021-06-11&sortBy=publishedAt&apiKey=8d1bd3abcca44714b05228c72ff9b32e
import React, { useState, useEffect } from "react";
import "./news.css";
function News() {
  const [article, addArticles] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=Apple&from=2021-06-30&sortBy=publishedAt&apiKey=8d1bd3abcca44714b05228c72ff9b32e"
    )
      .then((res) => res.json())
      .then((data) => {
        let news = data.articles;
        addArticles(news);
      });
  }, []);
  console.log(article);
  return (
    <div>
      <div className="allArticlesWrapper">
        <div className="conainer">
          <div className="row h-100 text-center">
            <div className="col-12">
              <div className="product-title bold video-title-wrapper">
                <br />
                <br />
                Latest Articles <br /> <br />
              </div>
            </div>
            {article?.map((singleVideo) => {
              let vidUrl = singleVideo.url;
              let newsWrapper = (
                <div className="singleVideoWrapper">
                  <div className="vidWrapper">
                    <a href={vidUrl} target="_blank">
                      <img src={singleVideo.urlToImage}></img>
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidUrl} target="_blank">
                        {singleVideo.title}
                      </a>
                    </div>
                    <div className="videoDesc">{singleVideo.description}</div>
                  </div>
                </div>
              );
              return newsWrapper;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
