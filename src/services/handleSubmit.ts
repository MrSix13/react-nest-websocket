import { NavigateFunction } from "react-router-dom";
import { FC } from "react";

type User = {
  userName: string;
  navigate: NavigateFunction;
};

//Funcion creadora de usuarios
export const HandleSubmitUserName: FC<User> = ({
  userName,
  navigate,
}: User): any => {
  const nameLowerCase = userName.toLocaleLowerCase();
  if (!localStorage.getItem("User")) {
    console.log("No hay nadie registrado con ese nombre");
    localStorage.setItem("User", JSON.stringify(nameLowerCase));
    navigate("/chat");
  }
  navigate("/chat");
};
