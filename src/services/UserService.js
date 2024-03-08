import { auth } from "@/plugins/firebase";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    setPersistence,
    browserLocalPersistence,
    updateProfile
} from "firebase/auth";




export const signIn = async (email, password) => {
    try {
        await setPersistence(auth, browserLocalPersistence).then(() => signInWithEmailAndPassword(auth, email, password));
        return auth.currentUser;
    } catch (e) {
        console.error("Erro ao fazer login: ", e);
        throw e;
    }

}

export const createUser = async (email, password) => {
    try {
        await setPersistence(auth, browserLocalPersistence).then(() => createUserWithEmailAndPassword(auth, email, password));
        return auth.currentUser;
    } catch (e) {
        console.error("Erro ao cadastrar novo usuário: ", e);
        throw e;
    }

}

export const updateUserProfile = async (profile) => {
    try {
        await updateProfile(auth.currentUser, profile);
        return auth.currentUser;
    } catch (e) {
        console.error("Erro ao atualizar perfil do usuário: ", e);
        throw e;
    }
}

export const logoutUser = async () => {
    await signOut(auth);
}

export const errorMessages = {
    "auth/invalid-email": 'O e-mail informado é inválido!',
    "auth/user-not-found": 'Email não encontrado!',
    "auth/weak-password": 'Senha Fraca! A senha deve ter ao menos 6 caracteres!',
    "auth/email-already-in-use": 'Esse e-mail já consta como cadastrado no sistema!',
    "auth/wrong-password": "Senha incorreta!",
    "auth/missing-password": "Senha não informada!"
  }