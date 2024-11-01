import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  return (
    <form
      ref={formRef}
      onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
          email: { value: string };
          password: { value: string };
        };
        const email = target.email.value;
        const password = target.password.value;
        console.log(email, password);
        axios
          .post("https://d09jsw8q-3000.asse.devtunnels.ms/Login", {
     
            email,
            password,
          })
          .then((response) => {
            console.log("User created:", response.data);
            alert("Login berhasil");
            localStorage.setItem("token", response.data.token);
            navigate("/Notes2");
          })
          .catch((error) => {
            console.error("Error creating user:", error.response.data);
            alert(error.response.data.message);
          });
      }}
    >
      <div
        className="flex flex-col min-h-screen items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/Hitamm.png')" }}
      >
        <h1 className="text-4xl font-bold text-white">Login</h1>
        <div className="w-full max-w-md space-y-6">
          <p className="font-bold text-white">Email</p>
          <input
            type="email"
            name="email"
            className="w-full p-2 text-black border rounded-full"
            placeholder="Masukkan Email"
            // onChange={(e) => setEmail(e.target.value)}
          />
          <p className="font-bold text-white">Kata Sandi</p>
          <input
            type="password"
            name="password"
            className="w-full p-2 text-black border rounded-full"
            placeholder="Masukkan Kata Sandi"
            // onChange={(e) => setKatasandi(e.target.value)}
          />
           {/* "buat akun" link centered below password field */}
           <div className="text-center mb-6">
            <p className="font-bold text-white inline">
              Don't have an account?{" "}
            </p>
            <a
              href="/Register"
              className="text-blue-500 hover:underline text-sm inline"
            >
              Sign Up
            </a>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-blue-900 hover:text-black font-medium bg-black text-white hover:font-medium hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            // onClick={() => navigate("/Notes2")}
          >
            Masuk
          </button>
        </div>
      </div>
    </form>
  );
};
export default Login;

// useEffect(() => {
  //   axios
  //     .get("https://d09jsw8q-3000.asse.devtunnels.ms/login", {
  //       headers: {
  //         "Authorization": "Bearer ",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);