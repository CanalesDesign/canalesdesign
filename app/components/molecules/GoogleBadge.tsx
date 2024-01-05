import GoogleLogo from '../atoms/GoogleLogo';
import RatingStar from '../atoms/RatingStar';
import GoogleBadgeContent from './GoogleBadgeContent';
import Link from 'next/link';

export default function GoogleBadge() {
  return (
    <div className="google__badge--wrapper flex flex-col gap-1 md:flex-row md:gap-2">
      <div className="google__badge flex gap-2 items-start">
        <div className="google__logo">
          <GoogleLogo />
        </div>
        <div className="five__stars flex gap-1">
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
        </div>
      </div>
      <div className="google__reviews--text">
        {GoogleBadgeContent.map(({ id, headline, body, link }) => {
          return (
            <div className="google__reviews--link" key={id}>
              <p className="body__x-sm flex gap-1 text-primary-700 tracking-wider">
                {headline}
                <strong>
                  <Link href="#reviews" scroll={true}>
                    {body}
                  </Link>
                </strong>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
