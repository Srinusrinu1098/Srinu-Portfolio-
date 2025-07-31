import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./AllComponents/Home/Home";
import MyStory from "./AllComponents/MyStory/MyStory";
import Certificates from "./AllComponents/Certificates/Certificates";
import ContactForm from "./AllComponents/ContactForm/ContactForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/my-story",
      element: <MyStory />,
    },
    {
      path: "/certificates",
      element: <Certificates />,
    },
    {
      path: "/Contact",
      element: <ContactForm />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
