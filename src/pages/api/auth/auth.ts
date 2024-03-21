import { db } from "@/lib/firebase-config";
import { getIndex } from "@/utils/firebase/firebaseDB";
import { DocumentData, collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { UserProps } from "@/models/pages/userProp";

export const loginCredential = async (email: string, password: string) => {
    
    const findUser = await findUserData(email);
    
    return {
        id: findUser.id,
        email: findUser?.email,
        nickname: findUser?.nickname,
        profileImage: findUser?.nickname,
    };
}

export const kakaoLoginCredential = async (id: number) => {
    const findUser = await findUserApiData(id);
    
    if(!findUser.length) {
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

export const findUserData = async (email: string) => {
    const userCollection = collection(db, 'user');
    const userQuery = query(userCollection, where('email', '==', email));
    const querySnapshot = await getDocs(userQuery);
    const users: DocumentData[] = [];
    
    querySnapshot.forEach((doc) => {
        users.push(doc.data());
    });

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