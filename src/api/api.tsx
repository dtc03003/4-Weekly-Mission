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

export async function getUserFolders(userId: string = '1', folderId?: string ) {
  let url = "/users/${userId}/links";

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

export async function getButtonList(userId: string = '1') {
  try {
    const response = await http.get("/users/${userId}/folders");
    return response.data;
  } catch (error) {
    throw new Error("버튼 리스트를 불러오는데 실패했습니다.");
  }
}
