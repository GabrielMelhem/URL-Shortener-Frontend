import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/" >Go back to home</Link>
    </div>
  )
}

export default ErrorPage