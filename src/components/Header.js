import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../utils/Slices/SideBarSlice";
import { useEffect, useState } from "react";
import { SEARCH_SUGGESTION_API } from "../utils/contants";
import { addToCache } from "../utils/Slices/SearchSlice";


const Header = ()=>{


    //Debouncing code for searchbar
    const[searchParams, setSearchParams]= useState("");
    const[searchResult, setSearchResult]= useState([]);
    const[showSuggestions, setShowSuggestions]= useState(true);

    const cacheList = useSelector(store=>store.search);

    useEffect(()=>{

        const timer= setTimeout(()=>{
            if(cacheList[searchParams])
            {
                setSearchParams(searchParams);
            }
            else
            {
                getSearchData();
            }
        },200);

        return ()=>{
            clearTimeout(timer);
        }

    },[searchParams]);

    

    const dispatch = useDispatch();

    const handleCache=(searchParams)=>{
      
    }
    
    const handleToggleMenu=()=>{
        dispatch(toggle());
    }

    const getSearchData=async()=>{
  
      
        const data = await fetch(SEARCH_SUGGESTION_API+searchParams);
        const jsonData= await data.json();

        console.log("API call made:  "+searchParams);
        setSearchResult(jsonData[1]);


        //update cache
        dispatch(addToCache({
            [searchParams]:jsonData[1]
        })
    );
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
                <div>
                    <input
                        type="text"
                        placeholder="  Search"
                        className="border w-1/2 p-2 rounded-l-3xl"
                        value={searchParams}
                        onChange={e=>setSearchParams(e.target.value)}
                        onFocus={()=>setShowSuggestions(true)}
                        onBlur={()=>setShowSuggestions(false)}
                    
                    />
                    <button className="border  p-2   rounded-r-3xl bg-gray-300 w-14">🔍</button>
                </div>

                {showSuggestions && <div className="fixed bg-white shadow-lg rounded-xl w-[563px] ">
                    <ul>
                        {
                            searchResult.map((item,indx)=>{
                                return <li className="m-1 p-1 hover:bg-slate-100 rounded-lg" key={indx}>🔍  {item}</li>
                            })  
                        }
                    </ul>
                </div>}
                
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