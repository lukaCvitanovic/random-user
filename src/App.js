import List from '@/views/List';
import Details from '@/views/Details';
import NotFount from '@/views/NotFound';
import { Routes, Route } from 'react-router-dom';
import '@/styles/tailwind.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route path="user/:id" element={<Details />} />
          <Route index element={<List />} />
          <Route path="*" element={<NotFount />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
