import "./EditComment.css";
import EditIcon from "../../../public/assets/Images/icon-edit.svg";

export default function EditComment(props) {
  return (
    <div id="editIcon">
      <img src={EditIcon} alt="" />
      <button onClick={props.handleEditMyComment}>Edit</button>
    </div>
  );
}
