"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Button, Avatar, Dropdown, Label } from "@heroui/react";
import { authClient } from "@/app/lib/auth-client"; // Better Auth Client Import
// Icons
import { FiMenu, FiX, FiLogOut } from "react-icons/fi";
import { ArrowRightFromSquare, House, Books, CircleInfo, Gear, Persons, Handset } from "@gravity-ui/icons";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Better Auth Session Hook
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const userLoggedIn = !!user;

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  // Sign Out Handler
  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          setIsMenuOpen(false);
          router.push("/login");
        },
      },
    });
  };

  const navItems = [
    { icon: House, name: "Home", href: "/" },
    { icon: Books, name: "Courses", href: "/courses" },
    { icon: CircleInfo, name: "About Us", href: "/about" },
    { icon: Persons, name: "Instructors", href: "/instructors" },
    { icon: Handset, name: "Contact", href: "/contact" },
  ];

  // Helper for avatar initials
  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-xl transition-all duration-300">
      <header className="mx-auto flex h-19 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="transition-transform hover:scale-105">
          <Image src="/academy-logo.png" alt="Logo" width={180} height={55} className="h-8 md:h-10 w-auto" priority />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative text-[15px] font-medium transition-colors py-2 ${isActive ? "text-secondary" : "text-textDark/80 hover:text-secondary"}`}
                >
                  {item.name}
                  <span className={`absolute left-0 bottom-0 h-0.5 bg-secondary transition-all duration-300 rounded-full ${isActive ? "w-full" : "w-0"}`} />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Auth Section */}
        <div className="flex items-center gap-4">
          {isPending ? (
            <div className="h-9 w-9 animate-pulse rounded-full bg-gray-200 hidden md:block" />
          ) : userLoggedIn ? (
            <div className="hidden md:block">
              <Dropdown>
                <Dropdown.Trigger className="rounded-full cursor-pointer">
                  <Avatar>
                    {user?.image && <Avatar.Image alt={user?.name || "User"} src={user.image} />}
                    <Avatar.Fallback delayMs={600}>{getInitials(user?.name)}</Avatar.Fallback>
                  </Avatar>
                </Dropdown.Trigger>

                <Dropdown.Popover>
                  <div className="px-3 pt-3 pb-2">
                    <div className="flex items-center gap-3">
                      <Avatar size="sm">
                        {user?.image && <Avatar.Image alt={user?.name || "User"} src={user.image} />}
                        <Avatar.Fallback delayMs={600}>{getInitials(user?.name)}</Avatar.Fallback>
                      </Avatar>
                      <div className="flex flex-col gap-0 max-w-[160px]">
                        <p className="text-sm leading-5 font-semibold truncate">{user?.name || "User"}</p>
                        <p className="text-xs leading-none text-muted truncate">{user?.email}</p>
                      </div>
                    </div>
                  </div>

                  <Dropdown.Menu
                    onAction={(key) => {
                      if (key === "logout") handleSignOut();
                      if (key === "dashboard") router.push("/dashboard");
                      if (key === "profile") router.push("/profile");
                      if (key === "settings") router.push("/settings");
                    }}
                  >
                    <Dropdown.Item id="dashboard" textValue="Dashboard">
                      <Label>Dashboard</Label>
                    </Dropdown.Item>

                    <Dropdown.Item id="profile" textValue="Profile">
                      <Label>Profile</Label>
                    </Dropdown.Item>

                    <Dropdown.Item id="settings" textValue="Settings">
                      <div className="flex w-full items-center justify-between gap-2">
                        <Label>Settings</Label>
                        <Gear className="size-3.5 text-muted" />
                      </div>
                    </Dropdown.Item>

                    <Dropdown.Item id="logout" textValue="Logout" variant="danger">
                      <div className="flex w-full items-center justify-between gap-2">
                        <Label>Log Out</Label>
                        <ArrowRightFromSquare className="size-3.5 text-danger" />
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            </div>
          ) : (
            <div className="hidden md:flex gap-3">
              <Link href="/login">
                <Button variant="outline" className="font-semibold">Login</Button>
              </Link>
              <Link href="/register">
                <Button className="bg-primary text-white" radius="sm">Register</Button>
              </Link>
            </div>
          )}

          <button className="md:hidden p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white px-4 pt-4 pb-6 absolute w-full transition-all shadow-lg">
          {/* Mobile User Info Header */}
          {userLoggedIn && (
            <div className="flex items-center gap-3 pb-4 mb-3 border-b border-gray-100">
              <Avatar size="md">
                {user?.image && <Avatar.Image alt={user?.name || "User"} src={user.image} />}
                <Avatar.Fallback delayMs={600}>{getInitials(user?.name)}</Avatar.Fallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="text-sm font-bold text-gray-800">{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
            </div>
          )}

          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium ${pathname === item.href ? "bg-secondary/10 text-secondary" : "text-textDark"}`}
                >
                  <item.icon size={16} /> {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-6 border-t flex flex-col gap-3">
            {userLoggedIn ? (
              <Button 
                color="danger" 
                variant="flat" 
                className="w-full justify-start font-semibold" 
                startContent={<FiLogOut />}
                onPress={handleSignOut}
              >
                Log Out
              </Button>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="bordered" className="w-full">Login</Button>
                </Link>
                <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-primary text-white w-full">Register</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}