import "./DeleteReply.css";
import DeleteIcon from "../../../public/assets/Images/icon-delete.svg";
import { useState } from "react";

export default function DeleteReply(props) {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  function HandleCancelDelete() {
    setShowConfirmDialog(false);
  }

  function HandleReplyComment() {
    setShowConfirmDialog(true);
  }

  function HandleConfirmDelete(event) {
    const myCommentId = event.target.getAttribute("commentid");
    const myReplyId = event.target.getAttribute("replyid");
    //  console.log(event.target.getAttribute('commentid'))
    //  console.log(event.target.getAttribute('replyid'))
    props.DeleteReplyFunction(myCommentId, myReplyId);
    setShowConfirmDialog(false);
  }

  return (
    <>
      <div id="deleteReplyBtn">
        {props.UserName == "juliusomo" ? (
          <div id="deleteComment">
            <img src={DeleteIcon} alt="Not Found" />
            <button onClick={HandleReplyComment}> Delete </button>
          </div>
        ) : null}

        {showConfirmDialog && (
          <div id="confirm-dialog-container">
            <div className="confirm-dialog">
              <p>Are you sure you want to delete this reply?</p>
              <div id="btns">
                <button
                  className="confirm-button cancel"
                  onClick={HandleCancelDelete}
                >
                  No, Cancel
                </button>
                <button
                  className="confirm-button delete"
                  onClick={HandleConfirmDelete}
                  commentid={props.commentId}
                  replyid={props.replyId}
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
