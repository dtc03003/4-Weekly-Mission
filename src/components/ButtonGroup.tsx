import "./ButtonGroup.css";
import add_icon from "../assets/svg/add.svg";
import { ButtonGroupProps } from "../types/type";

function ButtonGroup({ buttonList }: ButtonGroupProps) {
  if (!Array.isArray(buttonList)) {
    return null; 
  }

  return (
    <div className="button_area">
      <div className="button_list">
        <button className="button_folder">전체</button>
        {buttonList.map((button) => (
          <button key={button.id} type="button" className="button_folder">
            {button.name}
          </button>
        ))}
      </div>
      <button className="button_add_folder">
        폴더 추가
        <img className="img_add" src={add_icon} alt="" />
      </button>
    </div>
  );
}

export default ButtonGroup;
