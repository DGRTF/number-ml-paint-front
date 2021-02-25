interface AuthResponse {
  // eslint-disable-next-line camelcase
  access_token: string;
  username: string;
}

async function authorizeJWT(formData: FormData) {
  const response = await fetch('login', {
    method: 'POST',
    body: formData,
  });
  if (response.ok) {
    const resObj: AuthResponse = await response.json();
    localStorage.setItem('access_token', resObj.access_token);
    localStorage.setItem('user_name', resObj.username);

    return true;
  }

  return false;
}

function exitProfileJWT() {
  localStorage.removeItem('access_token');
  localStorage.removeItem('user_name');
}

export { authorizeJWT, exitProfileJWT };
