import React, { useState , useEffect} from 'react'
import { useContext } from 'react'
import { Apicontext } from '../context/context'
import { UserRoundPen, Eye, Trash2 } from "lucide-react"
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import axios from 'axios'
const View = () => {
  const { EmpData } = useContext(Apicontext)
  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/user/${id}`);
      const updatedData = filterapi.filter((employee) => employee.id !== id);
      setfilterapi(updatedData);
      toast.error("Employee data has been deleted");
    } catch (error) {
      
      toast.error("Failed to delete employee");
    }
  };
// filter data

const [filterapi, setfilterapi] = useState();

useEffect(() => {
  setfilterapi(EmpData);
}, [EmpData]);

const filterData = (e) => {
  const filtered = EmpData.filter((emp) => 
    emp.department.toLowerCase() === e.target.value.toLowerCase()
  );
  setfilterapi(filtered);
  console.log(filtered);
};
  return (
    <div>
      {/* seachbar */}
      <div>
        <input type="text" className='border-2 border-gray-300 rounded-md p-2 m-5 w-3xl' placeholder='Search Employee' />
        {/* search by department */}
        <select className='border-2 border-gray-300 rounded  p-2 m-5' defaultValue={""} onChange={filterData}>
          <option value="" disabled>Select Department </option>
          <option value="Human Resources">Human Resources </option>
          <option value="IT">IT </option>
          <option value="Marketing">Marketing </option>
          <option value="Finance">Finance </option>
        </select>

      </div>
      {filterapi && filterapi.map((employee, index) => (
        <div key={index}>

          <div
            style={{

              // border: '1px solid #ccc',
              padding: '20px',
              margin: '20px',
              borderRadius: '5px',
              transition: 'transform 0.2s, box-shadow 0.2s',
boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"

            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            }}
            className='flex justify-between  items-center'
          >
            <div>
              <img src={`https://api.dicebear.com/6.x/initials/svg?seed=${employee.name}${employee.lastName}`} alt="employee pic" className='h-30' />
            </div>
            <div className=''>

              <h3><strong>Name:</strong> {employee.name} {employee.lastName}</h3>
              <p><strong>Disgination:</strong> {employee.designation}</p>
              <p><strong>Age:</strong> {employee.age}</p>
              <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Date of Joining:</strong> {employee.joiningDate}</p>
            </div>
            <div className='mt-3 flex  gap-3 '>
            <Link to={`/viewEmp/${employee.id}`}> <button className=' capitalize'><span ><Eye /></span>view</button></Link> 
             <Link to={`/editEmp/${employee.id}`}> <button className=' capitalize'><span ><UserRoundPen /></span>edit</button></Link>
              <button className=' capitalize' onClick={() => deleteEmployee(employee.id)}><span >{<Trash2 />}</span>delete</button>

            </div>
          </div>

        </div>

      ))}
    </div>
  )
}

export default View
