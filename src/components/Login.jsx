import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { store } from '../redux/store'
import { getUser, login } from '../redux/loginSlice'
import { toast } from 'react-toastify';
import { Bounce } from 'react-toastify'
function Login() {
    const navigation = useNavigate()
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const [token, setToken] = useState(localStorage.getItem("token"))

    useEffect(() => {
        if(token) navigation('user')
    },[])
    
    
    const getLogin = async () => {
        const response = await dispatch(login({ username, password }))
        const token = localStorage.getItem("token")
        console.log(response);
        if(response.payload.error) {
            toast.error(response.payload.message, {
                position: "top-right",
                autoClose: 2000,
                transition: Bounce,
            });
            setUserName("")
            setPassword("")
        }
        await dispatch(getUser({username,password}))
        
        if (token) {
            toast.success("Uğurla daxil oldunuz!", {
                position: "top-right",
                autoClose: 2000,
                transition: Bounce,
            })
            navigation("/")
        } else {
            toast.error("Daxil olarkən xəta baş verdi!", {
                position: "top-right",
                autoClose: 2000,
                transition: Bounce,
            });
            setUserName("")
            setPassword("")
        }
    }
    return (
        <div>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Daxil Olun</h1>
                    <p className="text-sm dark:text-gray-600">Hesabınıza daxil olmaq üçün daxil olun</p>
                </div>
                <div className="space-y-4">
                    <div className="space-y-4 ">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Istifadəçi Adı</label>
                            <input value={username} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="John Doe" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Şifrə</label>
                            </div>
                            <input type="password" placeholder='*****' value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button onClick={() => getLogin()} className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-600">Hələ hesabınız yoxdur ?
                            <Link to={"/auth/register"} className='hover:underline dark:text-violet-600'>
                                Qeydiyyatdan keçin
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login