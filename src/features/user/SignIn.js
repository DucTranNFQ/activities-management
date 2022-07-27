import React, { useEffect } from "react";
import { Button } from "antd";
import { GoogleOutlined, FacebookFilled } from "@ant-design/icons";
import { auth, googleProvider, facebookProvider } from "../../firebase/config";
import { signInWithPopup } from "firebase/auth";

export default function SignIn() {
  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => console.log(result));
  };

  const handleSignInWithFacebook = () => {
    signInWithPopup(auth, facebookProvider).then((result) =>
      console.log(result)
    );
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
    });
  }, []);

  return (
    <div>
      <Button onClick={handleSignInWithGoogle}>
        Sign In with Google <GoogleOutlined />
      </Button>
      <Button onClick={handleSignInWithFacebook}>
        Sign In with Facebook <FacebookFilled />
      </Button>
    </div>
  );
}
