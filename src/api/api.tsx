import http from "./http";

export async function getUser() {
  try {
    const response = await http.get("/sample/user");
    return response.data;
  } catch (error) {
    throw new Error("유저정보를 불러오는데 실패했습니다.");
  }
}

export async function getFolders() {
  try {
    const response = await http.get("/sample/folder");
    return response.data;
  } catch (error) {
    throw new Error("카드를 불러오는데 실패했습니다.");
  }
}

export async function getUserFolders(folderId: string | undefined) {
  let url = "/users/1/links";

  if (folderId) {
    url += `?folderId=${folderId}`;
  }

  try {
    const response = await http.get(url);
    return response.data;
  } catch (error) {
    throw new Error("카드를 불러오는데 실패했습니다.");
  }
}

export async function getButtonList() {
  try {
    const response = await http.get("/users/1/folders");
    return response.data;
  } catch (error) {
    throw new Error("버튼 리스트를 불러오는데 실패했습니다.");
  }
}
