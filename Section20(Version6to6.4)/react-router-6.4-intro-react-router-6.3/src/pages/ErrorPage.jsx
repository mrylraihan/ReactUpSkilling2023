import React from 'react'
import MainNavigation from '../components/MainNavigation'
import { useRouteError } from 'react-router-dom'
function ErrorPage() {
    const error = useRouteError();
  return (
    <>
        <MainNavigation/>
        <main id='error-content'>
            <h1>An Error Occurred!</h1>
              <p>{error.message}</p>
        </main>
    </>
  )
}

export default ErrorPage