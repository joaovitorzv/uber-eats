export const signIn = (token) => {
  localStorage.setItem('authorization', token);
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