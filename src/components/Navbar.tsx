import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { webRoutes } from "@/routes/web";
import { IconLogin, IconRecycle } from "@tabler/icons-react";
import { LangToggle } from "./lang-toggle";
import { useTranslation } from "react-i18next";

interface RouteProps {
  href: string;
  label: string;
}



export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation();


  const routeList: RouteProps[] = [
    {
      href: "#home",
      // label: "Home",
      label: t("menu_home"),
    },
    {
      href: "#scarp",
      //  label: "Scarp",
      label: t("menu_scrap"),
    },
    {
      href: "#about",
      label: t("menu_about"),
      // label: "About",
    },
    {
      href: "#contact",
      label: t("menu_contact"),
      // label: "Contact"  ,
    },
  ];

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <IconRecycle />
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex text-center"
            >
              {t("website")}
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    {t("website")}
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    href="https://github.com/leoMirandaa/shadcn-landing-page.git"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    <IconLogin className="mr-2 w-5 h-5" />
                    {t("login")}
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <a
              rel="noreferrer noopener"
              href={webRoutes.login}
              // target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <IconLogin className="mr-2 w-5 h-5" />
              {t("login")}
            </a>

            <ModeToggle />
            <LangToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
