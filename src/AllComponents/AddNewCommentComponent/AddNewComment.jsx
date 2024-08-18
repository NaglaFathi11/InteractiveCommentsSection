import { useState } from "react";
import "./AddNewComment.css";

export default function AddNewComment(props) {
  const [ValueInput, setValueInput] = useState("");

  function HandleSendComment() {
    props.CommentAdded(ValueInput);
    setValueInput("");
  }

  function HandleChangeComment(event) {
    setValueInput(event.target.value);
  }

  return (
    <div id="NewComment">
      <img src={props.CurrentUserImage} alt="Not Found" />
      <textarea
        type="text"
        placeholder="Add a comment..."
        value={ValueInput}
        onChange={HandleChangeComment}
      />
      <button
        onClick={HandleSendComment}
        disabled={ValueInput ? false : true}
        className={ValueInput ? "activeBTN" : "disabledBTN"}
      >
        SEND
      </button>
    </div>
  );
}
