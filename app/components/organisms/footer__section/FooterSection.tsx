import FooterContent from './FooterData';
import Link from 'next/link';

export default function FooterSection() {
  return (
    <section className="footer__section bg-neutrals-600">
      <div className="footer__section--wrapper section__wrapper">
        {FooterContent.map((item) => {
          return (
            <div className="footer__section--content" key={item.id}>
              <h3 className="heading__3">{item.headline}</h3>
              <p className="body__xlarge">{item.body}</p>
              <div className="links__wrapper">
                <Link href={item.path}>{item.cta}</Link>
                <span className="instagram">
                  <Link href={item.instagrampath}>{item.instagramicon}</Link>
                </span>
                <span className="linkedin">
                  <Link href={item.linkedinpath}>{item.linkedinicon}</Link>
                </span>
                <span className="facebook">
                  <Link href={item.facebookpath}>{item.facebookicon}</Link>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
