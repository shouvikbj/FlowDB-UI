import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const API = process.env.REACT_APP_API_URL;

const Home = () => {
  const navigate = useNavigate();

  const [userid, setUserid] = useState("");
  const [currentuser, setCurrentuser] = useState({});

  const getUserDetails = async (id) => {
    await fetch(`${API}/get/user/${id}`, {
      method: "POST",
      mode: "cors",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.status === "ok") {
          setCurrentuser(data.user);
        } else {
          alert(data.message);
          navigate("/login");
        }
      });
  };

  useEffect(() => {
    document.title = "FlowDB | Home";
    if (Cookies.get("fdb-user")) {
      setUserid(Cookies.get("fdb-user"));
      getUserDetails(Cookies.get("fdb-user"));
    } else {
      navigate("/landingpage");
    }
    return () => {
      document.title = "FlowDB";
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="bg-white rounded-md shadow-md p-6 max-w-sm mx-auto">
        <h2 className="text-2xl font-bold mb-4">User Information</h2>
        <div className="mb-4">
          <strong>Email:</strong> {currentuser.email}
        </div>
        <div className="mb-4">
          <strong>Name:</strong> {currentuser.name}
        </div>
        <div className="mb-4">
          <strong>Id:</strong> {userid}
        </div>
      </div>
    </div>
  );
};

export default Home;
