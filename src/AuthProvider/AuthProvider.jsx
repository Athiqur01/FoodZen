import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading, setLoading]=useState(true)
    const [loggedUser, setLoggedUser]=useState(null)
    const [foods,setFoods]=useState(null)
    const [userLocalStorage,setUserLocalStorage]=useState(null)
    

    console.log('logged user',loggedUser)

    const googleProvider = new GoogleAuthProvider();
   
    
    const createGoogleUser=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
        
    


    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword (auth,email,password)
    }

    useEffect(()=>{
      const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log('current user',currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const logOut=()=>{
        return signOut(auth)
    }

    


    const userInfo={createUser, user, setUser,loading,setLoading,logInUser,logOut,loggedUser, setLoggedUser,foods,setFoods,createGoogleUser}

    return (
        <AuthContext.Provider value={userInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;