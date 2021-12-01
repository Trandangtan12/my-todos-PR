import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import todoApi from '../api/todoApi'

const AddTodo = ({onAdd, id}) => {
    const history = useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onHandleAdd = async (data) => {
        try {
            await todoApi.add(data).then(todo =>{
                history.push(`/todo/${todo.data.id}`)
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <h3 className="text-xl font-semibold">THÊM TODO</h3>
            <Link to="/" className="text-xs text-blue-500">Quay lại danh sách</Link>
            <div className="mt-4">
                <form action="" onSubmit={handleSubmit(onHandleAdd)}>
                    <div className="grid grid-cols-6 flex items-center">
                        <div className="col-span-5">
                            <input {...register("content", { required: true })} type="text" className="w-full p-2 font-semibold rounded-lg text-xs" name="content" id="" />
                        </div>
                        <div>
                            <button type="submit" className="rounded-md ml-2 items-center px-2 py-1 text-xs text-white bg-blue-500 hover:bg-blue-600">
                                <i className="fas fa-pen"></i> Thêm
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTodo
