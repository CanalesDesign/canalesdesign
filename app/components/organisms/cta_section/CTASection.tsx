import Balancer from 'react-wrap-balancer';
import ButtonPrimary from '../../atoms/Button';
import CTAContent from './CTAData';

export default function CTASection() {
  return (
    <section id="cta__section" className="cta__section bg-primary-200">
      <div className="cta__section--wrapper section__wrapper">
        {CTAContent.map((item) => {
          return (
            <div
              className="cta__section--content md:text-center md:max-w-4xl md:m-auto"
              key={item.id}
            >
              <h2 className="heading__2 text-primary-900">{item.headline}</h2>
              <p className="body__xlarge text-primary-900 mt-6 lg:mt-8 mb-12 lg:mb-0">
                <Balancer>{item.body}</Balancer>
              </p>
              <div className="btn__container w-fit md:m-auto">
                <ButtonPrimary
                  path={item.path}
                  icon={item.icon}
                  cta={item.cta}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
