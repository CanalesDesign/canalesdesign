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
          ({
            id,
            overline,
            headline,
            body,
            icon,
            cta,
            link,
            img,
            alt,
            rel,
            target,
          }) => {
            return (
              <div
                className="hero__section--content lg:flex lg:gap-6 lg:items-center"
                key={id}
              >
                <div className="hero__section--content-copy lg:w-1/2">
                  <p className="text__overline">{overline}</p>
                  <h1 className="heading__1">
                    <Balancer>{headline}</Balancer>
                  </h1>
                  <p className="body__xlarge mt-6 lg:mt-8">
                    <Balancer ratio={0.35} preferNative={false}>
                      {body}
                    </Balancer>
                  </p>
                  <ButtonPrimary
                    path={link}
                    icon={icon}
                    cta={cta}
                    rel={rel}
                    target={target}
                  />
                </div>
                <div className="hero__section--content-image lg:w-1/2 mt-12 lg:mt-0">
                  <Image
                    src={img}
                    alt={alt}
                    priority={true}
                    className="rounded-xl opacity-85 w-full"
                  />
                </div>
              </div>
            );
          }
        )}
        <div className="hero__footer lg:flex lg:justify-between lg:gap-16">
          <div className="google__rating md:w-1/2">
            <GoogleBadge />
          </div>
          <p className="body__x-sm w-1/2 max-w-40 hidden lg:inline">
            <Balancer>
              <strong>Rodrigo Canales</strong>, designer gráfico e digital há
              mais de 30 anos.
            </Balancer>
          </p>
        </div>
      </div>
    </section>
  );
}
