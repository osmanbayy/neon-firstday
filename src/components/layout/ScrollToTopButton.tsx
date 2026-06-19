"use client"

import { useEffect, useState } from "react";
import { Button } from "../ui/button"
import { ChevronUp } from "lucide-react";

export const ScrollToTopButton = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  if(!visible) return null;

  return (
    <Button
      size={"icon"}
      className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg cursor-pointer"
      onClick={scrollToTop}
    >
      <ChevronUp size={18} />
    </Button>
  )
}