import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharePage from "./pages/share/SharePage";
import FolderPage from "./pages/folder/FolderPage";
import { ROUTES_PATHS } from "./constants/path";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharePage />} />
        <Route path={ROUTES_PATHS.SHARED} element={<SharePage />} />
        <Route path={ROUTES_PATHS.FOLDER} element={<FolderPage />} />
        <Route path={`${ROUTES_PATHS.FOLDER}/:id`} element={<FolderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
