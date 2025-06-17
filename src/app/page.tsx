// import Image from "next/image";
import { Input } from "@/components/ui/input";
//navigation
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/auth/login");
  return (
    <div className="flex items-center justify-center h-[100dvh]">
      <p className="font-bold text-xl  bg-red-500 standalone:bg-black">
        welcone to Jasmines
      </p>
      <Input placeholder="text" />
    </div>
  );
}
