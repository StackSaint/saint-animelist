import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin?callbackUrl=/";
  return (
    <div className="flex gap-2 sm:gap-3 justify-between text-cyberpunk-primary ">
      {user ? (
        <Link 
          href="/users/dashboard" 
          className="px-3 sm:px-5 py-2 text-xs sm:text-sm md:text-base bg-cyberpunk-third/80 text-cyberpunk-secondary font-bold rounded-lg hover:bg-cyberpunk-third border border-cyberpunk-accent/20 hover:border-cyberpunk-accent/40 transition-all duration-300 hover:scale-105 transform"
        >
          Dashboard
        </Link>
      ) : null}
      <Link 
        href={actionURL} 
        className="bg-cyberpunk-accent text-cyberpunk-primary font-bold px-3 sm:px-6 py-2 text-xs sm:text-sm md:text-base rounded-lg hover:bg-cyberpunk-accent/90 transition-all duration-300 hover:scale-105 transform"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
