  import React, { useContext, useState } from "react";
  import { useForm } from "react-hook-form";
  import { toast } from "react-toastify";
  
  import { useNavigate } from "react-router-dom";
  import { postData } from "../api/callingApi";
import { datacontext } from "../context/MainData";



  const CreateUser = () => {
    const { todo, setTodo } = useContext(datacontext);
    //taking my data from context compoent that i have made ..


    const [newPost, setNewPost] = useState(null);

    // use form using for form validation 
    const {
      register,
      reset,
      formState: { errors },
      handleSubmit,
    } = useForm();

    const navigate = useNavigate();



    // creating new data and adding api or view component 
    const CreateHandler = () => {
      toast.success("Todo Created Successfully!");
    };



    // this is single data i got 
    const addPostData = async (data) => {
      try {
        const res = await postData(data);
        console.log("API Response:", res.data);

    
        setNewPost(res.data);

        
        setTodo([...todo, res.data]);
      } catch (error) {
        console.log(error);
        toast.error("Error creating todo!");
      }
    };

  
    const submitHandler = (data) => {
      addPostData(data); 
      reset();
      navigate("/");
      CreateHandler();
    };

    return (
     <div className="flex justify-center items-center py-16 px-4 bg-gray-900">
  <div className="w-full max-w-md bg-gray-800 p-6 rounded-xl shadow-lg">
    
    <h2 className="mb-8 text-2xl text-center font-semibold">Create ToDo</h2>

    <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-6">

      <div>
        <input
          {...register("title", { required: "must be filled input" })}
          className="w-full border-b bg-transparent outline-none py-2"
          type="text"
          placeholder="Enter title..."
        />
        <small className="text-red-500">{errors?.title?.message}</small>
      </div>

      <div>
        <input
          {...register("body", { required: "must be filled input" })}
          className="w-full border-b bg-transparent outline-none py-2"
          type="text"
          placeholder="Enter body..."
        />
        <small className="text-red-500">{errors?.body?.message}</small>
      </div>

      <div className="flex items-center justify-between gap-4">
        <button
          type="submit"
          className="flex-1 py-2 bg-blue-500 rounded-xl active:scale-105"
        >
          Create
        </button>

        <button
          type="button"
          onClick={() => reset()}
          className="flex-1 py-2 bg-gray-600 rounded-xl active:scale-105"
        >
          Reset
        </button>
      </div>
    </form>
  </div>
</div>

    );
  };

  export default CreateUser;
