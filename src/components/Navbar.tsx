import { motion, AnimatePresence } from "framer-motion";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import { HiSun, HiMoon } from "react-icons/hi";
import { useState, useEffect } from "react";
import { MagneticButton } from "./Animations/InteractiveElements";
import { Button } from "./Button";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  theme: string;
  handleTheme: () => void;
}

const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  theme,
  handleTheme,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-l border-gray-200/20 dark:border-gray-700/30 z-50 lg:hidden shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="p-6">
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <MagneticButton>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <CgClose className="text-2xl" />
                  </Button>
                </MagneticButton>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <MagneticButton>
                      <a
                        href={link.href}
                        onClick={onClose}
                        className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-300"
                      >
                        {link.label}
                      </a>
                    </MagneticButton>
                  </motion.div>
                ))}
              </nav>

              {/* Theme Toggle */}
              <motion.div
                className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <MagneticButton>
                  <Button
                    variant="outline"
                    onClick={handleTheme}
                    className="w-full justify-start gap-3 py-3 text-lg font-medium border-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {theme === "dark" ? (
                      <HiMoon className="text-xl text-white" />
                    ) : (
                      <HiSun className="text-xl text-gray-900" />
                    )}
                    {theme === "dark" ? "Dark Mode" : "Light Mode"}
                  </Button>
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light"
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("darkMode");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("darkMode");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <motion.section
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-700/30 shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <div className="p-5 mx-20 font-['Poppins'] max-sm:p-4 max-sm:mx-5">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/">
                <div className="relative inline-block px-3 py-1 font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent group">
                  &lt;PN/&gt;
                  <span className="absolute inset-0 rounded-md border border-blue-500 opacity-30 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse pointer-events-none"></span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <nav className="flex gap-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <MagneticButton>
                      <a
                        href={link.href}
                        className="relative text-lg font-medium text-[#00040f] dark:text-[#e1e1e1] hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300 group"
                      >
                        {link.label}
                        <motion.div
                          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-full transition-all duration-300"
                          whileHover={{ width: "100%" }}
                        />
                      </a>
                    </MagneticButton>
                  </motion.div>
                ))}
              </nav>

              {/* Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              >
                <MagneticButton>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleTheme}
                    className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-gray-900 dark:text-white"
                  >
                    <motion.div
                      animate={{ rotate: theme === "dark" ? 180 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {theme === "dark" ? (
                        <HiMoon className="text-2xl" />
                      ) : (
                        <HiSun className="text-2xl" />
                      )}
                    </motion.div>
                  </Button>
                </MagneticButton>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <MagneticButton>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setNav(true)}
                  className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <CgMenuRightAlt className="text-2xl" />
                </Button>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={nav}
        onClose={() => setNav(false)}
        theme={theme}
        handleTheme={handleTheme}
      />

      {/* Spacer for fixed navbar */}
      <div className="h-14" />
    </>
  );
};

export default Navbar;
