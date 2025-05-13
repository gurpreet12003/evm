import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import axios from 'axios';
const AddEmp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const notifySuccess = () => {
    toast.success("Employee added successfully!")
    
  };
  
  const onSubmit = (data) => {
    console.log(data)
    notifySuccess();
    const res=axios.post("http://localhost:3000/user",data)
    if(isSubmitSuccessful){
    reset({
     name: "",
     lastName: "",
     email: "",
     phone: "",
     address: "",
     age: "",
     joiningDate: "",
     salary: "",
     designation: "",
     department: ""
    });
    }
  
  }
  
  return (
    <>
      <div className="max-w-3xl mx-auto p-6 shadow-md rounded-lg mt-5 w-[100%] bg-white-700">
        <h1 className="text-2xl font-bold text-center mb-6">Add New Employee</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name:</label>
            <input
              {...register("name", { required: "This field is required", maxLength: { value: 20, message: "Maximum length is 20" }, minLength: { value: 5, message: "Minimum length is 5" } })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name:</label>
            <input
              {...register("lastName", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.lastName && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address:</label>
            <input
              type="email"
              {...register("email", { required: "This field is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone:</label>
            <input
              type="tel"
              {...register("phone", { required: "This field is required", pattern: { value: /^[0-9]{10}$/, message: "Invalid phone number" } })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address:</label>
            <textarea
              {...register("address", { required: "This field is required" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.address && <span className="text-red-500 text-sm">{errors.address.message}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Age:</label>
            <input
              type="number"
              {...register("age", { required: "This field is required", min: { value: 18, message: "Minimum age is 18" }, max: { value: 65, message: "Maximum age is 65" } })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.age && <span className="text-red-500 text-sm">{errors.age.message}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Joining:</label>
            <input
              type="date"
              {...register("joiningDate", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.dateOfJoin && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Salary:</label>
            <input
              type="number"
              {...register("salary", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 appearance-none"
            />
            {errors.salary && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Designation:</label>
            <input
              {...register("designation", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.designation && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Department:</label>
            <select
              {...register("department", { required: true })}
              defaultValue=""
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option value="" disabled> Select Department</option>
              <option value="HR">HR</option>
              <option value="Engineering">Engineering</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
              <option value="Sales">IT</option>
            </select>
            {errors.department && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Employee
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};


export default AddEmp
