import { url } from './config';

export default function User(name, email, website) {
  return { name, email, website };
}

export function createURL(name) {
  return `${url}/users/${name}`;
}

export function gravatar(email) {
  const photoURL = `https://www.gravatar.com/avatar/${email.toLowerCase()}`;
  return photoURL;
}
