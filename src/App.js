import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
  ]);
  return (
    <div className="App" id="main">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
