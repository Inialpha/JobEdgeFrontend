import './App.css'
import JobsPage from "@/pages/JobsPage";
import JobDetails from "@/pages/JobDetails";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AccordionResume from "@/pages/ResumeForm";
import Signup from "@/pages/Signup";
import Login from "@/pages/Login";


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="jobs/detail" element={<JobDetails />} />
      <Route path='jobs' element={<JobsPage />} />
      <Route path="resume" element={
          <AccordionResume />
      }/>
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={routes} />
  );
}



export default App
