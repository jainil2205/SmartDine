import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const history = useNavigate();
  const host = "http://localhost:5000";
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${host}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, confirmPassword: credentials.cpassword }),
      });
      const json = await response.json();

      if (response.ok) {
        // Registration successful
        localStorage.setItem('token', json.authToken);
        history("/");
      } else {
        // Registration failed
        alert(json.message || "Registration failed");
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
        <div className="container h-full py-12 px-6">
          <div className="g-6 flex h-full flex-wrap items-center text-[#495e57]">
            <div className="xl:w-10/12">
              <div className="mx-auto text-center">
                <h2 className="text-4xl font-bold sm:text-6xl text-black" style={{ marginLeft: '40%' }}>
                  SignUp Page
                </h2>
                <p className="mt-2 mb-20 text-lg leading-8" style={{ marginLeft: '40%' }}>
                  Please SignUp to create new Account
                </p>
              </div>
              <div className="block rounded-lg bg-white">

                {/* <div className="g-0 lg:flex lg:flex-wrap"> */}
                  <div className="px-0 md:px-0 rounded-md">
                    <div className="md:mx-6 md:h-15 md:p-8 rounded-lg bg-[#495e57] text-[#fff]" style={{marginLeft:'45%', width: '50%', marginBottom: '40px'} }>
                      <div className="text-center">


                      </div>
                      <form onSubmit={handleSubmit}>
                        <p className="mb-4">Please Sign Up for your account</p>
                        <div className="mb-4">
                          <input
                            type="text"
                            name="name"
                            className="block w-3/4 md:w-full rounded-md border-0 py-3 text-[#495e57] bg-[#f4ce14] font-bold shadow-xl focus:ring-2 focus:ring-inset focus:ring-black sm:leading-6"
                            placeholder="Name"
                            value={credentials.name}
                            onChange={onChange}
                            minLength={5}
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="email"
                            className="block w-3/4 md:w-full rounded-md border-0 py-3 text-[#495e57] bg-[#f4ce14] font-bold shadow-xl focus:ring-2 focus:ring-inset focus:ring-black sm:leading-6"
                            name="email"
                            placeholder="Email"
                            value={credentials.email}
                            onChange={onChange}
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="block w-3/4 md:w-full rounded-md border-0 py-3 text-[#495e57] bg-[#f4ce14] font-bold shadow-xl focus:ring-2 focus:ring-inset focus:ring-black sm:leading-6"
                            name="password"
                            placeholder="Password"
                            value={credentials.password}
                            onChange={onChange}
                            minLength={5}
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="block w-3/4 md:w-full rounded-md border-0 py-3 text-[#495e57] bg-[#f4ce14] font-bold shadow-xl focus:ring-2 focus:ring-inset focus:ring-black sm:leading-6"
                            name="cpassword"
                            placeholder="Confirm Password"
                            value={credentials.cpassword}
                            onChange={onChange}
                            minLength={5}
                            required
                          />
                        </div>
                        <div className="mb-12 pt-1 pb-1 text-center">
                          <button
                            className="block w-3/4 md:w-full rounded-md border-0 py-3 text-[#495e57] bg-[#f4ce14] font-bold shadow-xl focus:ring-2 focus:ring-inset focus:ring-black sm:leading-6"
                            type="submit"
                          >
                            Sign Up
                          </button>

                        </div>
                        <div className="flex items-center justify-between pb-6"></div>
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

export default SignUp;
