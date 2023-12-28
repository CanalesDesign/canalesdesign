import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

export default function Card(props: any) {
  return (
    <div className="card">
      <div className="card__wrapper">
        <Image src={props.icon} alt={props.alt} />
        <h3 className="heading__3 text-primary-900 mt-6 mb-1">
          {props.subtitle}
        </h3>
        <p className="text-base text-primary-900">
          <Balancer ratio={0.15} preferNative={false}>
            {props.body}
          </Balancer>
        </p>
      </div>
    </div>
  );
}
