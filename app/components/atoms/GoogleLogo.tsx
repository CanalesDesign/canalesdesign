import Image from 'next/image';
import Google from '@/public/img/google-horizontal-logo.svg';

export default function GoogleLogo() {
  return (
    <Image
      className="google__star w-[60px] h-auto"
      src={Google}
      alt="Google Logo"
      width={60}
      height={20}
    />
  );
}
