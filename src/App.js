import List from '@/views/task/List';
import Details from '@/views/task/Details';
import NotFount from '@/views/task/NotFound';
import History1 from '@/views/react-router/history/History1';
import History2 from '@/views/react-router/history/History2';
import RefForwarding from '@/views/RefForwarding';
import PortalsPage from '@/views/PortalsPage';
import Aside from '@/views/Aside';
import DynamicInputs from '@/views/DynamicInputs';
import PortalTooltip from '@/views/PortalTooltip';
import Login from '@/views/google-auth/Login';
import Landing from '@/views/google-auth/Landing';
import FormValidation from '@/views/FormValidation';
import CommonLayout from '@/views/task/common/CommonLayout';
import Menu from '@/views/Menu';
import { Routes, Route } from 'react-router-dom';
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
        </Route>
        <Route
          path="react-router"
        >
          <Route
            path="history"
          >
            <Route
              path="1"
              element={<History1 />}
            />
            <Route
              path="2"
              element={<History2 />}
            />
          </Route>
        </Route>
        <Route
          path="ref-forwarding"
          element={<RefForwarding />}
        />
        <Route
          path="portal"
          element={<PortalsPage />}
        />
        <Route
          path="aside"
          element={<Aside />}
        />
        <Route
          path="dynamic-inputs"
          element={<DynamicInputs />}
        />
        <Route
          path="portal-tooltip"
          element={<PortalTooltip />}
        />
        <Route
          path="google-auth"
        >
          <Route
            path="login"
            element={<Login />}
          />
          <Route
            path="landing"
            element={<Landing />}
          />
        </Route>
        <Route
          path="form-validation"
          element={<FormValidation />}
        />
        <Route
          path='*'
          element={<NotFount />}
        />
      </Route>
    </Routes>
  );
}

export default App;
