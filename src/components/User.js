import { useState, useEffect } from "react";
import ButtonIcon from "./ButtonIcon";
import { HiMiniUser } from "react-icons/hi2";
import { useRouter } from "next/router";

export default function User() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="tw-flex tw-gap-4 tw-items-center">
      <div>
        <img
          src={user?.profilePictureUrl}
          alt="avatar"
          className="tw-w-8 tw-h-8 md:tw-w-14 md:tw-h-14 tw-object-cover tw-rounded-full"
        />
      </div>
      <div>
        <h1 className="tw-text-base md:tw-text-xl tw-font-bold tw-text-gray-700 tw-mb-0">
          {user?.name}
        </h1>
        <p className="tw-text-xs md:tw-text-base tw-text-gray-500 tw-mb-0">
          {user?.email}
        </p>
      </div>
      <ButtonIcon
        onClick={() => router.push("/dashboard/profile")}
        style="tw-p-2 tw-bg-slate-300 tw-rounded-md hover:tw-bg-slate-400 hover:tw-rounded-lg tw-text-gray-600"
      >
        <HiMiniUser className="tw-w-6 tw-h-6" />
      </ButtonIcon>
    </div>
  );
}
