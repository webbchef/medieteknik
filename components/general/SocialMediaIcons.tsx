import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SocialMediaIcons() {
  return (
    <div className="flex justify-center w-full">
      <Link
        target="_blank"
        rel="noopener"
        href="https://sv-se.facebook.com/mtsektionen/"
      >
        <Button variant="ghost" size="icon" className="text-[#EC6610] hover:text-[#EC6610]/80">
          <Facebook className="h-6 w-6" />
          <span className="sr-only">Facebook</span>
        </Button>
      </Link>
      <Link
        target="_blank"
        rel="noopener"
        href="https://www.instagram.com/mtsektionen/?hl=en"
      >
        <Button variant="ghost" size="icon" className="text-[#EC6610] hover:text-[#EC6610]/80">
          <Instagram className="h-6 w-6" />
          <span className="sr-only">Instagram</span>
        </Button>
      </Link>
    </div>
  );
}
