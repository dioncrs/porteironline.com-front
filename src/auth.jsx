import { auth } from "./plugins/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, setPersistence, browserLocalPersistence } from "firebase/auth";

export const authProvider = {
    isAuthenticated: false,
    user: null,

    async signin(email, password) {
        const response = await setPersistence(auth, browserLocalPersistence)
        .then(() => signInWithEmailAndPassword(auth, email, password))
        authProvider.isAuthenticated = true;
        authProvider.user = {
            displayName: response.user.displayName,
            email: response.user.email,
            accessToken: response.user.accessToken,
        }
    },
    async signup(email, password){
        const response = await createUserWithEmailAndPassword(auth, email, password)
        authProvider.isAuthenticated = true;
        authProvider.user = {
            displayName: response.user.displayName,
            email: response.user.email,
            accessToken: response.user.accessToken,
        }
    },
    async signout() {
        await signOut(auth);
        authProvider.isAuthenticated = false;
        authProvider.user = null;
    },
}