import axios from "axios";
import { DocumentData, collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";

export const getUserEmailDuplicateCheck = async (email: string) => {
    return await axios.get("/api/user", { params: { email: email } });
}