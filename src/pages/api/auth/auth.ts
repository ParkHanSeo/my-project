import { db } from "@/lib/firebase-config";
import { getIndex } from "@/utils/firebase/firebaseDB";
import { DocumentData, collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { UserProps } from "@/models/pages/userProp";

export const loginCredential = async (email: string, password: string) => {
    
    const findUser = await findUserData(email, password);
    
    return {
        id: findUser?.id,
        email: findUser?.email,
        nickname: findUser?.nickname,
        profileImage: findUser?.nickname,
    };
}

export const kakaoLoginCredential = async (id: number) => {
    const findUser = await findUserApiData(id);
    
    if(!findUser.id) {
        const idx = await getIndex("user");
        const user: UserProps = {
            id: idx,
            email: "",
            password: "",
            nickname: "",
            profileImage: "",
            api_id: id
        }
        await setDoc(doc(db, "user", String(user.id)), user);
        return user;
    }
    return findUser;
}

export const findUserData = async (email: string, password: string) => {
    const userCollection = collection(db, 'user');
    const userQuery = query(userCollection, where('email', '==', email));
    const querySnapshot = await getDocs(userQuery);
    const users: DocumentData[] = [];
    
    querySnapshot.forEach((doc) => {
        users.push(doc.data());
    });

    if(users.length === 0) {
        console.error("404", "이메일 ERROR");
        return;
    }

    if(users[0].password !== password) {
        console.error("404", "패스워드 ERROR");
        return;
    }

    return users[0];
};

export const findUserApiData = async (id: number) => {
    const userCollection = collection(db, 'user');
    const userQuery = query(userCollection, where('api_id', '==', id));
    const querySnapshot = await getDocs(userQuery);
    const users: DocumentData[] = [];

    querySnapshot.forEach((doc) => {
        users.push(doc.data());
    });

    return users[0];
};