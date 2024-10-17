import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ShortenUrl } from '../services/urlService';


function HomePage() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setOriginalUrl(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setShortenedUrl("");

    try {
      const response = await ShortenUrl(originalUrl);
      console.log("response",response);
      setShortenedUrl(response);
      setOriginalUrl('');
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  const handleShortenedUrlClick = (e) => {
    e.preventDefault();
    navigate(`/${shortenedUrl}`);
  }
  
  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
     <div className="bg-white shadow-md rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">Enter your URL: </label>
        <textarea
          id="originalUrl"
          value={originalUrl}
          onChange={handleInputChange}
          placeholder="Copy your URL here"
          rows="4"
          cols="50"
          className="block w-full border border-gray-300 rounded-md p-2 mb-4 focus:ring focus:ring-blue-300"
        />
        <br />
        <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-200">Shorten URL</button>
      </form>

      {errorMessage && (
        <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
          <p>{errorMessage}</p>
        </div>
      )}

      {shortenedUrl && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Shortened URL:</h2>
          <a href="#" onClick={handleShortenedUrlClick} className="text-blue-500 hover:underline">
            {shortenedUrl}
          </a>
        </div>
      )}
    </div>
   </div>
  )
}

export default HomePage