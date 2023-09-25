"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from '../../public/android-chrome-256x256.png'

export default function Login() {
  const router = useRouter();

  return (
    <div className="h-screen w-full  flex justify-center items-center">
      <div className="flex flex-col  space-y-3 justify-center items-center">
        <div className="flex flex-shrink-0 items-center">
          <Image
            className="h-10 w-auto"
            width={256}
            height={256}
            src={logo}
            alt="Fade logo"
          />
        </div>
        <h1>This is login page</h1>
        <button
          className="border-2 p-3 "
          onClick={() => router.push("/dashboard")}
        >
          take me to dashboard
        </button>
      </div>
    </div>
  );
}
