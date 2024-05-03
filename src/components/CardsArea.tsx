import "./CardsArea.css";
import CardList from "./CardList";
import { FolderProps } from "types/type";

// 에러처리, 로딩처리 추후 추가 예정
function CardsArea({ folderList }: FolderProps) {
  return (
    <div className="card_area">
      <div className="card_wrapper">
        {/* {buttonData ? <ButtonList buttonData={buttonData} /> : " "} */}
        <CardList folderList={folderList} />
      </div>
    </div>
  );
}

export default CardsArea;
