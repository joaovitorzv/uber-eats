export const login = (token) => {
  localStorage.setItem('authorization', token);
}

export const isAuthenticated = () => {
  if (localStorage.getItem('authorization')) {
    return true;
  }
  return false
}

export const SignOut = () => {
  localStorage.clear();
  window.location.reload();
}