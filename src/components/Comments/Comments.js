import "./Comments.scss";

function Comments({ comments }) {
  return (
    <div className="comments">
      {/* function to map comments to list out comments with index as unique key */}
      {comments[0].comments.map((comment, index) => (
        <div key={index} className="comment__wrapper">
          <div className="comments__avatar"></div>
          <div className="comments__main">
            <p>{comment.name}</p>
            <p>{comment.comment}</p>
          </div>
          <div className="comments__date">
            <p>
              {new Date(comment.timestamp).toLocaleDateString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments;
