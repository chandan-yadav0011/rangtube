import { useDispatch } from "react-redux";
import { toggle } from "../utils/Slices/SideBarSlice";
const Header = ()=>{



    const dispatch = useDispatch();
     
    const handleToggleMenu=()=>{
        console.log("action done")
   
        dispatch(toggle());
    }


    return (
        <div className="p-2 m-2 flex justify-between shadow-lg">
            <div className="flex ">
                <img 
                    alt="menu"
                    onClick={()=>handleToggleMenu()}
                    className="cursor-pointer h-8" src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"/>
                
                <img 
                    alt="play button"
                    className="h-8 pl-5" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg"></img>

                <h2 className=" text-3xl font-serif font-semibold">RangTube</h2>
            </div>
            <div className="w-full ml-64 ">
                <input
                    type="text"
                    placeholder="  Search"
                    className="border w-1/2 p-2 rounded-l-3xl"
                />
                <button className="border  p-2   rounded-r-3xl bg-gray-300 w-14">🔍</button>
            </div>

            <div className="flex">
               <img 
                    alt="bell-icon"
                    className="h-8 mr-5"
                    src="https://static.vecteezy.com/system/resources/thumbnails/001/505/138/small/notification-bell-icon-free-vector.jpg"/>


                <img
                    alt="user profile"
                    className=" h-8 mr-10" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>

            </div>
        </div>
    );
}

export default Header;