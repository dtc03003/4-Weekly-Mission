export interface UserData {
  email: string;
  id: number;
  name: string;
  profileImageSource: string;
}

export interface FolderData {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
}

export interface FolderProps{
  folderList: FolderData[] | undefined;
}

export interface ButtonData {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link?: any;
}


export interface ButtonGroupProps {
  buttonList: ButtonData[] | undefined;
};

export interface Icon {
  id: number;
  name: string;
  url: string;
  img: string;
}
