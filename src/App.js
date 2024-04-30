import { Routes, Route } from 'react-router-dom';

import UserListPage from './pages/UserListPage';
import AlbumPage from './pages/AlbumPage';
import PhotosPage from './pages/PhotosPage';

function App() {
  return (
    <Routes>
        <Route path="/" element={<UserListPage />}/>
        <Route path="/albums/:userId" element={<AlbumPage />}/>
        <Route path="/photos/:albumId" element={<PhotosPage />}/>
    </Routes>
  );
}

export default App