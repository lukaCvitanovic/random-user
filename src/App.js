import List from '@/views/task/List';
import Details from '@/views/task/Details';
import NotFount from '@/views/task/NotFound';
import CommonLayout from '@/views/task/common/CommonLayout';
import { Routes, Route } from 'react-router-dom';
import Menu from '@/views/Menu';
import '@/styles/tailwind.css';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<CommonLayout />}
      >
        <Route
          index
          element={<Menu />}
        />
        <Route
          path='task'
        >
          <Route
            path='users/:id'
            element={<Details />}
          />
          <Route
            index
            element={<List />}
          />
          <Route
            path='*'
            element={<NotFount />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
