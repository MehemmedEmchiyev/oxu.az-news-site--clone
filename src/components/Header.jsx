import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import TopBar from './TopBar'
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { changeStatue, setValue } from '../redux/searchSlice';
import HeaderSlider from "./HeaderSlider";

function Header() {

  const navigation = useNavigate()
  const {searchBarStatus} = useSelector(store => store.search)
  const {value} = useSelector(store => store.search)
  const dispatch = useDispatch()
  const setStatue = () => dispatch(changeStatue())  
  const setSearchValue = (arg) => dispatch(setValue(arg))
  window.addEventListener("keydown" , (e) => {
    if(e.key == "Enter" && value.length > 0){
      navigation(`/news/${value}`)
      setSearchValue("")
    }
  })
  


  return (
    <div className='w-full fixed top-0 left-0 z-100 bg-white'>
      <TopBar statue = "destop" />
        <div className='w-full md:w-[90%] mx-auto px-[15px] py-[17px] flex gap-5 items-center justify-between'>
            <div className=''>
              <Link to={"/"}>
                <img src="https://oxu.az/media/img/logo.svg?v=1" alt="" />
              </Link>
            </div>
            <div className={`${searchBarStatus ? "hidden" : "block"}`}>
                <HeaderSlider statue = "desktop" />
            </div>
            <div className={`${searchBarStatus ? "w-full" : ""} flex items-center gap-3 text-2xl`}> 
                <div className={`${searchBarStatus ? "w-full" : ""}`}>
                  <input value={value} onChange={(e) => setSearchValue(e.target.value)} placeholder='Axtarış...'  type="text" className={`italic ${searchBarStatus ? "block" : "hidden"} w-full border-1 outline-0 px-2 py-2 text-[16px] border-[#15838D] rounded-3xl`} />
                </div>
                <IoSearch onClick={setStatue}/>
                <FaBars />
                <FaRegUser onClick={() => navigation('auth')} />
            </div>
        </div>
        <div>
            <HeaderSlider statue="mobile"/>
        </div>
        <TopBar statue="mobile"/>
    </div>
  )
}

export default Header