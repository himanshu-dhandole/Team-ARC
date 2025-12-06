import { Button } from "@/components/ui/button";
import { GithubLogo, XLogo } from "../icons";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-6 inset-x-4 h-14 bg-white/30 backdrop-blur-md border border-gray-200 max-w-screen-lg mx-auto rounded-full shadow-sm">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="hidden sm:inline-flex rounded-full border-gray-200 bg-white hover:bg-gray-50 text-gray-700 shadow-none h-9 w-9"
            size="icon"
          >
            <XLogo className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-gray-200 bg-white hover:bg-gray-50 text-gray-700 shadow-none h-9 w-9"
            size="icon"
          >
            <GithubLogo className="h-4 w-4" />
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;