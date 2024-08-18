import "./ReplyInput.css";
import { useState } from "react";

export default function ReplyInput(props) {
  const [replyContent, setReplyContent] = useState(`@${props.UserName} `);

  function handleReplyChange(event) {
    setReplyContent(event.target.value);
  }

  function handleSendReply() {
    const cleanedReplyContent = replyContent.startsWith(`@${props.UserName}`)
      ? replyContent.substring(`@${props.UserName} `.length)
      : replyContent;

    props.handleAddReply(cleanedReplyContent, props.commentId);
    setReplyContent("");
    props.setShowReplyInput(false);
    // console.log(replyContent)
    //  console.log( props.commentId)
  }

  const isReplyContentEmpty = replyContent == `@${props.UserName} `;

  return (
    <div id="ReplyInput">
      <img src={props.CurrentUserImage} alt="Not Found" id="NaglaUserAvatar" />
      <textarea value={replyContent} onChange={handleReplyChange} />
      <button
        onClick={handleSendReply}
        disabled={isReplyContentEmpty}
        className={isReplyContentEmpty ? "disabledSend" : null}
      >
        Send
      </button>
    </div>
  );
}
