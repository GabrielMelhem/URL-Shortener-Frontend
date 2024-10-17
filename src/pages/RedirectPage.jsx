import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { resolveUrl } from "../services/urlService";

const RedirectPage = () => {
  const { shortenedUrl } = useParams();
  const [originalUrl, setOriginalUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      try {
        const originalUrl = await resolveUrl(shortenedUrl);
        setOriginalUrl(originalUrl);
        setLoading(false);
        setTimeout(() => {
          window.location.href = originalUrl;
        }, 2000);
      } catch (error) {
        console.error("Error fetching orginalUrl:", error.response || error);
        setLoading(false);
      }
    };
    fetchOriginalUrl();
  }, [shortenedUrl]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Redirecting you...</h1>
      <p>You will be redirected to the original URL shortly:</p>
      <a href={originalUrl} target="_blank" rel="noopener noreferrer">
        {originalUrl}
      </a>
    </div>
  );
};

export default RedirectPage;
