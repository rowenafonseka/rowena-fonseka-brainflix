import './Hero.scss';

function Hero (props) {
    const video = props.video;
   
    return(

            <div className="hero">
                <video className="hero__video" poster={video[0].image} controls></video>
            </div>
    )
}

export default Hero;