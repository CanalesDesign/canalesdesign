import Image from 'next/image';
import ButtonPrimary from '../../atoms/Button';
import HeroContent from './HeroData';
import Balancer from 'react-wrap-balancer';
import GoogleBadge from '../../molecules/GoogleBadge';

export default function HeroSection() {
  return (
    <section className="hero__section">
      <div className="hero__section--container section__wrapper flex flex-col gap-9">
        {HeroContent.map(
          ({ id, overline, headline, body, icon, cta, link, img, alt }) => {
            return (
              <div
                className="hero__section--content md:flex md:gap-16 md:items-center"
                key={id}
              >
                <div className="hero__section--content-copy md:w-1/2">
                  <p className="text__overline">{overline}</p>
                  <h1 className="heading__1 md:hidden">{headline}</h1>
                  <h1 className="heading__1 hidden md:inline">
                    <Balancer>{headline}</Balancer>
                  </h1>
                  <p className="body__large mt-6 md:mt-8">{body}</p>
                  <ButtonPrimary path={link} icon={icon} cta={cta} />
                </div>
                <div className="hero__section--content-image md:w-1/2 mt-12 md:mt-0">
                  <Image
                    src={img}
                    alt={alt}
                    priority={true}
                    className="rounded-xl opacity-75"
                  />
                </div>
              </div>
            );
          }
        )}
        <div className="hero__footer md:flex md:justify-between md:gap-16">
          <div className="google__rating md:w-1/2">
            <GoogleBadge />
          </div>
          <p className="caption w-1/2 max-w-40 hidden md:inline">
            <Balancer>
              Rodrigo Canales, designer gráfico e digital há mais de 30 anos.
            </Balancer>
          </p>
        </div>
      </div>
    </section>
  );
}
