"use client";
import { ArrowCircleLeftIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
  const router = useRouter();
  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className="flex justify-between items-center mb-4 px-2">
      <button className="text-cyberpunk-main" onClick={handleBack}>
        <ArrowCircleLeftIcon size={32} />
      </button>
      <h3 className="text-2xl text-cyberpunk-main font-bold">{title}</h3>
    </div>
  );
};

export default Header;
