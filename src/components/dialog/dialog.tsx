import NewButton from "../newbutton/newbutton";
import "./dialog.scss";

export default function Dialog() {
  return (
    <div className="container">
      <div className="dialog">
        <div className="dialog-header">
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="dialog-content"></div>
        <div className="dialog-footer">
          <NewButton type="error">Bỏ qua</NewButton>
          <NewButton>Đồng ý</NewButton>
        </div>
      </div>
    </div>
  );
}
