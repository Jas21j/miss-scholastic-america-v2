// Mock Firebase file for demonstration purposes
// This is a placeholder file to resolve imports without actual Firebase dependencies

// When you set up your actual Firebase project, replace this file with the real Firebase configuration

// Mock Auth
export const auth = {
  currentUser: null,
  onAuthStateChanged: (callback) => {
    callback(null);
    return () => {};
  },
  signInWithEmailAndPassword: (email, password) => {
    if (email === 'MissscholasticAmerica@gmail.com' && password === 'Faith0818$&@"') {
      return Promise.resolve({ user: { email } });
    }
    return Promise.reject(new Error('Invalid email or password'));
  },
  signOut: () => Promise.resolve(),
};

// Mock Firestore
export const db = {
  collection: () => ({
    add: (data) => Promise.resolve({ id: 'mock-id' }),
  }),
};

// Mock Storage
export const storage = {
  ref: (path) => ({
    put: (file) => Promise.resolve({ ref: { getDownloadURL: () => Promise.resolve('mock-url') } }),
  }),
};

export default { auth, db, storage }; 