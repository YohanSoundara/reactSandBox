import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'

import App from './App'

import Home from './pages/Home'
import About from './pages/About'

const router = createBrowserRouter([
  {
    element:<App />,
    children: [
      {
        path:"/",
        element: <Home />,
      },
      {
        path:"/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);