import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { authenticate, onSignIn } from '../api/userApi';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory()
  const onHandleSubmit = (data, e) => {
    console.log("Thông tin đăng nhập", data);
    onSignIn(data).then((dataUser) => {
      if (dataUser.message) {
        setError(dataUser.message);
        setLoading(false);
      }
      else {
        authenticate(dataUser, () => {
          window.location.href = "/";
        })
      }
    })

  }
  return (
    <div className="p-8 rounded-lg max-w-6xl pb-10">
      <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="flex justify-center mb-4 uppercase "> Đăng nhập </div>
        <div style={{ display: error ? "block" : "none" }} className="h-12  mt-3 rounded w-full border p-3">{error}</div>
        {loading && (<div className="h-12  mt-3 rounded w-full border p-3">Loadning...</div>)}
        <input type="text" className="h-12  mt-3 rounded w-full border px-3 focus:text-black focus:border-blue-100" placeholder="Username" {...register("username")} />
        <input type="password" className="h-12 mt-3 rounded w-full border px-3 focus:text-black focus:border-blue-100" placeholder="Password" {...register("password")} />
        <div className="flex justify-end items-center mt-2"> <p className="text-gray-400 ">Bạn chưa có tài khoản? Hãy <Link className="hover:text-blue-600 underline text-blue-400" to="/register">đăng ký!</Link> </p> </div> <button className="uppercase h-12 mt-3 text-white w-full rounded bg-red-700 hover:bg-red-800">Đăng nhập</button>
      </form>
    </div>
  )
}

export default Login
