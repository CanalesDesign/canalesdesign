import Link from 'next/link';
import GoogleCard from '../../molecules/GoogleCard';
import { ReviewsIntro, Reviews } from './GoogleReviewsData';
import Balancer from 'react-wrap-balancer';
import { FiArrowUpRight } from 'react-icons/fi';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="reviews__section bg-neutrals-600 ">
      <div className="reviews__section--container section__wrapper">
        {ReviewsIntro.map(({ id, overline, headline }) => {
          return (
            <div
              className="reviews__intro text-center flex flex-col items-center mb-16 md:mb-24"
              key={id}
            >
              <p className="text__overline">{overline}</p>
              <h2 className="heading__2 md:w-2/3 text-center text-primary-500">
                <Balancer>{headline}</Balancer>
              </h2>
            </div>
          );
        })}

        <div className="google__cards--wrapper md:grid">
          {Reviews.map(({ id, img, alt, people, logo, testimonial }) => {
            return (
              <div
                className="google__cards mb-6 md:mb-0 rounded-xl bg-neutrals-500"
                key={id}
              >
                <GoogleCard
                  img={img}
                  alt={alt}
                  people={people}
                  logo={logo}
                  testimonial={testimonial}
                />
              </div>
            );
          })}
        </div>
        <div className="link__wrapper">
          <Link
            className="text-x-sm font-bold text-secondary-500 flex items-center gap-1 justify-center w-full mt-12 uppercase tracking-widest"
            href={
              'https://www.google.com/search?q=canales+id+design+gr%C3%A1fico+e+digital&oq=canales&gs_lcrp=EgZjaHJvbWUqBggCECMYJzIGCAAQRRg8MgoIARAuGLEDGIAEMgYIAhAjGCcyBggDEEUYPDIGCAQQRRg8MgYIBRBFGD0yBggGEEUYPDIGCAcQRRg80gEIMzUwOGowajSoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x94dce3ccadd35819:0x6f2e25920029484c,1,,,,'
            }
            target="blank"
          >
            <span>Veja todas as avaliações</span>
            <span>
              <FiArrowUpRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
