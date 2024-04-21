import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import { loginImage } from "@/utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import { registerUser } from "@/utils/api";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !passwordRepeat ||
      !phoneNumber
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    if (password !== passwordRepeat) {
      toast.error("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    const name = `${firstName} ${lastName}`;
    const profilePictureUrl = "https://placehold.co/100x100";
    const role = "admin";

    try {
      const response = await registerUser({
        name,
        email,
        password,
        passwordRepeat,
        role,
        profilePictureUrl,
        phoneNumber,
      });
      if (response.error) {
        throw new Error(response.message);
      }
      toast.success("Registration successful", {
        autoClose: 2000,
      });
      setTimeout(() => {
        router.replace("/login");
      }, 3000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-4xl p-3">
        <div className="sm:w-1/2 ">
          <h1 className="text-2xl font-bold ">TravelGo</h1>
          <form
            className="flex flex-col gap-3 px-6 mt-4"
            onSubmit={handleSubmit}
          >
            <p className="text-black font-bold">Register</p>
            <div className="flex gap-4">
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                style="w-1/2"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                style="w-1/2"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              name="passwordRepeat"
              placeholder="Confirm Password"
              value={passwordRepeat}
              onChange={(e) => setPasswordRepeat(e.target.value)}
            />
            <Input
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Button
              title="Register"
              type="submit"
              style={"bg-gray-300 hover:bg-gray-400"}
            />
            <p className="text-gray-700 text-sm">
              Do you have an account? <Link href="/login">Login</Link>
            </p>
          </form>
          <p className="text-gray-400 text-xs mt-6">
            Copyright © 2024 TravelGo. All rights reserved.
          </p>
        </div>
        <div className="sm:block hidden w-1/2 ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper w-[100%] h-[100%]"
          >
            {loginImage.map((image) => (
              <SwiperSlide key={image.id}>
                <img
                  src={image.image}
                  alt={image.title}
                  className="flex items-center justify-center w-full h-full object-cover rounded-3xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
