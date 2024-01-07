import { FooterContent, FooterContact, NextContent } from './FooterData';
import Link from 'next/link';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

export default function FooterSection() {
  return (
    <section className="footer__section bg-neutrals-500">
      <div className="footer__section--wrapper section__wrapper md:flex justify-between">
        {FooterContent.map((item) => {
          return (
            <div
              className="footer__section--content md:max-w-[65%] md:flex gap-10 items-center"
              key={item.id}
            >
              <div className="footer__section--content-photo">
                <Image
                  className="rounded-xl"
                  src={item.photo}
                  alt={item.alt}
                  width={430}
                  height={430}
                ></Image>
              </div>
              <div className="footer__section--copy mt-10 md:mt-0">
                <h3 className="heading__3 text-primary-400 mb-4">
                  <Balancer>{item.headline}</Balancer>
                </h3>
                <p className="body__base leading-x-loose text-primary-400">
                  <Balancer>{item.body}</Balancer>
                </p>
                <div className="links__wrapper flex gap-3 items-center mt-5">
                  <Link
                    className="link__portfolio uppercase text-x-sm tracking-widest font-bold"
                    href={item.path}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item.cta}
                  </Link>
                  <span className="instagram">
                    <Link
                      href={item.instagrampath}
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label="{item.instagramlinklabel}"
                    >
                      {item.instagramicon}
                    </Link>
                  </span>
                  <span className="linkedin">
                    <Link
                      href={item.linkedinpath}
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label="{item.linkedinlinklabel}"
                    >
                      {item.linkedinicon}
                    </Link>
                  </span>
                  <span className="facebook">
                    <Link
                      href={item.facebookpath}
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label="{item.facebooklinklabel}"
                    >
                      {item.facebookicon}
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        <div className="footer__section--contact w-max-[15%] mt-16 md:mt-3 md:flex md:flex-col justify-between">
          {FooterContact.map((item) => {
            return (
              <div className="footer__section--contact-content" key={item.id}>
                <ul className="text__sm tracking-wide text-primary-500">
                  <li className="flex gap-1">
                    email:
                    <Link
                      className="text-secondary-500"
                      href={item.emaillink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.email}
                    </Link>
                  </li>
                  <li className="flex gap-1">
                    whatsapp:
                    <Link
                      className="text-secondary-500"
                      href={item.whatsapplink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.whatsapp}
                    </Link>
                  </li>
                  <li className="flex gap-1">
                    telegram:
                    <Link
                      className="text-secondary-500"
                      href={item.telegramlink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.telegram}
                    </Link>
                  </li>
                </ul>
              </div>
            );
          })}
          <div className="footer__section--next mt-16 md:mt-0">
            {NextContent.map((item) => {
              return (
                <div className="footer__next--content" key={item.id}>
                  <p className="text-x-sm text-primary-700 mb-2 tracking-wider">
                    {item.headline}
                  </p>
                  <Image
                    src={item.logo}
                    alt={item.alt}
                    width={120}
                    height={26}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
