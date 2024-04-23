

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const host = "http://localhost:5000";
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${host}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password }),
      });
      const data = await response.json();

      if (response.ok) {
        // Authentication successful
        localStorage.setItem('token', data.token);
        navigate("/home");
      } else {
        // Authentication failed
        alert(data.message || "Authentication failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="gradient-form h-full bg-[#fff] md:h-screen">
        <div className="container h-full py-10 px-6">
          <div className="g-6 flex h-full flex-wrap items-center  text-[#495e57]">
            <div className="xl:w-10/12">
              <div className="mx-auto text-center">
                <h2 className="text-4xl font-bold sm:text-6xl text-black" style={{ marginLeft:'40%'}}>
                  Register Page
                </h2>
                <p className="mt-2 mb-20 text-lg leading-8" style={{ marginLeft:'40%'}}>
                  Please register to our hotel
                </p>
              </div>
              <div className="flex-wrap rounded-lg bg-white ">
                {/* <div className="ml-20 g-3 lg:flex"> */}
                  <div className="px-0 md:px-0 rounded-md ">
                    <div className="md:mx-6 md:h-15 md:p-8 rounded-lg bg-[#495e57] text-[#fff]" style={{marginLeft:'45%', width: '50%', marginBottom: '40px'} } >
                      
                      <form onSubmit={handleSubmit}>
                        <p className="mt-12 mb-5 pb-1 text-l font-semibold"></p>
                        <div className="mb-4 pb-4">
                          <input
                            type="text"
                            className="block w-3/4 md:w-full rounded-md border-0 py-3 text-[#495e57] bg-[#f4ce14] font-bold shadow-xl focus:ring-2 focus:ring-inset focus:ring-black sm:leading-6"
                            placeholder="Username"
                            name="email"
                            value={credentials.email}
                            onChange={onChange}
                            required
                          />
                        </div>

                        <div className="mb-4">
                          <input
                            type="password"
                            className="block w-full rounded-md border-0 py-3 text-[#495e57] bg-[#f4ce14] font-bold shadow-xl focus:ring-2 focus:ring-inset focus:ring-black sm:leading-6"
                            placeholder="Password"
                            name="password"
                            value={credentials.password}
                            onChange={onChange}
                            required

                          />
                        </div>
                        <div className="mb-12 pt-1 pb-1 text-center">
                          <button
                            className="block w-full rounded-md border-0 py-3 text-[#495e57] bg-[#f4ce14] font-bold shadow-xl focus:ring-2 focus:ring-inset focus:ring-black sm:leading-6"
                            type="submit"
                          >
                            Register 
                          </button>
                        </div>
                        <div className="flex items-center justify-between pb-4">
                          {/* <p className="block text-xl font-medium leading-6">New User?</p> */}
                          {/* <Link to={"/signup"}>
                            <button
                              type="button"
                              className="block rounded-md border-0 py-3 px-3 text-[#495e57] bg-[#f4ce14] font-bold shadow-xl focus:ring-4 focus:ring-inset focus:ring-black sm:leading-6"
                            >
                              Sign Up
                            </button>
                          </Link> */}
                        </div>
                      </form>
                    </div>
                  </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;


