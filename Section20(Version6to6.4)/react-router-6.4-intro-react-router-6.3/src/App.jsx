import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import BlogLayout from './pages/BlogLayout';
import BlogPostsPage, { loader as blogPostsLoader } from './pages/BlogPosts';
import NewPostPage ,{action as postActions}from './pages/NewPost';
import PostDetailPage, { loader as blogPostLoader} from './pages/PostDetail';
import RootLayout from './components/RootLayout';
import WelcomePage from './pages/Welcome';
import ErrorPage from './pages/ErrorPage';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />} errorElement={<ErrorPage/>}>
    <Route index element={<WelcomePage />}/>
    <Route path="/blog" element={<BlogLayout />}>
      {/* the loader prop isn't available if your using browserRouter, to use it you need the RouterProvider instead */}
      {/* <Route index element={<DeferredBlogPostsPage />} loader={dLoader} /> */}
      <Route index element={<BlogPostsPage />} loader={blogPostsLoader} />
      <Route path=":id" element={<PostDetailPage />} loader={blogPostLoader} />
    </Route>
    <Route path="/blog/new" element={<NewPostPage />} action={postActions}/>
    </Route>
));
function App() {
  // https://www.youtube.com/watch?v=L2kzUg6IzxM
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
