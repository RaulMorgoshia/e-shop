
    // src/services/AuthService.ts
export const logoutApi = async (): Promise<void> => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      throw new Error("No token found");
    }
  
    const response = await fetch("http://localhost:8000/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  
    if (!response.ok) {
      throw new Error("Failed to logout");
    }
  
    // Clear the token from localStorage
    localStorage.removeItem("authToken");
  };
  
    