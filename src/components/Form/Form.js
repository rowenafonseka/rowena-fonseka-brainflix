import "./Form.scss";
import Mohan from "../../assets/Images/Mohan-muruge.jpg";

function Form() {
  return (
    <form className="form">
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
        <button className="form__button">Comment</button>
      </div>
    </form>
  );
}

export default Form;
