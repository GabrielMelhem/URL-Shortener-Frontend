import React, { useState } from 'react';

function HomePage() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  const handleInputChange = (e) => {
    setOriginalUrl(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting URL:", originalUrl)

    setOriginalUrl('');
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