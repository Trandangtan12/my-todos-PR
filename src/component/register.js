import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { onSignUp } from '../api/userApi';

const Register = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const onHandleSubmit = (data, e) => {
      console.log("Thông tin đăng kí",data);
      onSignUp(data).then((dataInput)=>{
          if(dataInput.error){
             setError(dataInput.error);
          }else{
              e.target.reset();
              setError("");
              setSuccess(true)
          }
      })

    } 
    return (
        
          <div className="p-8 rounded-lg max-w-6xl pb-10">
            <div className="text-center text-xl">ĐĂNG KÝ</div>
              <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
            {/* <div className="flex justify-center mb-4"> <img src="https://i.imgur.com/f6Tb5U1.png" width={70} /> </div> */}
            <div style={{display: error ? "block" : "none"}} className="h-12  mt-3 rounded w-full border p-3">{error}</div>
            <div style={{display: success ? "block" : "none"}} className="h-12  mt-3 rounded w-full border p-3">Bạn đã đăng kí thành công</div>
             <input type="text" className="h-12  mt-3 rounded w-full border px-3 focus:text-black focus:border-blue-100" placeholder="Username" {...register("username", {pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i} ) }/> 
             {errors.username && (
                <p className="w-full h-12 break-words text-red-500">
          *Username Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường và một số
          </p>
        )}
             <input type="password" className="h-12 mt-3 rounded w-full border px-3 focus:text-black focus:border-blue-100" placeholder="Password" {...register("password", {pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i})}/>
             {errors.password && (
                <p className="w-full h-12 break-words text-red-500">
          *Password Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường và một số
          </p>
        )}
            <div className="flex justify-end items-center mt-2"> <a href="#" className="text-gray-400 hover:text-gray-600">Forgot password?</a> </div> <button className="uppercase h-12 mt-3 text-white w-full rounded bg-red-700 hover:bg-red-800">Sign Up</button>
            </form>
          </div>
      
      
    )
}

export default Register
