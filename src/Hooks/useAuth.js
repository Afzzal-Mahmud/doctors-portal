import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

function useAuth() {
    useContext(AuthContext)
}
export default useAuth