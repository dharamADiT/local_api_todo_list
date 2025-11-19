import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { dataContext } from '../context/MainData';

const UpdateUser = () => {
 const {todo, setTodo }= useContext(dataContext)
const params=useParams()

const datatodo = todo.find((item)=> params.id ==  item.id)
console.log("this is from updata file",datatodo)
console.log(params.id)


  // useForm i using for form validation for better intraciton 
   const {
        register,
        reset,
        formState: { errors },
        handleSubmit,
      } = useForm({
  defaultValues: {
    title: '',
    body: ''
  }
});


const submitHandler = (data) => {
      addPostData(data); 
      reset();
      navigate("/");
      CreateHandler();
    };
      
   
  return ( datatodo  ? (<div className="flex justify-center items-center py-16 px-4 bg-gray-900">
      
  <div className="w-full max-w-md p-6 rounded-xl shadow-lg">
    
    <h2 className="mb-8 text-2xl text-center font-semibold">Update  ToDo</h2>

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
          className="flex-1 py-2 bg-blue-500 cursor-pointer rounded-xl active:scale-105"
        >
          Update
        </button>

      </div>
    </form>
  </div>
</div>): <p>Hello dharam </p>
    
  )
}

export default UpdateUser