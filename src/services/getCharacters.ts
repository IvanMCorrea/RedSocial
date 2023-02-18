import defaultImage from "../assets/default_avatar.png";
import { createNewUser } from "../api/auth";

/* export const getCharacters = () => {
  let charUrl = "https://rickandmortyapi.com/api/character";
  let charList: Array<object> = [];
  const getUsers = async () => {
    try {
      let datos = await fetch(charUrl);
      let response = await datos.json();
      response.results.forEach((element: any) => {
        charList = [...charList, element];
      });
      console.log(response);
      console.log("CharList:", charList);
    } catch (error) {
      console.error(error);
    }
  };
  getUsers();
}; */
export const getAllCharacters = async () => {
  for (let index = 1; index < 42; index++) {
    let charUrl = `https://rickandmortyapi.com/api/character?page=${index}`;
    try {
      let datos = await fetch(charUrl);
      let response = await datos.json();
      let avatar = null;
      await response.results.forEach((element: any) => {
        const formData = new FormData();
        let name = element.name.replace(/ /g, "");
        let pass = name;
        let email = `${name}Account@mail.com`;
        avatar = element.image ? element.image : null;
        let account = {
          username: name,
          password: pass,
          email: email,
          ...element,
        };
        for (const key in account) {
          if (account.hasOwnProperty(key)) {
            formData.append(key, account[key]);
          }
        }
        if (avatar)
          fetch(avatar)
            .then((response) => response.blob())
            .then((imageBlob) => {
              const file = new File([imageBlob], "avatar.jpg", {
                type: "image/jpeg",
              });
              formData.append("avatar", file);
            })
            .then(() => {
              createNewUser(formData);
            });
      });
    } catch (error) {
      console.error(error);
    }
  }
};
