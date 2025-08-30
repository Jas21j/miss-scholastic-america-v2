# Firebase Setup Instructions

To complete the setup of your Miss Scholastic America website's admin system, you need to set up a Firebase project and update the configuration. Here's how:

## 1. Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" and follow the prompts to create a new project
3. Give your project a name like "miss-scholastic-america"

## 2. Enable Authentication

1. In your Firebase project, click "Authentication" in the left sidebar
2. Click "Get started"
3. Enable the "Email/Password" sign-in method
4. Save your changes

## 3. Set Up Cloud Firestore

1. In your Firebase project, click "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in production mode" and select a location close to your target audience
4. Click "Next" and wait for the database to be provisioned

## 4. Set Up Storage

1. In your Firebase project, click "Storage" in the left sidebar
2. Click "Get started"
3. Click through the setup flow, accepting the default settings
4. Wait for Storage to be provisioned

## 5. Get Your Firebase Configuration

1. In your Firebase project, click the gear icon (⚙️) near "Project Overview" and select "Project settings"
2. Scroll down to the "Your apps" section
3. If you don't have a web app set up, click the web icon (</>) to register a new web app
4. Follow the prompts to register your app (you can skip the Firebase Hosting setup)
5. After registering, you'll see a configuration object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

6. Copy this configuration object

## 6. Update Your Application

1. Open the file `src/lib/firebase.js` in your project
2. Replace the placeholder `firebaseConfig` object with the one you copied from Firebase
3. Save the file

## 7. Configure Security Rules

### Firestore Security Rules

In the Firebase Console, go to Firestore > Rules and set the following:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow authenticated users to read all documents
    match /{document=**} {
      allow read: if request.auth != null;
    }
    
    // Allow anyone to create contact form submissions
    match /contacts/{contactId} {
      allow create: if true;
    }
    
    // Allow anyone to create applications
    match /applications/{applicationId} {
      allow create: if true;
    }
  }
}
```

### Storage Security Rules

In the Firebase Console, go to Storage > Rules and set the following:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Allow anyone to upload files but only authenticated users can read
    match /{allPaths=**} {
      allow write: if true;
      allow read: if request.auth != null;
    }
  }
}
```

## 8. Admin Account Setup

The application is configured to automatically create an admin account with the following credentials when it first runs:

- Email: MissscholasticAmerica@gmail.com
- Password: Faith0818$&@"

You can access the admin dashboard at `/admin/login` after launching the application.

## 9. That's It!

Your Firebase backend and admin system should now be fully configured. When you run your application, it will connect to Firebase and you'll be able to:

1. Collect form submissions and store them in Firebase
2. Upload and store applicant files in Firebase Storage
3. Access all submissions and files through the admin dashboard

For any issues, check the browser console for error messages related to Firebase configuration. 