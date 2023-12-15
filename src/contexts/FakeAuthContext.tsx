import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext(undefined)


type initialStateType = {
    user: null,
    isAuthenticated: boolean,
}
const initialState = {
    user: null,
    isAuthenticated: false,
}

type actionType = {
    action:{
        type: string,
        payload?:''
    }
}

// const action:actionType = {
//     type:'',
//     payload:''
// }

const reducer = (state:initialStateType, action:actionType) => {
    switch(action.type){
        case "login":
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
            }
        case "logout":
            return{
                ...state,
                user:null,
                isAuthenticated: false
            }
        default:
            throw new Error ("unknown action")
    }
}


const FAKE_USER = {
    name: "Jack",
    email: "jack@example.com",
    password: "qwerty",
    avatar: "https://i.pravatar.cc/100?u=zz",
};

type AuthProviderType = {
    children: React.ReactNode
}

const AuthProvider = ({children}:AuthProviderType) => {
    const [{user, isAuthenticated}, dispatch] = useReducer(reducer, initialState)

    // type loginType = {
    //     email:'',
    //     password: ''
    // }

    const login = (email:string, password:string) => {
        if (email === FAKE_USER.email && password === FAKE_USER.password) dispatch({type:'login', payload: FAKE_USER})
    }
    const logout = () => {
        dispatch({type:'logout'})
    }
    return(
        <AuthContext.Provider value={{user, isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () =>{
    const context = useContext(AuthContext)
    if (context === undefined)
        throw new Error("AuthContext outside AuthProvider")
    return context
}

export { AuthProvider, useAuth }