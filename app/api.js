const URL_START = `https://api.github.com`;

export function user(user) {
  return fetch(`${URL_START}/users/${user}`);
}

export function repositories(user) {
  return fetch()
}
