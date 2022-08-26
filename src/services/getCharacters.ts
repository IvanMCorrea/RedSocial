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
      console.log("CharList:", charList);
    } catch (error) {
      console.error(error);
    }
  };
  getUsers();
};
