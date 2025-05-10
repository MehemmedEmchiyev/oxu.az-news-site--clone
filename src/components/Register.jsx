import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../redux/registerSlice'
import { Bounce, toast } from 'react-toastify'
function Register() {  
    const [username , setUserName ] = useState("")
    const [password , setPassword ] = useState("")
    const [gender , setGender ] = useState("male")
    const [fullname , setFullname  ] = useState("")
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const getRegister = async () => {
        const response = await dispatch(register({username,password,gender,fullname}))
        console.log(response);
        
        if(!response.payload.error) {
            navigation("/auth")
            toast.success("Qeydiyyat Uğurla Başa Çatdı!", {
                position: "top-right",
                autoClose: 2000,
                transition: Bounce,
            })
            toast.success("Daxil Ola Bilərsiz!", {
                position: "top-left",
                autoClose: 2000,
                transition: Bounce,        
            })
            setFullname(""),setUserName(""),setGender(""),setPassword("")
        }
        else{    
            toast.error(`${response.payload.message}`, {
                position: "top-right",
                autoClose: 2000,
                transition: Bounce,
            });
        }

        
    }

  return (
    <div>
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Hesab Yaradın</h1>
                <p className="text-sm dark:text-gray-600">Hesabınıza daxil olmaq üçün daxil olun</p>
            </div>
            <div className="space-y-4">
                <div className="space-y-4 ">
                    <div>
                        <label className="block mb-2 text-sm">Istifadəçi Adı</label>
                        <input value={username} onChange={(e) => setUserName(e.target.value)} required="required" type="text" placeholder="john" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Istifadəçi Adı (Tam Şəkildə)</label>
                        <input value={fullname} onChange={(e) => setFullname(e.target.value)} required="required"  type="text" placeholder="John Doe" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm">Şifrə</label>
                        </div>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} required="required" type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Cins</label>
                        </div>
                        <select value={gender || "male"} onChange={(e) => setGender(e.target.value)} required="required" className='w-full bg-white py-2 px-1 rounded-xl'>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button onClick={() => getRegister()} className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Hesab Yarat</button>
                    </div>
                    <p className="px-6 text-sm text-center dark:text-gray-600">Hələ hesabınız yoxdur ?
                        <Link to={"/auth"} className='hover:underline dark:text-violet-600'>
                           Mövcud Hesaba Giriş Edin
                        </Link>
                    </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Register