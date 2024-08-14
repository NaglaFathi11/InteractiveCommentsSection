import './ReplyItem.css'
import Counter from '../CounterComponent/Counter'
import DeleteReplyComponent from '../DeleteReplyComponent/DeleteReply'
import EditReplyComponent from '../EditReplyComponent/EditReply'
import { useState } from 'react'


export default function ReplyItem(props) {

  const [showInputReplyEdit, setShowInputReplyEdit] = useState(false);
       
  function handleEditMyReply(){
          setShowInputReplyEdit(!showInputReplyEdit)
      }

  const [newValueAfterReplyEdit, setNewValueAfterReplyEdit] = useState(props.replyContent)

  function handeOnChangeReplyEdit (event){
            setNewValueAfterReplyEdit(event.target.value)
            // console.log(event.target.value)
           }

  function handleEditReplyValue (event){
        // console.log('hi')
        const clickedCommentId = event.target.getAttribute('commentid')
        const clickedReplyId = event.target.getAttribute('replyid')
        // console.log(clickedCommentId , clickedReplyId)
        props.NewReplieseAfterEdit(clickedCommentId , clickedReplyId, newValueAfterReplyEdit)
        setShowInputReplyEdit(false)

           }

  return (
  <>
    <div key={props.replyId} id='replyItem'>
        <Counter Score={props.replyScore} />
        <div id='replayContent'>
            <div id='replyHeader'>
              <div id='replyTitle'>
                  <img src={props.replyUserAvatar} alt="Not Found" />
                  <h4>{props.replyUserName}</h4>
                  {props.replyUserName == "juliusomo" ? <button id='youbtn'>You</button> : null}
                  <p>{props.replyCreatedAt}</p>  
              </div>

              <div id='replyIcons'>
                <DeleteReplyComponent
                  replyId={props.replyId}
                  commentId = {props.commentId}
                  UserName = {props.replyUserName} 
                  DeleteReplyFunction = { props.DeleteReplyFunction} />

              {props.replyUserName == "juliusomo" && (
                <EditReplyComponent
                    handleEditMyReply = {handleEditMyReply} />)}
               
              </div> 
            </div>

         <div id='replyContent'>
          {showInputReplyEdit == true ? (
                <>
                <textarea value={newValueAfterReplyEdit}  onChange={handeOnChangeReplyEdit}></textarea>
                <button onClick={handleEditReplyValue} commentid = {props.commentId} replyid = {props.replyId}>Update</button>  
                </>
              
            )  :   ( <p> <span>{`@${props.UserName}`}</span> {props.replyContent} </p>  )}
            </div>
        </div>
      </div>
  </>
  )}

