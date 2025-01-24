export const isLoggedIn = (): boolean => {
  const token = localStorage.getItem("authToken");
  return !!token; // true თუ ტოკენი არსებობს, false თუ არ არსებობს
};
