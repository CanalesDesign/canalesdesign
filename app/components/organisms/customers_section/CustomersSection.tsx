import { CustomersIntro, CustomersLogos } from './CustomersSectionData';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

export default function CustomersSection() {
  return (
    <section className="customers__section bg-primary-200">
      <div className="customers__section--wrapper section__wrapper">
        {CustomersIntro.map(({ id, overline, headline, body }) => {
          return (
            <div
              className="customers__section--intro flex flex-col items-center"
              key={id}
            >
              <p className="text__overline">{overline}</p>
              <h2 className="heading__2 text-primary-900 text-center">
                <Balancer>{headline}</Balancer>
              </h2>
              <p className="body__xlarge text-primary-900 text-center mt-6 lg:mt-8 mb-12 lg:mb-0 max-w-2xl ">
                <Balancer>{body}</Balancer>
              </p>
            </div>
          );
        })}
        <div className="customers__logos--content grid grid-cols-2 md:grid-cols-6 gap-6 items-center mt-2 lg:mt-16">
          {CustomersLogos.map(({ id, customer, alt }) => {
            return (
              <div className="customers w-[150px] justify-self-center" key={id}>
                <Image src={customer} alt={alt} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
