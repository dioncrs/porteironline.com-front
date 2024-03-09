import { auth } from "@/plugins/firebase";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    setPersistence,
    browserLocalPersistence,
    updateProfile,
    onAuthStateChanged
} from "firebase/auth";
import handleError from "@/utils/raiseError";

export const signIn = async (email, password) => {
    try {
        await setPersistence(auth, browserLocalPersistence).then(() => signInWithEmailAndPassword(auth, email, password));
        return auth.currentUser;
    } catch (e) {
        console.error("Erro ao fazer login: ", e);
        throw handleError(e);
    }
}

export const createUser = async (email, password) => {
    try {
        await setPersistence(auth, browserLocalPersistence).then(() => createUserWithEmailAndPassword(auth, email, password));
        return auth.currentUser;
    } catch (e) {
        console.error("Erro ao cadastrar novo usuário: ", e);
        throw handleError(e);
    }
}

export const updateUserProfile = async (profile) => {
    try {
        await updateProfile(auth.currentUser, profile);
        return auth.currentUser;
    } catch (e) {
        console.error("Erro ao atualizar perfil do usuário: ", e);
        throw handleError(e);
    }
}

export const checkUser = async () =>{
    console.log('Check User');
    return auth.onAuthStateChanged((user) => {
        console.log(user)
          return user;
      });
}

export const logoutUser = async () => {
    try {
        await signOut(auth);        
    } catch (error) {
        console.error("Erro ao fazer logout do usuário: ", e);
        throw handleError(e);
    }
}