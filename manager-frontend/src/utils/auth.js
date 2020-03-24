export const signIn = (token) => {
  localStorage.setItem('authorization', token);
}

export const signOut = () => {
  localStorage.removeItem('authorization');
}

export const isAuthenticated = () => {
  if (localStorage.getItem('authorization')) {
    return true;
  }

  return false;
}