import React from 'react'
import {useRouter} from 'next/router'
function DetailsPage() {
const router = useRouter()
const newsId = router.query.newsId
// here we can send a request to the backend API
// to fetch the new item with newsId
  return (
    <div>DetailsPage {newsId}</div>
  )
}

export default DetailsPage