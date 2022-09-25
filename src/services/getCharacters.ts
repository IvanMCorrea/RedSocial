import { exportDataToFirestore } from "../services/db";

export const getCharacters = () => {
  let charUrl = "https://rickandmortyapi.com/api/character";
  let charList: Array<object> = [];
  const getUsers = async () => {
    try {
      let datos = await fetch(charUrl);
      let response = await datos.json();
      response.results.forEach((element: any) => {
        charList = [...charList, element];
      });
      console.log(response)
      console.log("CharList:", charList);
    } catch (error) {
      console.error(error);
    }
  };
  getUsers();
};
export const getAllCharacters = () =>{
  for (let index = 2; index < 42; index++) {
    let charUrl = `https://rickandmortyapi.com/api/character?page=${index}`;
    let accountList: Array<object> = [];
    const getUsers = async () => {
      try {
        let datos = await fetch(charUrl);
        let response = await datos.json();
        response.results.forEach((element: any) => {
          let name = element.name.replace(/ /g, "");
          let pass = "prueba123";
          let account = { username: name, password: pass, ...element };
          accountList = [...accountList, account];
        });
        exportDataToFirestore(accountList);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }
}


export const getAccounts = () => {
  let charUrl = "https://rickandmortyapi.com/api/character";
  let accountList: Array<object> = [];
  const getUsers = async () => {
    try {
      let datos = await fetch(charUrl);
      let response = await datos.json();
      response.results.forEach((element: any) => {
        let name = element.name.replace(/ /g, "");
        let pass = "prueba123";
        let account = { username: name, password: pass, ...element };
        accountList = [...accountList, account];
      });
      exportDataToFirestore(accountList);
    } catch (error) {
      console.error(error);
    }
  };
  getUsers();
};
