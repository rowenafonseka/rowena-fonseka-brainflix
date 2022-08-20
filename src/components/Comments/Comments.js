import "./Comments.scss";

function Comments({ comments }) {
  return (
    <div className="comments">
      {/* function to map comments to list out comments with index as unique key */}
      {comments.map((comment, index) => (
        <div key={index} className="comments__wrapper">
          <div className="comments__avatar"></div>
          <div className="comments__main">
            <div className="comments__top">
              <p className="comments__top comments__top--name">
                {comment.name}
              </p>
              <p className="comments__top comments__top--date">
                {new Date(comment.timestamp).toLocaleDateString("en-US", {
                  month: "2-digit",
                  day: "2-digit",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="comments__paragraph">
              <p>{comment.comment}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments;
