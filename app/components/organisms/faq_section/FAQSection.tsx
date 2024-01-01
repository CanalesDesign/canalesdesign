import Balancer from 'react-wrap-balancer';
import { FAQIntro, FAQQuestions } from './FAQData';

export default function FAQSection() {
  return (
    <section className="faq__section bg-primary-300">
      <div className="faq__section--wrapper section__wrapper">
        {FAQIntro.map(({ id, overline, headline }) => {
          return (
            <div className="faq__section--intro mb-16" key={id}>
              <p className="text__overline">{overline}</p>
              <h2 className="heading__2 text-primary-900">
                <Balancer>{headline}</Balancer>
              </h2>
            </div>
          );
        })}
        <div className="responsive__div--small">
          <div className="faq__section--questions"></div>
        </div>

        <div className="responsive__div--large hidden md:inline">
          <div className="faq__section--questions md:inline grid">
            {FAQQuestions.map(({ id, number, question, answer }) => {
              return (
                <div
                  className="faq__section--card bg-primary-200 rounded-xl py-10 px-8"
                  key={id}
                >
                  <span className="number text-[2.5rem] leading-[2.5rem] text-primary-500">
                    {number}
                  </span>
                  <h3 className="heading__3 mt-6 mb-4">{question}</h3>
                  <p className="body__large">{answer}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
