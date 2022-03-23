
export const fourOhFour = (username = '') => {
    const divEL = document.createElement('div');
    divEL.className = "alert alert-danger";
    divEL.innerHTML = `Oops! Can't find user "${username}". Try another username.`;
    return divEL;
  };