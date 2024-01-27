import { Outlet } from "react-router-dom";
import { SearchBox } from "../components";

export default function RootLayout(){
    return(
        <div>
            <SearchBox/>
            <Outlet/>
        </div>
    )
}