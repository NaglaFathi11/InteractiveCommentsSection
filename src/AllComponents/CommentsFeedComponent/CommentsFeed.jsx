import './CommentsFeed.css';
import CommentItem from '../CommentItemComponent/CommentItem';

export default function CommentsFeed(props) {


  //  console.log(props.comments)
  return (
    <div id='AllComments'>
      {props.comments.map(comment => (
          <CommentItem
            key={comment.id}
            commentId={comment.id}
            UserAvatar={comment.user.image.png}
            UserName={comment.user.username}
            CreatedAt={comment.createdAt}
            Score={comment.score}
            Content={comment.content}
            DeleteCommentFunction={props.DeleteCommentFunction}
            NewContenteAfterEdit={props.NewContenteAfterEdit}
            CurrentUserImage={props.CurrentUserImage}
            handleAddReply={props.handleAddReply}
            replies={comment.replies}
            DeleteReplyFunction={props.DeleteReplyFunction}
            NewReplieseAfterEdit={props.NewReplieseAfterEdit}
          />

      ))}
    </div>
  );
}
