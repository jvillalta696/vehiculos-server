import admin from "firebase-admin";
import { getAuth } from "firebase-admin/auth";
import fs from "fs"

const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));//funcion para parsear la llave 


const serviceAccount = loadJSON("./vehiculos-42293-firebase-adminsdk-c2pwr-fd7f2b2bf1.json");

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export const auth = getAuth(app);
