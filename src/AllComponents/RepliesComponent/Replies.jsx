import './Replies.css';
import ReplayIcon from '../../assets/Images/icon-reply.svg';

export default function RepliesComponent(props) {

  return (
    <div id='Reply'>
      <img src={ReplayIcon} alt="Not Found" id='replyImg'/>
      <button onClick={props.handleShowReplyIcon}>Reply</button>
    </div>
  )}
