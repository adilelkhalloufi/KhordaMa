import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { useTranslation } from "react-i18next";
import { webRoutes } from "@/routes/web";
import { IconLogin, IconRecycle } from "@tabler/icons-react";
import i18next from "../i18n"
import { LangToggle } from "./lang-toggle";

interface RouteProps {
  href: string;
  label: string;
}

export function Header() {
  const { theme, setTheme } = useTheme()
  const { t } = useTranslation();

  const routeList: RouteProps[] = [
    {
      href: "#home",
      // label: "Home",
      label: t("menu_home"),
    },
    {
      href: webRoutes.stagnant,
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
    <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold flex items-center">
            <IconRecycle />
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex text-center"
            >
              {t("website")}
            </a>
          </span>
          <nav className="hidden md:flex space-x-6">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className="text-sm font-medium hover:text-primary"
              >
                {route.label}
              </a>
            ))}

          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          <LangToggle />
          <Button>
            <IconLogin className="mr-2 w-5 h-5" />
            {t("login")}
          </Button>
        </div>
      </div>
    </header>
  )
}

