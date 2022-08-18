import "./Highlight.scss";
import Views from "../../assets/Icons/views.svg";
import Likes from "../../assets/Icons/likes.svg";

function Highlight(props) {
    const video = props.video;

    return(
        <div className="highlight">
        <h1 className="highlight__title">{video[0].title}</h1>
        <div className="highlight__wrapper">
        <div className="highlight__wrap1">
            <span className="highlight__author">By {video[0].channel}</span>
            <span className="highlight__date">{video[0].timestamp}</span>
        </div>
        <div className="highlight__wrap2"> 
            <span className="highlight__views"><img className="highlight__views-icon" src={Views} alt="views icon"></img>{video[0].views}</span>
            <span className="highlight__likes"><img className="highlight__views-icon" src={Likes} alt="likes icon"></img>{video[0].likes}</span>
        </div>
        </div>
        <div className="highlight__description">
            <p>{video[0].description}</p>
            <p className="highlight__comment-title">3 Comments</p>

        </div>



        </div>

    );


    
}


export default Highlight;