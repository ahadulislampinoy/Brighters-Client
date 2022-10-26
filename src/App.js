import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";

function App() {
  return (
    <div>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2500,
        }}
      />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
