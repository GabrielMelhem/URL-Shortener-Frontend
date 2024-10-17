import React, { useState } from 'react';
import { ShortenUrl } from '../services/ShortenUrl';


function HomePage() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setOriginalUrl(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setShortenedUrl("");

    try {
      const identifier= await ShortenUrl(originalUrl);
      setShortenedUrl(identifier);
      setOriginalUrl('');
    } catch (error) {
      setErrorMessage(error.message);
    }
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
          <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
            {shortenedUrl}
          </a>
        </div>
      )}
    </div>
  )
}

export default HomePage