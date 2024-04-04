import "./CardsArea.css";
import CardList from "./CardList";

// 에러처리, 로딩처리 추후 추가 예정
function CardsArea({ foldersData }: any) {
  return (
    <div className="card_area">
      <div className="card_wrapper">
        {/* {buttonData ? <ButtonList buttonData={buttonData} /> : " "} */}
        <CardList items={foldersData} />
      </div>
    </div>
  );
}

export default CardsArea;
