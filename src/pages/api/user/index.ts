import { NextApiRequest, NextApiResponse } from "next";
import nextConnect  from "next-connect";
import { db } from "@/lib/firebase-config";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getIndex } from "@/utils/firebase/firebaseDB";
import { UserProps } from "@/models/pages/userProp";


const connect = nextConnect<NextApiRequest, NextApiResponse>();

connect.get(async (req, res) => {
    const email = req.query.email;
    const data = query(collection(db, "user"), where("email", "==", email));
    const user = await getDocs(data);
    
    if (user.size > 0) {
        return res.json(false);
    }
    
    return res.json(true);
});

connect.post(async (req, res) => {
    const idx = await getIndex("user");
    const data = req.body;
    const user: UserProps = {
        id: idx,
        email: data.email,
        password: data.password,
        nickname: data.nickname,
        profileImage: data.profileImage,
    }
    await setDoc(doc(db, "user", String(user.id)), user);

    return res.json(false);
});



export default connect;