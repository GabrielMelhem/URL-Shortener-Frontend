import axios from "axios";

const BASE_URL = "http://localhost:8081/api/urls";

export const ShortenUrl = async (originalUrl) => {
    try {
        const response= await axios.post(`${BASE_URL}/shorten`,{
          originalUrl: originalUrl,
        });
  
        return response.data.shortenedUrl;
        
      } catch (error) {
        if(error.response){
          throw new Error(error.response.data);
        } else {
          throw new Error ('An unexpected error occurred.')
        }
      }
};

export const resolveUrl = async (shortenedUrl) => {
  try {
    const response = await axios.get(`${BASE_URL}/resolve/${shortenedUrl}`);
    return response.data.originalUrl;
  } catch (error) {
    throw new Error(error.response?.data?.message || "An error occurred while resolving the URL.");
  }
}
