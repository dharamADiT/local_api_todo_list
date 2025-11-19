import React, { useContext, useEffect, useState } from "react";
import { deleteData, getData } from "../api/callingApi";
import { MoonLoader } from "react-spinners";
import { datacontext } from "../context/datacontext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();   // taking navigate for navigating the pages
  const { todo, setTodo } = useContext(datacontext);  //this is my main state for api storing data..

  const [loading, setLoading] = useState(true); 

  // this function for calling data form local api
  const fetchData = async () => {
    try {
      setLoading(true); 
      const res = await getData();
      setTodo(res.data);
      toast.success("Data fetch successfully..");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); 
    }
  };



  // this fuction for i m taking delete todos (delet method)
  const DeleteHandler = async (id) => {
    try {
      const res = await deleteData(id);
      if (res.status === 200) {
        const filterdata = todo.filter((item) => item.id != id);
        toast.error("Oops! You deleted a todo 😢");
        setTodo(filterdata);
      }
    } catch (error) {
      console.log(error);
    }
  };


  // this is i  m crateing for updating data (put method)
  const UpdateHandler = (id) => {
    navigate(`/update/`);

  };

  // useEffect for taking data and run fetchdata funciton..
  useEffect(() => {
    fetchData();
  }, []);

  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 px-2">

    {loading ? (
      <div className="flex justify-center w-full py-20">
        <MoonLoader color="#ffffff" />  
        {/* this loder i am taking from third party pachage  */}
      </div>


    ) : todo && todo.length > 0 ? (
      todo.map((u) => (
        <div className="w-full border p-5 bg-gray-900 rounded-xl shadow-md" key={u.id}>
          <h3 className="text-lg font-semibold">
            Title: <span className="text-blue-300 capitalize">{u.title}</span>
          </h3>

          <p className="text-sm mt-2">
            Body: <span className="text-gray-400">{u.body}</span>
          </p>

          <div className="flex gap-4 mt-4">
            <button  
            //  making fuciton for updating my data 
              className="flex-1 py-2 bg-blue-500 rounded-xl active:scale-105"
              onClick={() => UpdateHandler(u.id)}
            >
              Edit
            </button>

            <button

            // making fuction for delete the data form api and view component
              className="flex-1 py-2 bg-red-500 rounded-xl active:scale-105"
              onClick={() => DeleteHandler(u.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))
    ) : (
      <p className="text-center text-white py-10 text-xl">No Data Found</p>
    )}

  </div>
);

};

export default Home;
