import React, { useState,useEffect} from 'react'
import View from './view'
import { useContext} from 'react'
import { Apicontext} from '../context/context'
const Dasbord = () => {
  const{EmpData}=useContext(Apicontext)
  const [totalEmp, setTotalEmp] = useState({
  "IT": 0,
        "Human Resources": 0,
        "Marketing": 0,
        "Finance": 0,
        "Operations": 0,
        "Product": 0,

  });

   useEffect(() => {

      const departmentCount = {
        "IT": 0,
        "Human Resources": 0,
        "Marketing": 0,
        "Finance": 0,
        "Operations": 0,
        "Product": 0,
      };

      EmpData.forEach((emp) => {
        if (departmentCount.hasOwnProperty(emp.department)) {
          departmentCount[emp.department] += 1;
        }
      });
    setTotalEmp(departmentCount);
  }, [EmpData]);
 const contData=totalEmp;




//  salllery
const [empsalary,setSalary]=useState(0)
const [emptotalSalary,setTotalSalary]=useState(0)

const EmpSalary=()=>{
let totalSalary = EmpData.reduce((acc, emp) => acc + Number(emp.salary), 0) ;
setTotalSalary(totalSalary)
}
const calculateAvgSalary=()=>{
  let avgSalary = EmpData.reduce((acc, emp) => acc + Number(emp.salary), 0) / EmpData.length;
    setSalary(avgSalary);
  }

useEffect(()=>{
EmpSalary()
calculateAvgSalary()
},[EmpData])


  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Employees by Department</h3>
          <ul className="space-y-2">
            {Object.entries(contData).map(([department, count]) => (
              <li key={department} className="text-gray-600">
                {department}: <span className="font-medium">{count}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Salary Information</h3>
          <p className="text-gray-600">Total Salary: <span className="font-medium">{`$${emptotalSalary}`}</span></p>
          <p className="text-gray-600">Average Salary: <span className="font-medium">{`$${empsalary}`}</span></p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 md:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Employee Details</h3>
          <View />
        </div>
      </div>
    </div>
  );
}

export default Dasbord
