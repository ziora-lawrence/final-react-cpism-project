// Utility functions for managing authentication storage

const STORAGE_KEY = 'userCredentials';

export const saveUserCredentials = (email, password, rememberMe) => {
  const userData = { email, password };
  
  if (rememberMe) {
    // Save to localStorage if "Remember me" is checked
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    sessionStorage.removeItem(STORAGE_KEY);
  } else {
    // Save to sessionStorage if "Remember me" is unchecked
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    localStorage.removeItem(STORAGE_KEY);
  }
};

export const getUserCredentials = () => {
  // Check localStorage first
  const localData = localStorage.getItem(STORAGE_KEY);
  if (localData) {
    return JSON.parse(localData);
  }
  
  // Check sessionStorage
  const sessionData = sessionStorage.getItem(STORAGE_KEY);
  if (sessionData) {
    return JSON.parse(sessionData);
  }
  
  return null;
};

export const getUserByEmail = (email) => {
  const data = getUserCredentials();
  if (data && data.email === email) {
    return data;
  }
  return null;
};

export const emailExists = (email) => {
  return getUserByEmail(email) !== null;
};

export const validatePassword = (email, password) => {
  const user = getUserByEmail(email);
  if (user && user.password === password) {
    return true;
  }
  return false;
};

export const updatePassword = (email, newPassword) => {
  const user = getUserByEmail(email);
  if (user) {
    user.password = newPassword;
    // Determine which storage to update
    if (localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    }
    return true;
  }
  return false;
};

export const isUserLoggedIn = () => {
  return getUserCredentials() !== null;
};

export const logout = () => {
  localStorage.removeItem(STORAGE_KEY);
  sessionStorage.removeItem(STORAGE_KEY);
};

export const getLoggedInEmail = () => {
  const user = getUserCredentials();
  return user ? user.email : null;
};
