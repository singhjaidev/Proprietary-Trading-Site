import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/constants/site";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4">
      <Image
        src="/Logo.jpg"
        alt={siteConfig.name}
        width={70}
        height={70}
        priority
        className="object-contain"
      />
    </Link>
  );
}