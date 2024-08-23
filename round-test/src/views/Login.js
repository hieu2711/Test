import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon1 from "../assets/image/naver-icon.png";
import icon2 from "../assets/image/kakao-icon.png";
import icon3 from "../assets/image/google-icon.png";
import icon4 from "../assets/image/facebook-icon.png";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: "", password: "" });

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        let newErrors = { email: "", password: "" };

        if (!email) {
            newErrors.email = "Email is required.";
            valid = false;
        } else if (!validateEmail(email)) {
            newErrors.email = "Please enter a valid email.";
            valid = false;
        }

        if (!password) {
            newErrors.password = "Password is required.";
            valid = false;
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long.";
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
            console.log("Form is valid.");
        }
    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-[80%] max-w-xl p-8 mt-14">
                <h1 className="text-5xl font-extrabold text-center text-cl_blue  mb-8">Welcome!</h1>
                <p className="bg-[#222222] w-full border-b-[3px] border-[#222222] mt-10 mb-7"></p>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-[#a1a1a1]'}`}
                            placeholder="아이디 (이메일)"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-400'} rounded`}
                            placeholder="비밀번호"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#0565bb] text-white py-2 font-NotoSansCJKkr border-solid border-[#dedede]  mt-4"
                    >
                        로그인하기
                    </button>
                </form>

                <div className="w-full text-center mt-10 mb-5">
                    <p className="text-gray-500 font-NotoSansCJKkr mb-5">SNS 계정으로 로그인</p>
                    <div className="flex justify-around ">
                        <Link to="#" className="block w-12 h-12">
                            <img src={icon1} alt="Naver" />
                        </Link>
                        <Link to="#" className="block w-12 h-12">
                            <img src={icon2} alt="Kakao" />
                        </Link>
                        <Link to="#" className="block w-12 h-12">
                            <img src={icon3} alt="Facebook" />
                        </Link>
                        <Link to="#" className="block w-12 h-12">
                            <img src={icon4} alt="Google" />
                        </Link>
                    </div>
                </div>

                <div className="text-center mb-5">
                    <button className=" w-full py-2 mt-6  border-[1px] font-NotoSansCJKkr border-[#020001]">
                        계정이 없으신가요? 간편가입하기
                    </button>
                </div>

                <div className="flex justify-around text-sm text-blue-600 font-NotoSansCJKkr">
                    <Link to="#">아이디(이메일)찾기</Link>
                    <Link to="#">비밀번호 찾기</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
