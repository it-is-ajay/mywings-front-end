import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({children}){
    const {token} = useSelector(state=>state.user);
    if(!token){
        return <Navigate to="/signin" replace/>
    }
        
        return children;
}
export default ProtectedRoute;