import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';
import todoApi from '../api/todoApi';
import { isAuthenticated, onSignOut } from '../api/userApi';

const DetailTodo = ({ onRemove, onUpdate }) => {
    const [todo, setTodo] = useState([]);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { id } = useParams();
    const history = useHistory("")
    useEffect(() => {
        const fetchTodo = async () => {
            try {
                const { data: items } = await todoApi.getId(id);
                setTodo(items);
                reset(items)
                console.log("detail", items);
            } catch (error) {
                console.log(error);
            }
        }
        fetchTodo();
    }, [])
    const onHandleRemove = (id) => {
        if (window.confirm("Bạn có chắc muốn xóa?")) {
            onRemove(id)
            history.push("/")
        }
    }
    const onHandleUpdate = (data) => {
        onUpdate(data, id)
    }
    const user = isAuthenticated()
    const [show, setshow] = useState(false);
    return (
        <div>
            <h3 className="text-xl font-semibold">CHI TIẾT</h3>
            <Link to="/" className="text-xs text-blue-500">Quay lại danh sách</Link>
            <div className="mt-4">
                <form action="" onSubmit={handleSubmit(onHandleUpdate)}>
                    <div className="grid grid-cols-6 flex items-center">
                        <div className="col-span-5">
                            {show ? <input {...register("content", { required: true })} type="text" className="w-full p-2 font-semibold rounded-lg text-xs" defaultValue={todo.content} name="content" id="" /> : <div className="font-semibold text-xs">{todo.content}</div>}
                        </div>
                        <div>
                            {show ?  <button type="submit" className="rounded-md ml-2 items-center px-2 py-1 text-xs text-white bg-blue-500 hover:bg-blue-600">
                                <i class="fas fa-pen"></i> Sửa
                            </button> : <button onClick={() => setshow(true)} className="rounded-md ml-2 items-center px-2 py-1 text-xs text-white bg-blue-500 hover:bg-blue-600">
                                <i className="fas fa-pen"></i> Sửa
                            </button>}

                            <button onClick={() => onHandleRemove(todo.id)} className="rounded-md ml-2 items-center px-2 py-1 text-xs text-white bg-red-500 hover:bg-red-600">
                                <i class="far fa-trash-alt"></i> Xóa
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DetailTodo
