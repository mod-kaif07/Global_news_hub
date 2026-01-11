import React, { useEffect, useState } from "react";
import "./News.css";
import axios from 'axios'

const News = () => {
  const [mynews, setMyNews] = useState([]);

  // ✅ Get today's date
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });



  useEffect(()=>{
    axios.get('/api/news')
    .then((response)=>{
      setMyNews(response.data);
    })
    .catch((err)=>{
      console.log(error);
    })
  });

  return (
    <>
      <div className="Front_content">
        <h1
          className="text-center my-3"
          style={{ color: "white", textAlign: "center" }}
        >
          Enjoy Daily Top - Headlines
        </h1>
        <div className="date">{today}</div>
      </div>

      <div className="mainDiv">
        {mynews.slice(0,12).map((ele, index) => {
          return (
            <div
              key={index}
              className="card"
              style={{
                marginTop: "2rem",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <img
                src={
                  ele.urlToImage ||
                  "https://kubrick.htvapps.com/vidthumb/f6865cb1-d77d-4a31-ba83-d57c4b2324d8/4b9c9d8f-ad14-47ea-bcf4-bf24ee0bb1f3.jpg?crop=0.383xw:0.383xh;0.517xw,0.252xh&resize=1200:*"
                }
                className="card-img-top"
                alt="news"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {ele.author ? ele.author : "Janelle Ash"}
                </h5>
                <p className="card-text">{ele.title}</p>
                <div className="buttons">
                  <a
                    href={ele.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Read More
                  </a>
                  <form action="#">
                    <button className="btn btn-primary">Save</button>
                  </form>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default News;
