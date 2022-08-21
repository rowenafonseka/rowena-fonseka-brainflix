import "./Form.scss";
import Mohan from "../../assets/Images/Mohan-muruge.jpg";
import Comment from "../../assets/Icons/add_comment.svg";

function Form() {
  return (
    <div className="form">
      <div>
        <img className="form__avatar" src={Mohan} alt="avatar" />
      </div>
      <div className="form__field">
        <div>
          <label className="form__label">join the conversation</label>
          <textarea
            className="form__comment"
            name="commentField"
            placeholder="Add a new comment"
          ></textarea>
        </div>
        <button className="form__btn">
          <img className="form__btn--icon" src={Comment} alt="comment icon" />
          Comment
        </button>
      </div>
    </div>
  );
}

export default Form;
