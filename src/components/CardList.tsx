import { FolderData, FolderProps } from "types/type";
import Card from "./Card";
import "./CardList.css";

function CardList({ folderList }: FolderProps) {
  return (
    <ul className="card_list">
      {folderList ? folderList.map((item: FolderData) => <Card cardList={item} key={item.id} />) : null}
    </ul>
  );
}

export default CardList;
