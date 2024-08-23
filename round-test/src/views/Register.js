import React, { useState } from "react";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [address, setAddress] = useState("");
    const [address2, setAddress2] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^[0-9]{10,11}$/;
        return phoneRegex.test(phone);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        let valid = true;

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
        } else if (password.length < 8 || password.length > 12) {
            newErrors.password = "Password must be between 8 and 12 characters.";
            valid = false;
        }

        if (!confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password.";
            valid = false;
        } else if (confirmPassword !== password) {
            newErrors.confirmPassword = "Passwords do not match.";
            valid = false;
        }

        if (!address) {
            newErrors.address = "Address is required.";
            valid = false;
        }

        if (phone && !validatePhone(phone)) {
            newErrors.phone = "Please enter a valid phone number.";
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
            console.log("Form is valid.");
        }
    };

    return (
        <div className="flex justify-center items-center mb-6">
            <div className="w-[80%] max-w-xl p-8 mt-14">
                <h1 className="text-4xl font-extrabold text-center text-cl_blue mb-8">JOIN US</h1>
                <p className="bg-[#222222] w-full border-b-[3px] border-[#222222] mt-10 mb-7"></p>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-base font-NotoSansCJKkr text-[#222222] font-semibold mb-2" htmlFor="email">
                            아이디(이메일) *
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="example@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-[#a1a1a1]'}`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-base font-NotoSansCJKkr text-[#222222] font-semibold mb-2" htmlFor="password">
                            비밀번호 *
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="영문, 숫자, 특수문자를 포함한 8-12자리"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-400'}`}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-base font-NotoSansCJKkr text-[#222222] font-semibold mb-2" htmlFor="confirm-password">
                            비밀번호 확인 *
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={`w-full p-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-400'}`}
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                    </div>

                    <div className="flex flex-col w-full">
                        <label className="font-bold mb-2" htmlFor="address">주소</label>
                        <div className="relative w-full">
                            <input
                                type="text"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className={`w-full p-2 border ${errors.address ? 'border-red-500' : 'border-gray-400'} rounded`}
                            />
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#659bf5]">
                                검색
                            </button>
                        </div>
                        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                    </div>

                    <div className="mb-6">
                        <input
                            type="text"
                            id="address2"
                            value={address2}
                            onChange={(e) => setAddress2(e.target.value)}
                            className="w-full p-2 border border-gray-400"
                            placeholder="추가 주소"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-base font-NotoSansCJKkr text-[#222222] font-semibold mb-2" htmlFor="phone">연락처</label>
                        <input
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className={`w-full p-2 border ${errors.phone ? 'border-red-500' : 'border-gray-400'} rounded`}
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    <div className="pt-6">
                        <p className="bg-[#222222] w-full border-b-[3px] border-[#222222]"></p>
                    </div>

                    <div className="mb-6 float-end">
                        <div className="flex items-center">
                            <input checked type="checkbox" id="terms" className="mr-2" />
                            <label htmlFor="terms" className="text-[#222222]">
                                <span className="text-[#659bf5]">이용약관</span> 및 <span className="text-[#659bf5]">개인정보 처리 방침</span>에 동의합니다. (필수)
                            </label>
                        </div>
                        <div className="flex items-center mt-2 float-end">
                            <input type="checkbox" id="promotions" className="mr-2" />
                            <label htmlFor="promotions" className="text-[#222222]">광고 및 메일 수신에 동의합니다. (선택)</label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-cl_blue text-base text-white py-4 font-semibold rounded hover:bg-blue-700 transition duration-300"
                    >
                        가입하기
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
