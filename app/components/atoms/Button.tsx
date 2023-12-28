import Link from 'next/link';

export default function ButtonPrimary(props: any) {
  return (
    <Link className="btn__primary" href={props.path}>
      {props.icon}
      {props.cta}
    </Link>
  );
}
