export const signIn = (token, restaurant) => {
  localStorage.setItem('authorization', token);
  // Set frequently used info on localstorage
  localStorage.setItem('userLogged', restaurant);
}

export const signOut = () => {
  localStorage.clear();
  window.location.reload();
}

export const isAuthenticated = () => {
  if (localStorage.getItem('authorization')) {
    return true;
  }
  return false;
}