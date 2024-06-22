import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UpdateUserAsync, selectUserInfo } from "../userSlice";
import { useForm } from "react-hook-form";

export default function UserProfile() {
  
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo); 
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(-1);
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    
    formState: { errors },
  } = useForm();

  const handleEdit=(addressUpdate,index)=>{
    //edit user profileUpdateUserAsync({...user,addresses:[...user.addresses,data]})
    const newuser={...user,addresses:[...user.addresses]};
    newuser.addresses.splice(index,1,addressUpdate);
    dispatch(UpdateUserAsync(newuser));
    setSelectedAddressIndex(-1);
  }
  const handleEditForm=(index)=>{
    setSelectedAddressIndex(index);
    setValue("name", user.addresses[index].name);
    setValue("email", user.addresses[index].email);
    setValue("city", user.addresses[index].city);
    setValue("state", user.addresses[index].state);
    setValue("pinCode", user.addresses[index].pinCode);
    setValue("phone", user.addresses[index].phone);
    setValue("street", user.addresses[index].street);
  }
  const handleRemove=(e,index)=>{
    const newuser={...user,addresses:[...user.addresses]};
    newuser.addresses.splice(index,1);
    dispatch(UpdateUserAsync(newuser));
  }
  const handleAdd=(data)=>{
    const newuser={...user,addresses:[...user.addresses,data]};
    dispatch(UpdateUserAsync(newuser));
    setShowAddAddressForm(false);
  }


  return <>
     <div>
        <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6 ">
            <h1 className="text-4xl my-5 font-bold tacking-tight text-gray-900">
               Name : {user.name ? user.name : "No name found"  } 
            </h1>
            <h1 className="text-xl my-5 font-bold tacking-tight text-red-900">
               Email Address : {user.email ? user.email : "No email address found"}
            </h1>
            
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <button
                onClick={(e)=>{setShowAddAddressForm(true);setSelectedAddressIndex(-1)}}
                type="submit"                
                className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add New Address
              </button>
              {showAddAddressForm ?  
                <form className="bg-white px-5 py-12 mt-12 "  onSubmit={handleSubmit((data)=>{
            
            handleAdd(data)
            console.log(data);
            reset();
          })}
         
          noValidate
          
         >
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Full name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register('name',{required:"name is required"})}
                      id="name"
                      

                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

               
                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      {...register('email',{required:"email is required"})}
                      type="email"
                     
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      {...register('phone',{required:"phone number is required"})}
                      type="phone"
                     
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="street"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register('street',{required:"street is required"})}
                      id="street"
                     
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register('city',{required:"city is required"})}
                      id="city"
                     
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register('state',{required:"state is required"})}
                      id="state"
                     
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="pinCode"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register('pinCode',{required:"pinCode is required"})}
                      id="pinCode"
                     
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
            
             
              <button
                type="submit"                
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add  Address
              </button>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                 Addresses
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Choose from existing addresses
              </p>
              <div className="mt-10 space-y-10">
               
              </div>
            </div>
          </div>
                </form>:null}
            <p className="mt-0.5 text-sm text-gray-500">
              Your Addresses :
            </p>
            {user.addresses.map((address,index) => {
              <div>
                {selectedAddressIndex===index ?  
                <form className="bg-white px-5 py-12 mt-12 "  onSubmit={handleSubmit((data)=>{
            
            handleEdit(data,index)
            console.log(data);
            reset();
          })}
         
          noValidate
          
         >
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Full name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register('name',{required:"name is required"})}
                      id="name"
                      

                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

               
                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      {...register('email',{required:"email is required"})}
                      type="email"
                     
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      {...register('phone',{required:"phone number is required"})}
                      type="phone"
                     
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="street"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register('street',{required:"street is required"})}
                      id="street"
                     
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register('city',{required:"city is required"})}
                      id="city"
                     
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register('state',{required:"state is required"})}
                      id="state"
                     
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="pinCode"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register('pinCode',{required:"pinCode is required"})}
                      id="pinCode"
                     
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
                onClick={e=>setSelectedAddressIndex(-1)}
                type="submit"                
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-gray shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Cancel
              </button>
             
              <button
                type="submit"                
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Edit Address
              </button>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                 Addresses
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Choose from existing addresses
              </p>
              <ul role="list">
                {user?.addresses?.map((address,index) => (
                  <li
                    key={address.index}
                    className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200"
                  >
                    <div className="flex min-w-0 gap-x-4">
                      
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          {address.name}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {address.street}
                        </p>
                      </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">
                        Phone : {address.phone}
                      </p>
                      <p className="text-sm leading-6 text-gray-900">
                        {address.pinCode}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 space-y-10">
               
              </div>
            </div>
          </div>
                </form>:null}
                
               <div

               className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200"
             >
               <div className="flex min-w-0 gap-x-4">
                 
                 <div className="min-w-0 flex-auto">
                   <p className="text-sm font-semibold leading-6 text-gray-900">
                     {address.name}
                   </p>
                   <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                     {address.street}
                   </p>
                 </div>
               </div>
               <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                 <p className="text-sm leading-6 text-gray-900">
                   Phone : {address.phone}
                 </p>
                 <p className="text-sm leading-6 text-gray-900">
                   {address.pinCode}
                 </p>
               </div>
               <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
               <button
                            onClick={(e) => handleEditForm(index)}
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Edit
                          </button>
                          <button
                            onClick={(e) => handleRemove(e, index)}
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
               </div>
             </div>
             </div>
            })}
           
          </div>
        </div>
      </div>
      </>
 }