import React, { useEffect } from "react";
import Sidebar from "./components/SideBar/Sidebar";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";

import { login, logout } from "./features/userSlice";
import { auth } from "./firebase/index";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "./features/userSlice";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
