import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const API = process.env.REACT_APP_API_URL;

const Project = () => {
  const { projectid } = useParams();
  const navigate = useNavigate();

  const [projectname, setProjectname] = useState("");
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProject = async (uid, pid) => {
    await fetch(`${API}/get/project/${uid}/${pid}`, {
      method: "POST",
      mode: "cors",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.status === "ok") {
          setProjectname(data.projectname);
          setProject(data.projectdetails);
        } else {
          alert(data.message);
          navigate("/");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchData = async () => {
    try {
      if (Cookies.get("fdb-user")) {
        await getProject(Cookies.get("fdb-user"), projectid);
      } else {
        navigate("/landingpage");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const deleteData = (dataid) => {
    alert(dataid);
  };

  useEffect(() => {
    document.title = `FlowDB | Project`;
    fetchData();
    return () => {
      document.title = "FlowDB";
    };
  }, []);

  return (
    <div className="flex h-screen bg-gray-900 font-sans text-white">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 px-2 py-2">
          <div className="container mx-auto mt-6 p-4">
            {loading ? (
              <div className="flex items-center justify-center mb-6">
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
              </div>
            ) : (
              <>
                {Object.keys(project).length > 0 && (
                  <>
                    <h1 className="text-4xl font-bold mb-4">{projectname}</h1>
                    <div className="mx-auto bg-gray-800 rounded-xl shadow-lg p-6">
                      {project.map((p) => (
                        <div
                          key={p.id}
                          className="max-w-lg mx-auto bg-gray-700 rounded-xl shadow-lg p-2 my-2 relative group"
                        >
                          {Object.keys(p).map((key, index) => (
                            <p key={index} className="text-gray-400">
                              "{key}": "{p[key]}"
                            </p>
                          ))}
                          <button
                            onClick={() => {
                              deleteData(p.id);
                            }}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="h-4 w-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 6l2 14h14l2-14H3z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 6a2 2 0 1 1-4 0 2 2 0 1 1-4 0"
                              />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Project;
