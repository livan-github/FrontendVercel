const BASE_URL = 'https://localhost:9000';

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }
  return response.json();
};

const api = {
  team: {
    getMembers: (status) => 
      fetch(`${BASE_URL}/get-team-members?status=${status}`)
        .then(handleResponse),

    acceptRequest: (userId) =>
      fetch(`${BASE_URL}/accept-request/${userId}`, {
        method: 'POST',
      }).then(handleResponse),

    // Other API methods...
  },
  // Other API categories...
};

export default api;
