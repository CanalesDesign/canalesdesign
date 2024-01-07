import Balancer from 'react-wrap-balancer';
import { BenefitsContent, BenefitsCards } from './BenefitsContent';
import Card from '../../molecules/Card';

export default function BenefitsSection() {
  return (
    <section className="benefits__section bg-primary-300">
      <div className="benefits__section--container section__wrapper lg:flex lg:gap-8">
        <div className="benefits__intro lg:w-1/3">
          {BenefitsContent.map(({ id, overline, headline, body }) => {
            return (
              <div className="intro__content" key={id}>
                <p className="text__overline text-primary-900">{overline}</p>
                <h2 className="heading__2 text-primary-900">
                  <Balancer>{headline}</Balancer>
                </h2>
                <p className="body__xlarge text-primary-900 mt-6 lg:mt-8 mb-12 lg:mb-0">
                  <Balancer>{body}</Balancer>
                </p>
              </div>
            );
          })}
        </div>
        <div className="benefits__cards--wrapper lg:grid lg:w-2/3">
          {BenefitsCards.map(({ id, alt, icon, subtitle, body }) => {
            return (
              <div
                className="benefits__card bg-primary-200 rounded-xl px-6 py-10 lg:px-8 lg:py-12 mb-6 last:mb-0 lg:mb-0"
                key={id}
              >
                <Card icon={icon} alt={alt} subtitle={subtitle} body={body} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
