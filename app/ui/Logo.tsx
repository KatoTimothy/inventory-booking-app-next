import Image from "next/image";
import Link from "next/link";

const Logo = () => (
  <Link href="/">
    <Image src="/Logo.svg" alt="Logo" width={142} height={26} />
  </Link>
);

export default Logo;
