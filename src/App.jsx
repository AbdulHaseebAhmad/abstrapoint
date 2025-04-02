import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Pages/Home"
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy"
import TermsandCondition from "./Pages/Terms&Conditions/TermsandCondition"
const router = createBrowserRouter([
  {
    path: '/abstrapoint',
    element: <Home />,
  },
  {
    path: "/abstrapoint/privacy-policy",
    element: <PrivacyPolicy />
  }
  , {
    path: "/abstrapoint/terms-and-conditions",
    element: <TermsandCondition />
  }
   
])
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App


