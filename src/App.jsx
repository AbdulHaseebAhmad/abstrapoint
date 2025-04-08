import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Pages/Home/Home"
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy"
import TermsandCondition from "./Pages/Terms&Conditions/TermsandCondition"
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />
  }
  , {
    path: "/terms-and-conditions",
    element: <TermsandCondition />
  }
   
])
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App


