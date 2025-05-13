import React from 'react'
import { useContext } from 'react'
import { Apicontext } from '../context/context'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const SingleCard = () => {
    const { id } = useParams();
    console.log(id)
    const { fetchEmpDataById } = useContext(Apicontext) || {};
    const [employee, setEmployee] = useState({});
    const getEmpData = async () => {
        try {
            const data = await fetchEmpDataById(id);
            // console.log(data);
            setEmployee(data.data);
        } 
        catch (error) {
            console.error("Error fetching employee data for ID:", id, error);
        
    }
    }

    useEffect(() => {
        getEmpData();
    }, []);
console.log(employee)
    return (
        <>
            <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-500 to-purple-500 shadow-2xl rounded-lg overflow-hidden transform mt-5">
                <div className="p-6 bg-white rounded-lg">
                    <h5 className="text-2xl font-bold mb-6 text-center text-gray-800">Employee Details</h5>
                    {employee && (
                        <ul className="space-y-4">
                            <li className="text-gray-700 flex justify-between">
                                <span className="font-medium">Name:</span> 
                                <span>{employee.name}</span>
                            </li>
                            <li className="text-gray-700 flex justify-between">
                                <span className="font-medium">Age:</span> 
                                <span>{employee.age}</span>
                            </li>
                            <li className="text-gray-700 flex justify-between">
                                <span className="font-medium">Email:</span> 
                                <span>{employee.email}</span>
                            </li>
                            <li className="text-gray-700 flex justify-between">
                                <span className="font-medium">Designation:</span> 
                                <span>{employee.designation}</span>
                            </li>
                            <li className="text-gray-700 flex justify-between">
                                <span className="font-medium">Department:</span> 
                                <span>{employee.department}</span>
                            </li>
                            <li className="text-gray-700 flex justify-between">
                                <span className="font-medium">Joining Date:</span> 
                                <span>{employee.joiningDate}</span>
                            </li>
                            <li className="text-gray-700 flex justify-between">
                                <span className="font-medium">Salary:</span> 
                                <span>{employee.salary}</span>
                            </li>
                            <li className="text-gray-700 flex justify-between">
                                <span className="font-medium">Address:</span> 
                                <span>{employee.address}</span>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
};


export default SingleCard
