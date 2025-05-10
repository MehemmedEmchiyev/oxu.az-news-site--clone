import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';

function User() {
	const dispatch = useDispatch()
	const navigation = useNavigate()
	const user = JSON.parse(localStorage.getItem("user")) || useSelector(store => store.login.user)
	let token = localStorage.getItem("token")
	if(token) {localStorage.setItem("user",JSON.stringify(user))}
	const logout = () => {
		localStorage.clear()
		toast.success("Uğurla çıxış etdiniz", {
			position: "top-right",
			autoClose: 2000,
			transition: Bounce,
		})
		navigation('/')
	}
  return (
    <div>
		
        <div className="dark:bg-gray-100 py-10 dark:text-gray-900">
	<div className="container grid grid-cols-12 mx-auto dark:bg-gray-50">
		<div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">

			<h1 className="text-3xl font-semibold">{user.fullName}</h1>
			<p className="flex-1 text-2xl pt-2">{user.username}</p>
			<p className="flex-1 pt-2">{user.gender}</p>
			<p rel=" noopener noreferrer" href="#" className="cursor-pointer inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-600">
				<span onClick={() => logout()}>Çıxış Edin</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
					<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</p>
			<div className="flex items-center justify-between pt-2">
				<div className="flex space-x-2">
				</div>
			</div>
		</div>
	</div>
</div>
    </div>
  )
}

export default User