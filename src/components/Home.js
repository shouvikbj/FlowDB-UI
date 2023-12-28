import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const API = process.env.REACT_APP_API_URL;

const Home = () => {
  const navigate = useNavigate();

  const [userid, setUserid] = useState("");
  const [currentuser, setCurrentuser] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [projects, setProjects] = useState([]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = document.getElementById("add-project-form")
    await fetch(`${API}/create/project/${userid}`, {
      method: "POST",
      body: new FormData(form),
      mode: "cors"
    })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      if(data.status === "ok"){
        alert(data.message)
        navigate(`/project/${data.projectid}`)
      }
      else{
        alert(data.message)
      }
    })
    closeModal();
  };

  const getProjects = async (id) => {
    await fetch(`${API}/get/projects/${id}`, {
      method: "POST",
      mode: "cors"
    })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      if(data.status === "ok"){
        setProjects(data.projectnames)
      }
      else{
        alert(data.message)
      }
    })
  }

  useEffect(() => {
    document.title = "FlowDB | Home";
    if (Cookies.get("fdb-user")) {
      setUserid(Cookies.get("fdb-user"));
      getUserDetails(Cookies.get("fdb-user"));
      getProjects(Cookies.get("fdb-user"))
    } else {
      navigate("/landingpage");
    }
    return () => {
      document.title = "FlowDB";
    };
  }, []);

  return (
    <div className="flex h-screen font-sans text-white">
      <div className="flex-1 flex flex-col overflow-hidden">
        <header
          className="bg-cover bg-center py-20"
          style={{
            backgroundImage:
              'url("https://img.freepik.com/free-vector/gradient-abstract-wireframe-background_23-2149020364.jpg")',
          }}
        >
          <div className="container mx-auto text-2xl font-bold text-center">
            FlowDB Projects
          </div>
          <div className="container text-white mx-auto text-center">
            {currentuser.name}
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 px-2 py-2">
          <div className="container mx-auto mt-6 p-4 flex items-center justify-end">
            <button
              onClick={openModal}
              className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
            >
              Add Project
            </button>
          </div>
          <div className="container mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-center text-gray-300">No projects yet!</p>
              </div>
            ) : (
              projects.map((project) => (
                <Link
                  key={project.projectid}
                  to={`/project/${project.projectid}`}
                  className="bg-gray-800 text-white rounded-2xl shadow p-4 hover:shadow-lg transition duration-300"
                >
                  <h2 className="text-lg font-semibold mb-2">{project.projectname}</h2>
                  <br/>
                  <p className="text-gray">Click to view project details</p>
                </Link>
              ))
            )}
          </div>
        </main>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
          <div className="bg-black opacity-50 absolute inset-0"></div>
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg z-10">
            <h2 className="text-2xl font-semibold mb-4">Add New Project</h2>
            <form id="add-project-form" onSubmit={handleSubmit}>
              <input
                type="text"
                className="bg-gray-700 text-white px-4 py-2 rounded mb-4"
                placeholder="Project Name"
                name="projectname"
              />
              <div className="space-x-4">
                <button
                  onClick={closeModal}
                  className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 float-right"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
