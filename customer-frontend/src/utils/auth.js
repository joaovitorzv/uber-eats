export const Login = (token, customer) => {
  localStorage.setItem('authorization', token);
  localStorage.setItem('customer', JSON.stringify(customer));
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