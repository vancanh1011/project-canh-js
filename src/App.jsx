

import { useEffect, useState } from 'react';
import { getEmployeesList } from './api/employees';
import ManagermentEmployees from "./component/ManagermentEmployee/index";
import { ToastContainer} from 'react-toastify';


function App() {

  
    
 


  return (
    <>
      <ManagermentEmployees />
      <ToastContainer/>
      </>


  )
}

export default App
