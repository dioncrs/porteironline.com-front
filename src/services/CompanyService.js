import { db } from "@/plugins/firebase"
import { collection, addDoc } from "firebase/firestore"; 




export const createCompany = async(company) => {
    try {
        const docRef = await addDoc(collection(db, "company"), company);
        return docRef;
      } catch (e) {
        console.error("Error adding document: ", e);
        throw "Ocorreu uma falha ao criar sua empresa.";
      }
    
}