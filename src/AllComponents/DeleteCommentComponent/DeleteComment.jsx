import './DeleteComment.css'
import DeleteIcon from '../../assets/Images/icon-delete.svg'
import { useState } from 'react';

export default function DeleteComment(props) {
  
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  function HandleCancelDelete() {
      setShowConfirmDialog(false);
            }

   function HandleDeleteComment() {
      setShowConfirmDialog(true);
  }


  function HandleConfirmDelete(event) {
      props.DeleteCommentFunction(event.target.getAttribute('commentid'))
      setShowConfirmDialog(false);
  }


  return (
    <>
        <div id='deleteCommentBtn'>
          {props.UserName == "juliusomo" ?
          <div id='deleteComment'>
          <img src= {DeleteIcon} alt="Not Found" />
          <button  onClick={HandleDeleteComment}>Delete</button></div> : null} 
      
          {showConfirmDialog && (
          <div id='confirm-dialog-container'>
             <div className="confirm-dialog">
                <p>Are you sure you want to delete this comment?</p>
                <div id='btns'>
                <button className="confirm-button cancel" onClick={HandleCancelDelete}>No, Cancel</button>
                <button className="confirm-button delete" onClick={HandleConfirmDelete} commentid = {props.commentId} >Yes, Delete</button>
            </div>
          </div>
          </div>
           )}
        </div>
        </>
  )}

