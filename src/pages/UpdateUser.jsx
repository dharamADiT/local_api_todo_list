import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { dataContext } from '../context/MainData';
import { putData } from '../api/callingApi';

const UpdateUser = () => {
  const { todo, setTodo } = useContext(dataContext);
  const params = useParams();
  const navigate = useNavigate();

  const datatodo = todo.find((item) => item.id == params.id);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  
  useEffect(() => {
    if (datatodo) {
      reset({
        title: datatodo.title,
        body: datatodo.body
      });
    }
  }, [datatodo, reset]);

  const submitHandler = async (data) => {

    
    await putData(params.id, data);

    
    const updatedTodos = todo.map((item) =>
      item.id == params.id ? { ...item, ...data } : item
    );

    setTodo(updatedTodos); 

    
    navigate("/");
  };

  return (
    datatodo ? (
      <div className="flex justify-center py-16">
        <div className="w-full max-w-md bg-gray-900 p-6 rounded-xl">

          <h2 className="text-2xl text-center font-semibold">Update ToDo</h2>

          <form onSubmit={handleSubmit(submitHandler)} className="mt-6 flex flex-col gap-6">

            <input
              {...register("title", { required: "must be filled input" })}
              className="border-b bg-transparent outline-none py-2"
              type="text"
              placeholder="Enter title..."
            />
            <small className="text-red-500">{errors?.title?.message}</small>

            <input
              {...register("body", { required: "must be filled input" })}
              className="border-b bg-transparent outline-none py-2"
              type="text"
              placeholder="Enter body..."
            />
            <small className="text-red-500">{errors?.body?.message}</small>

            <button
              type="submit"
              className="py-2 bg-blue-500 rounded-xl"
            >
              Update
            </button>

          </form>
        </div>
      </div>
    ) : <p>Loading...</p>
  );
};

export default UpdateUser;
