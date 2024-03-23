export const Token = () => {
    const token = localStorage.getItem("token");
    return JSON.parse(token) || [];
  };
  
  export const LogOut = () => {
    return localStorage.removeItem("token");
  };