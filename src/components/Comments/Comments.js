import "./Comments.scss";


function Comments({comments}) {

    
    return(

            <div className="comments">
                {comments.map((comment) => {
                    return (
                        <>
                        <div className="comments__avatar">
                        </div>
                        <div className="comments__main" key={comment.id}>
                            <p>{comment.name}</p>
                            <p>{comment.comment}</p>
                        </div>
                        <div className="comments__date">
                            <p>{comment.timestamp}</p>
                        </div>
                        </>
                    )
                }) }
               
            </div>

            );

         

}

export default Comments;