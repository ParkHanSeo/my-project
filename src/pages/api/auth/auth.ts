import { db } from "@/lib/firebase-config";
import { DocumentData, collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";

export const loginCredential = async (email: string, password: string) => {
    // const qeury = query(collection(db, "user"), where("email", "==", "gkstj8300@naver.com"));
    const qeury = doc(db, 'user', email);
    const findUsers = await getDoc(qeury);
    const userData = findUsers.data();

    return {
        id: userData!.id,
        email: userData!.email,
        nickname: userData!.nickname,
    };
}