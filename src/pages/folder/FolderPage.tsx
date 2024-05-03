import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser, getUserFolders, getButtonList } from "../../api/api";

import "./FolderPage.css";
import Gnb from "../../components/Gnb";
import AddLinkBar from "../../components/AddLinkBar";
import SearchBar from "../../components/SearchBar";
import CardsArea from "../../components/CardsArea";
import Footer from "../../components/Footer";
import pen_icon from "../../assets/svg/pen.svg";
import share_icon from "../../assets/svg/share.svg";
import delete_icon from "../../assets/svg/delete.svg";
import ButtonGroup from "../../components/ButtonGroup";
import { UserData, FolderData, ButtonData } from "types/type";

function FolderPage() {
  const [users, setUsers] = useState<UserData>();
  const [folders, setFolders] = useState<FolderData[]>();
  const [buttons, setButtons] = useState<ButtonData[]>();
  // const [folderTitle, setFolderTitle] = useState("전체");
  const [folderTitle] = useState("전체");
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadUserInfo = async () => {
      try {
        const result = await getUser();
        setUsers(result);
      } catch (error) {
        console.error(error);

        return;
      }
    };

    loadUserInfo();
  }, []);

  useEffect(() => {
    const loadButtonList = async () => {
      try {
        // setIsLoading(true);
        const result = await getButtonList();
        const { data } = result;

        setButtons(data);
        // setIsLoading(false);
      } catch (error) {
        console.error(error);
        // setError(error);
      }
    };

    loadButtonList();
  }, []);

  useEffect(() => {
    const loadUserFoldersData = async () => {
      try {
        // setIsLoading(true);
        const result = await getUserFolders(id);
        const { data } = result;

        setFolders(data);
        // setIsLoading(false);
      } catch (error) {
        console.error(error);
        // setError(error);
      }
    };

    loadUserFoldersData();
  }, [id]);
  
  return (
    <div className="folderPage">
      <Gnb userEmail={users?.email} />
      <AddLinkBar />
      <div className="folderPage_contents">
        <SearchBar />
        <ButtonGroup buttonList={buttons} />
        <div className="title_area">
          <h2>{folderTitle}</h2> {/* 구현 못함 */}
          {id && (
            <div className="title_buttons">
              <button className="shareButton">
                <img src={share_icon} alt="공유 아이콘" />
                공유
              </button>
              <button className="renameButton">
                <img src={pen_icon} alt="펜 아이콘" />
                이름 변경
              </button>
              <button className="deleteButton">
                <img src={delete_icon} alt="삭제 아이콘" />
                삭제
              </button>
            </div>
          )}
        </div>
        {folders ? (
          <div>
            <CardsArea folderList={folders} />
          </div>
        ) : (
          <div className="folder_no_link">저장된 링크가 없습니다.</div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default FolderPage;