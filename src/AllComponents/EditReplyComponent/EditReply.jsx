import './EditReply.css'
import EditIcon from '../../assets/Images/icon-edit.svg'

export default function EditReply(props) {

  return (

    <div id='editIcon'>
        <img src={EditIcon} alt="Not Found" />
        <button onClick={props.handleEditMyReply}>Edit</button>
    </div>
    
  
  )}

