import { HomePage, PostForm, NotFoundPage } from './pages/index';
import {Routes, Route} from "react-router-dom";
import { PostProvider } from './context/postContext';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className='bg-neutral-900 min-h-screen flex items-center'>
      <div className='px-10 container m-auto'>
        <PostProvider>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/post" element={<PostForm />} />
              <Route path="/post/:id" element={<PostForm />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          <Toaster />
        </PostProvider>
      </div>
        
    </div>

  );
}

export default App;
