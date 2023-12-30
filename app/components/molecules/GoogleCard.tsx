import Image from 'next/image';
import RatingStar from '../atoms/RatingStar';

export default function GoogleCard(props: any) {
  return (
    <div className="google__card">
      <div className="google__card--wrapper px-6 py-8">
        <div className="google__card--header flex justify-between">
          <div className="profile flex items-center gap-3 mb-4">
            <Image
              className="w-10 h-10"
              src={props.img}
              alt={props.alt}
              width={40}
              height={40}
            />
            <h3 className="body__sm font-medium text-primary-500">
              {props.people}
            </h3>
          </div>
          <Image
            className="w-4 h-4"
            src={props.logo}
            alt={props.alt}
            width={16}
            height={16}
          />
        </div>
        <div className="stars flex gap-1">
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
        </div>
        <p className="body__sm leading-x-loose text-primary-400 mt-2">
          {props.testimonial}
        </p>
      </div>
    </div>
  );
}
