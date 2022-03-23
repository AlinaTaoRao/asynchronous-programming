
export const otherError = (username = '') => {
    const divEL = document.createElement('div');
    divEL.className = "alert alert-danger";
    divEL.innerHTML = `User "${username}" Not Fount!`;
    return divEL;
  };