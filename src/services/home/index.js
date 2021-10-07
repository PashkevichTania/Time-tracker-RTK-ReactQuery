import { BASE_URL } from 'services/config';

export const getUsersAPI = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    const users = await response.json();

    return users;
  } catch (error) {
    console.log(error);
  }
};
