import { useSelector } from "react-redux";


const Sidebar = ()=>{

    const sideBarList=["Home", "You", "Subscriptions","Shorts", "Subscription","Playlist","Your videos", "History","Liked videos","Liked videos","Liked videos","Liked videos","Liked videos","Liked videos","Liked videos","Liked videos"]
    
     const isVisible = useSelector(store=>store.sideBar.isMenuOpen);

     if(!isVisible) return null;

    return (
        <div className="p-2   border-2  h-full">

            
          
           
           <ul className="w-36 p-2 ">
                <li className="hover:bg-slate-300 rounded-md p-2 text-sm">Home</li>
                <li className="hover:bg-slate-300 rounded-md p-2 text-sm">You</li>
                <li className="hover:bg-slate-300 rounded-md p-2 text-sm">Subscriptions</li>

                <h1 className="font-bold mt-5 mb-1">You</h1>
                <li className="hover:bg-slate-300 rounded-md p-2 text-sm">History</li>
                <li className="hover:bg-slate-300 rounded-md p-2 text-sm">Playlist</li>
                <li className="hover:bg-slate-300 rounded-md p-2 text-sm">Your videos</li>
                <li className="hover:bg-slate-300 rounded-md p-2 text-sm">Your courses</li>
                <li className="hover:bg-slate-300 rounded-md p-2 text-sm">Watch later</li>


                <h1 className="font-bold mt-5 mb-1">Subscriptions</h1>
                <li className="hover:bg-slate-300 rounded-md p-2 text-sm">Mr Bean</li>
                <li className="hover:bg-slate-300 rounded-md p-2 text-sm">Mr Bean</li>
                <li className="hover:bg-slate-300 rounded-md p-2 text-sm">Mr Bean</li>
                <li className="hover:bg-slate-300 rounded-md p-2 text-sm">Mr Bean</li>
                <li className="hover:bg-slate-300 rounded-md p-2 text-sm">Mr Bean</li>

                <h1 className="font-bold mt-5 mb-1">Explore</h1>
                <li className="hover:bg-slate-300 rounded-md p-2 text-sm">Trending</li>
                <li className="hover:bg-slate-300 rounded-md p-2 text-sm">Shopping</li> 
                <li className="hover:bg-slate-300 rounded-md p-2 text-sm">Music</li> 
                <li className="hover:bg-slate-300 rounded-md p-2 text-sm">Films</li>    
                <li className="hover:bg-slate-300 rounded-md p-2 text-sm">Live</li> 
                <li className="hover:bg-slate-300 rounded-md p-2 text-sm">Gaming</li> 
                <li className="hover:bg-slate-300 rounded-md p-2 text-sm">News</li> 
                <li className="hover:bg-slate-300 rounded-md p-2 text-sm">Sport</li> 
                
                
               
                
                                                
           </ul>
        </div>
    )
};

export default Sidebar;