import React from 'react'
import PageContent from '../components/PageContent'
import MainNavigation from '../components/MainNavigation'
import {useRouteError} from 'react-router-dom'
function ErrorPage() {
  const error = useRouteError()
  let title = 'An error occurred!';
  let message = 'Something went wrong!';
  console.log(error.status)
  if(error.status === 500){
    message = error.data.message;//because we are using the json method
    // message = JSON.parse(error.data).message;
  }
  if(error.status === 404){
    title = 'Not Found!';
    message = 'Could not find resource';
  }
  return (
    <>
    <MainNavigation/>
    <PageContent title={title}><p>{message}</p></PageContent>
    </>
  )
}

export default ErrorPage