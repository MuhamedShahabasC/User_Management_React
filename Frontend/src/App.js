import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import IndexPage from "./Pages/IndexPage";
import UserLogin from './Pages/UserLogin'
import UserSignUp from "./Pages/UserSignUp";
import AdminLogin from "./Pages/AdminLogin";

const router = createBrowserRouter([
  {
    index: true,
    element: <IndexPage />,
  },
  {
    path: '/user',
    children: [
      {
        path: 'login',
        element: <UserLogin/>
      },
      {
        path: 'signup',
        element: <UserSignUp/>
      }
    ]

  },
  {
    path: '/admin',
    children: [
      {
        path: 'login',
        element: <AdminLogin/>
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
