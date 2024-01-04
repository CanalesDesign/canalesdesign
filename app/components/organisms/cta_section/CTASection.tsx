import Balancer from 'react-wrap-balancer';
import ButtonPrimary from '../../atoms/Button';
import CTAContent from './CTAData';

export default function CTASection() {
  return (
    <section id="cta__section" className="cta__section">
      <div className="cta__section--wrapper section__wrapper">
        {CTAContent.map((item) => {
          return (
            <div
              className="cta__section--content text-center md:max-w-4xl md:m-auto"
              key={item.id}
            >
              <h2 className="heading__2 text-primary-500">{item.headline}</h2>
              <p className="body__xlarge text-primary-400 mt-6 lg:mt-8 mb-12 lg:mb-0">
                <Balancer>{item.body}</Balancer>
              </p>
              <div className="btn__container w-fit m-auto">
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
