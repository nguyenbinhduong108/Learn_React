import { ReactNode } from "react";
import NewButton from "../newbutton/newbutton";
import "./dialog.scss";

export default function Dialog({
  children,
  message = "Lau nhà",
  completed = false,
}: {
  children: ReactNode;
  message: string;
  completed: boolean;
}) {
  return (
    <div className="container">
      <div className="dialog">
        {/* <div className="dialog-header">
          <i className="fa-solid fa-xmark"></i>
        </div> */}
        {completed && (
          <div className="dialog-content">
            Bạn đã hoàn thành <span>{message}</span>
          </div>
        )}
        {!completed && (
          <div className="dialog-content">
            Bạn chưa hoàn thành <span>{message}</span>. Vui lòng hoàn thành
          </div>
        )}
        <div className="dialog-footer">
          <NewButton type="error">Bỏ qua</NewButton>
          <NewButton>Đồng ý</NewButton>
        </div>
      </div>

      <>{children}</>
    </div>
  );
}
