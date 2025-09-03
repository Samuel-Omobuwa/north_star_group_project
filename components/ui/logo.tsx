import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  href?: string;
}

const sizeClasses = {
  sm: "h-6 w-6",
  md: "h-8 w-8",
  lg: "h-12 w-12",
};



export function Logo({
  className,
  size = "md",
    href,
}: LogoProps) {
  const logoContent = (
    <div className={cn("flex items-center gap-2", className)}>
      <Image
        src="/public/logo-color2.svg"
        alt="Northstar Group Logo"
        width={size === "sm" ? 24 : size === "md" ? 32 : 48}
        height={size === "sm" ? 24 : size === "md" ? 32 : 48}
        className={cn(sizeClasses[size], "object-contain")}
        priority
      />
    
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="hover:opacity-80 transition-opacity">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
