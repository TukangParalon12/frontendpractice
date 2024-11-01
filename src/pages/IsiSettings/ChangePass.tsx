import React from "react";
import { useNavigate } from "react-router-dom";

const ChangePass: React.FC = () => {
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
          confirmPassword: { value: string };
        };
        const email = target.email.value;
        const password = target.password.value;
        const confirmPassword = target.confirmPassword.value;

        // Lakukan validasi di sini, misal: cek apakah password dan confirmPassword sesuai
        if (password !== confirmPassword) {
          alert("Password dan Konfirmasi Password tidak cocok");
          return;
        }

        console.log(email, password, confirmPassword);
        // Jika validasi berhasil, lakukan navigasi atau aksi lainnya
        navigate("/Success");  // Ubah "/Success" dengan rute yang sesuai
      }}
    >
      <div className="relative w-full h-screen bg-[#2D2D2D] flex flex-col items-center justify-center space-y-8">
      <h1 className="text-4xl font-bold text-white">
          Change Password
        </h1>
        {/* Password Input */}
        <div className="w-full max-w-md space-y-4">
          <label htmlFor="password" className="text-white font-bold">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full p-2 text-black border rounded-full"
            placeholder="Masukkan Password"
          />
        </div>

        {/* New Password Input */}
        <div className="w-full max-w-md space-y-4">
          <label htmlFor="new_password" className="text-white font-bold">
            New Password
          </label>
          <input
            type="new_password"
            name="new_password"
            id="new_password"
            className="w-full p-2 text-black border rounded-full"
            placeholder="Masukkan Password Yang Baru"
          />
        </div>

        {/* Confirm Password Input */}
        <div className="w-full max-w-md space-y-4">
          <label htmlFor="confirmPassword" className="text-white font-bold">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="w-full p-2 text-black border rounded-full"
            placeholder="Masukkan Konfirmasi Password"
          />
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          {/* Confirm Button */}
          <button
            type="submit"
            className="w-[213px] h-[69px] bg-white rounded-[30px] flex items-center justify-center"
          >
            <span className="font-inter font-normal text-[25px] leading-[30px] text-black">
              Confirm
            </span>
          </button>

          {/* Cancel Button */}
          <button
            type="button"
            className="w-[213px] h-[69px] bg-white rounded-[30px] flex items-center justify-center"
            onClick={() => navigate("/Settings2")} // Ubah "/Cancel" dengan rute yang sesuai
          >
            <span className="font-inter font-normal text-[25px] leading-[30px] text-black">
              Cancel
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ChangePass;
