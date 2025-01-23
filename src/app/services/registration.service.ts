export const registerUser = async (
    name: string,
    email: string,
    password: string,
    password_confirmation: string
  ) => {
    try {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ name, email, password, password_confirmation }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to register');
      }
  
      return await response.json();
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'An unknown error occurred');
    }
  };
  