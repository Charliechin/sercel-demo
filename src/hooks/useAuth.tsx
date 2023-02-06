import { IAuthContextType } from "@/interfaces/IAuthContextType"
import { useContext } from "react"
import { AuthContext } from "../contexts/Auth"


const useAuth = () => useContext(AuthContext) as IAuthContextType

export default useAuth