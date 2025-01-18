// components/theme-buttons.jsx
"use client";
import React, { useEffect, useState } from "react";
import { Card, CardFooter, CardHeader } from "../ui/card";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { useTheme } from "next-themes";

export default function ThemeButtons() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const DEFAULT_THEME = "light";

  // Handle mounting state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Ensure theme changes are applied
  useEffect(() => {
    if (isMounted && theme) {
      document.body.dataset.theme = theme;
    }
  }, [theme, isMounted]);

  // Prevent hydration mismatch
  if (!isMounted) {
    return (
      <div className="mt-3">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-4 mt-4">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="h-20 bg-gray-100 rounded-lg animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  const themeOptions = [
    {
      name: "dark",
      displayName: "Dark Mode",
      headerClass: "bg-[#1c1917]",
    },
    {
      name: "blue",
      displayName: "Blue Mode",
      headerClass: "bg-blue-600",
    },
    {
      name: "violet",
      displayName: "Violet Mode",
      headerClass: "bg-violet-600",
    },
    {
      name: "orange",
      displayName: "Orange Mode",
      headerClass: "bg-orange-500",
    },
    {
      name: "pink",
      displayName: "pink",
      headerClass: "#ff0080;",
    },
    {
      name: "blueprint",
      displayName: "blueprint",
      headerClass: "#7928ca",
    },
  ];

  const handleThemeChange = (themeName) => {
    try {
      if (theme === themeName) {
        setTheme(DEFAULT_THEME);
        window.location.reload();
      } else {
        setTheme(themeName);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error changing theme:", error);
      setTheme(DEFAULT_THEME);
      window.location.reload();
    }
  };

  return (
    <div className="mt-3">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-4 mt-4">
        {themeOptions.map((themeOption) => (
          <Card
            key={themeOption.name}
            className="h-20 transition-colors duration-200"
          >
            <CardHeader className={themeOption.headerClass}></CardHeader>
            <CardFooter>
              <div className="flex items-center space-x-2">
                <Switch
                  id={`${themeOption.name}-mode`}
                  checked={theme === themeOption.name}
                  onCheckedChange={() => handleThemeChange(themeOption.name)}
                  className="peer"
                />
                <Label
                  htmlFor={`${themeOption.name}-mode`}
                  className="text-foreground"
                >
                  {themeOption.displayName}
                </Label>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
