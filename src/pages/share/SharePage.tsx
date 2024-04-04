import { useEffect, useState } from "react";
import { getUser, getFolders } from "../../api/api";
import "./SharePage.css";
import Gnb from "../../components/Gnb";
import Banner from "../../components/Banner";
import SearchBar from "../../components/SearchBar";
import CardsArea from "../../components/CardsArea";
import Footer from "../../components/Footer";
import { FolderData, UserData } from "@/src/types/type";

function SharePage() {
  const [users, setUsers] = useState<UserData | undefined>();
  const [folders, setFolders] = useState<FolderData | undefined>();
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

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
    const loadFoldersData = async () => {
      try {
        // setIsLoading(true);
        const result = await getFolders();
        const { folder } = result;

        setFolders(folder.links);
        // setIsLoading(false);
      } catch (error) {
        console.error(error);
        // setError(error);
      }
    };

    loadFoldersData();
  }, []);

  return (
    <div className="sharePage">
      <Gnb userEmail={users?.email} />
      <Banner userName={users?.name} />
      <div className="sharePage_contents">
        <SearchBar />
        <CardsArea foldersData={folders} />
      </div>
      <Footer />
    </div>
  );
}

export default SharePage;
