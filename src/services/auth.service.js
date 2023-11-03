import { auth } from "../data/firebase.js";

export const getUserByEmail = async(email) => {
  try {
    const userRecord = await auth.getUserByEmail(email);
    console.log(`Successfully fetched user data: ${userRecord.uid}`);
    return userRecord;
  } catch (error) {
    console.log('Error get User:', error);
    throw error
  }
};

export const createUser = async(user)=>{    
  
  try {
    const userRecord = await auth.createUser(user);
    console.log('Successfully created new user:', userRecord.uid);
    return userRecord
  } catch (error) {
    console.log('Error creating new user:', error);
    throw error;
  }
};

export const deleteUser = async(uid)=>{
  try {   
  await auth.deleteUser(uid)  
    console.log('Successfully deleted user');
    return uid;  
  } catch (error) {
    console.log('Error deleting user:', error);
  }
}

export const getAllUsers = async()=>{
  try {
    let listUsers = []
    const listAllUsers = async(nextPageToken) => {
      // List batch of users, 1000 at a time.
       await auth
        .listUsers(1000, nextPageToken)
        .then((listUsersResult) => {
          listUsers = [...listUsers,listUsersResult.users].flat();
          if (listUsersResult.pageToken) {
            // List next batch of users.
            listAllUsers(listUsersResult.pageToken);
          }
        })
        .catch((error) => {
          console.log('Error listing users:', error);
        });
    };
    // Start listing users from the beginning, 1000 at a time.
    await listAllUsers();
    return listUsers
  } catch (error) {
    throw error;
  }
}