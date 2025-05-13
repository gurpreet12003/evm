import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const Apicontext = createContext();


const EmpContextProvider = ({ children }) => {
  const [EmpData, setEmpData] = useState([]);

  const fetchEmpData = async () => {
    try {
      const resp = await axios.get( "http://localhost:3000/user");
      setEmpData(resp.data);
    } 
    catch (error) {
      console.error("Error fetching data:", error);
    }
  
  }
useEffect(() => {
  fetchEmpData();
}, []);

const fetchEmpDataById = async (id) => {
  try {
    const resp = await axios.get(`http://localhost:3000/user/${id}`);
    return resp
  } catch (error) {
    console.error("Error fetching data by ID:", error);
  }
};
  // const contextValue = { EmpData };

  return (
    <Apicontext.Provider value={{ EmpData ,fetchEmpDataById }}>
      {children}
    </Apicontext.Provider>
  );
};

export default EmpContextProvider;
