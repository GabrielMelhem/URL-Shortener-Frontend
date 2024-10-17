import axios from "axios";

const apiUrl= "http://localhost:8081/api/urls";

export const ShortenUrl = async (originalUrl) => {
    try {
        const response= await axios.post(`${apiUrl}/shorten`,{
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
}
