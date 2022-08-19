import "./Videolist.scss";

function Videolist(props) {

const videos = props.vids;

return(

    <div className="videolist">
        <h3 className="videolist__title">Next Videos</h3>
           {videos.map((video) => (
              <div key={video.id} className="videolist__container">
              <div>
                  <img className="videolist__img" src={video.image} alt="next video"></img>
              </div>
              <div className="videolist__detail">
                  <p>{video.title}</p>
                  <p>{video.channel}</p>
              </div>
              </div>
          ))}

        

    </div>


 );

}

export default Videolist;