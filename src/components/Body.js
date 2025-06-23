import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const Body=()=>{
    return (
        <div className="flex">
            <Sidebar/>
            <MainContainer className=""/>
        </div>
    );
}

export default Body;