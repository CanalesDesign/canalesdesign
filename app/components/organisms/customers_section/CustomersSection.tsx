import { CustomersIntro, CustomersLogos } from './CustomersSectionData';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

export default function CustomersSection() {
  return (
    <section className="customers__section bg-primary-200">
      <div className="customers__section--wrapper section__wrapper">
        {CustomersIntro.map(({ id, overline, headline, body }) => {
          return (
            <div className="customers__section--intro" key={id}>
              <p className="text__overline">{overline}</p>
              <div className="headline__body--wrapper flex justify-between ">
                <h2 className="heading__2 text-primary-900 w-10/12">
                  <Balancer>{headline}</Balancer>
                </h2>
                <p className="body__xlarge text-primary-900 w-1/2">{body}</p>
              </div>
            </div>
          );
        })}
        <div className="customers__logos--content flex justify-between gap-2 mt-10">
          {CustomersLogos.map(({ id, customer, alt }) => {
            return (
              <div className="customers" key={id}>
                <Image src={customer} alt={alt} width={200} height={200} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
