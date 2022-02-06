import {Route, Routes} from "react-router"
import Contracts from "./pages/Contracts";
import PreviewContract from "./pages/PreviewContract";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Contracts/>}/>
            <Route path="/:contractId" element={<PreviewContract/>}/>
        </Routes>
    )
}

export default AppRouter