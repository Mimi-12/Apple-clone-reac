
import React,{useState , useEffect} from 'react'
import "./myYoutube.css"
function MyYoutube() {
    const [youTubeVideos, addVideos] = useState([])
    useEffect(() => {
        fetch(
          "https://www.googleapis.com/youtube/v3/search?key=%20AIzaSyDpE4pcx99g1xpLvlcLrxNXc6v4eT_GRTI&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
      )
          .then((res) => res.json())
        .then((data) => {
          const abebe = data.items;
          addVideos(abebe);
      })
    }, []);
  console.log(youTubeVideos);
    return (
      <div>
        <div className="allVideosWrapper">
          <div className="container">
            <div className="row h-100  align-items-center justify-content-center  text-center ">
              <div className="col-12">
                <div className="product-title bold video-title-wrapper">
                  <br />
                  <br />
                  Latest Videos <br /> <br />
                </div>
              </div>
              {youTubeVideos?.map((singleVideo) => {
                let vidId = singleVideo.id.videoId;
                let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
                let videoWrapper = (
                  <div key={vidId} className="col-sm-12 col-md-6 col-lg-4">
                    <div className="singleVideoWrapper">
                      <div className="videoThumbnail">
                        <a href={vidLink} target="_blank">
                          <img src={singleVideo.snippet.thumbnails.high.url} />
                        </a>
                      </div>
                      <div className="videoInfoWrapper">
                        <div className="videoTitle">
                          <a href={vidLink} target="_blank">
                            {singleVideo.snippet.title}
                          </a>
                        </div>
                        <div className="videoDesc">
                          {singleVideo.snippet.description}
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                );
                return videoWrapper;
              })}
            </div>
          </div>
        </div>
      </div>
    );
}

export default MyYoutube
