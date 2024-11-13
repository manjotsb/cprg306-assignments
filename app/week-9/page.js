'use client';
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; 
import { FirebaseError } from "firebase/app";



export default function LandingPage(){
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const router = useRouter();

    const handleSignin = async () => {
        try { 
            // Sign in to Firebase with GitHub authentication
            await gitHubSignIn();
        }

        catch(error) {
            console.error("Sign in Failed", error.message);
        }
    };

    const handleSignOut = async () =>
    {
        try {
            // Sign out of Firebase
            await firebaseSignOut();
        }
        catch(error) {
            console.error("Sign Out Failed", error.message);
        }
    };

    useEffect(() => {
        if(user) {
            router.push("./week-9/shopping-list");
        }
    }, [user, router]);

    return (
        <div>
            <h1 className="text-4xl font-bold">Shopping List App</h1>
            {!user ? (
                <button onClick={handleSignin}>
                    Sign In with Github
                </button>
            ): (
                <div>
                    <p>Welcome, {user.displayName} ({user.email})</p>
                    <button onClick={handleSignOut}>
                        Sign Out
                    </button>
                    <button onClick={() => router.push("./week-9/shopping-list")}>
                        Go to Shopping
                    </button>
                </div>
            )}
        </div>
    );
}


 
// // Sign in to Firebase with GitHub authentication
// await gitHubSignIn();
 
// // Sign out of Firebase
// await firebaseSignOut();
 
// // Display some of the user's information
// <p>
//   Welcome, {user.displayName} ({user.email})
// </p>;