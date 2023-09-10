import React from 'react';
import {useRouter} from 'next/router';
// special react hook we can use for dynamic rouying


function DetailPage() {
  const router = useRouter();

  let newsId = router.query.newsId

  console.log(newsId)
  // send a request to the backend api 
  // to fetch the news item with newsId
  return (
    <h1>The Detail Page {newsId}</h1>
  )
}

export default DetailPage