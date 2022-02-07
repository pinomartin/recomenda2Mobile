import firestore from '@react-native-firebase/firestore';

const usersCollection = async () => {
  const users = await firestore().collection('Users').get();
  
  return users;
};

export {usersCollection};
