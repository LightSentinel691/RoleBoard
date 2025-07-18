const STORAGE_KEY = 'roleboard_users';

export const getUsersFromStorage = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveUsersToStorage = (users) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

export const updateUserInStorage = (updatedUser) => {
  const users = getUsersFromStorage();
  const newUsers = users.map((user) =>
    user.id === updatedUser.id ? updatedUser : user
  );
  saveUsersToStorage(newUsers);
  return newUsers;
};

export const addUserToStorage = (newUser) => {
  const users = getUsersFromStorage();
  const newUsers = [...users, newUser];
  saveUsersToStorage(newUsers);
  return newUsers;
};

export const deleteUserFromStorage = (userId) => {
  const users = getUsersFromStorage();
  const newUsers = users.filter((user) => user.id !== userId);
  saveUsersToStorage(newUsers);
  return newUsers;
};
