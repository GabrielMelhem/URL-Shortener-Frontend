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
    <div>
        <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">Enter your URL: </label>
        <textarea
          id="originalUrl"
          value={originalUrl}
          onChange={handleInputChange}
          placeholder="Copy your URL here"
          rows="4"
          cols="50"
        />
        <br />
        <button type="submit">Shorten URL</button>
      </form>

      {errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}

      {shortenedUrl && (
        <div>
          <h2>Shortened URL:</h2>
          <a href="#" onClick={handleShortenedUrlClick}>
            {shortenedUrl}
          </a>
        </div>
      )}
    </div>
  )
}

export default HomePage