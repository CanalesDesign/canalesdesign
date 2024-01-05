import Link from 'next/link';

export default function ButtonPrimary(props: any) {
  return (
    <Link
      className="btn__primary"
      href={props.path}
      rel={props.rel}
      target={props.target}
    >
      {props.icon}
      {props.cta}
    </Link>
  );
}
