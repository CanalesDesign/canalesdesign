import Balancer from 'react-wrap-balancer';
import { BenefitsContent, BenefitsCards } from './BenefitsContent';
import Card from '../../molecules/Card';

export default function BenefitsSection() {
  return (
    <section className="benefits__section bg-primary-300">
      <div className="benefits__section--container section__wrapper flex">
        <div className="benefits__intro lg:w-1/3">
          {BenefitsContent.map(({ id, overline, headline, body }) => {
            return (
              <div className="intro__content" key={id}>
                <p className="text__overline">{overline}</p>
                <h2 className="heading__2 text-primary-900 lg:mb-8">
                  <Balancer>{headline}</Balancer>
                </h2>
                <p className="body__large text-primary-900">
                  <Balancer>{body}</Balancer>
                </p>
              </div>
            );
          })}
        </div>
        <div className="benefits__cards--wrapper w-2/3">
          {BenefitsCards.map(({ id, icon, subtitle, body }) => {
            return (
              <div
                className="benefits__card bg-primary-200 rounded-xl px-8 py-12"
                key={id}
              >
                <Card icon={icon} subtitle={subtitle} body={body} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
