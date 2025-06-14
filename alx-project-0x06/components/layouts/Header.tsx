import Link from "next/link";
import Button from "../common/Button";
import { usePathname } from "next/navigation";
import { useCount } from "@/context/CountContext";

const Header: React.FC = () => {
  const pathName = usePathname();
  const { count } = useCount();

  return (
    <header className="fixed w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        <Link
          href="/"
          className="text-3xl md:text-5xl font-bold text-gray-800 tracking-light"
        >
          Splash App
        </Link>

        {/* Button group */}
        <div>
          <div className="flex gap-4">
            {!["/counter-app"].includes(pathName) ? (
              <>
                <Button buttonLabel="Sign In" buttonBackgroundColor="red" />
                <Button buttonLabel="Sign Up" buttonBackgroundColor="blue" />
              </>
            ) : (
              <p className="font-semibold text-lg">count: {count}</p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
