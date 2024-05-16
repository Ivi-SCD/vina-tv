import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';
import {PROJECT_ID, DB_ID, USER_COLLECTION_ID, MOVIE_COLLECTION_ID, STORAGE_ID} from 'react-native-dotenv'

export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "br.com.ip.vinatv",
    projectId: {PROJECT_ID},
    databaseId: {DB_ID},
    userCollectionId: {USER_COLLECTION_ID},
    movieCollectionId: {MOVIE_COLLECTION_ID},  
    storageId: {STORAGE_ID}
}; 

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform)
;

const databases = new Databases(client);
const account = new Account(client);
const avatars = new Avatars(client);

export const createUser = async (email, password, nome, cep, cidade, bairro, rua, numero, complemento) => {
    try {
        const newAcc = await account.create(
            ID.unique(),
            email,
            password,
            nome
        )

        if (!newAcc) throw Error;

        const avatarUrl = avatars.getInitials(nome)

        await logar(email, password)

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {       
                conta_id: newAcc.$id,
                nome,
                avatar: avatarUrl,
                email,
                cep,
                cidade,
                rua,
                bairro,
                numero,
                complemento
            }
        )

        return newUser
    } catch(error) {
        console.log(error)
        throw new Error(error);
    }
}

export const logar = async (email, senha) => {
    try {
        const session = await account.createEmailPasswordSession(email, senha)

        return session;
    } catch (error) {
        throw new Error(error)
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get()

        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal('conta_id', currentAccount.$id)]     
        )

        if (!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error)
    }
}