import "./InputMessage.css";
import { TbInfoCircleFilled, TbAlertTriangleFilled } from "react-icons/tb";

function InputMessage({ message, type, valid }) {
  const messageTypes = {
    information: <TbInfoCircleFilled color="var(--colour-blue-50)" size={16} />,
    warning: <TbAlertTriangleFilled color="var(--colour-red-50)" size={16} />,
    caution: (
      <TbAlertTriangleFilled color="var(--colour-orange-50)" size={16} />
    ),
  };

  return (
    <div
      className={
        valid ? `input-message__container` : `input-message__container--visible`
      }
    >
      {messageTypes[type]}
      <p className="input-message__text">{message}</p>
    </div>
  );
}

export default InputMessage;
