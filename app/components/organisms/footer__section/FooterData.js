import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import NextLogo from '../../../../public/img/next-js-logo.svg';
import RodrigoCanales from '../../../../public/img/rodrigo-canales-designer.webp';

const FooterContent = [
  {
    id: 1,
    photo: RodrigoCanales,
    alt: 'Rodrigo Canales – Designer',
    headline: 'Sua marca, nossa expertise.',
    body: 'Sinta a diferença que a paixão de mais de 30 anos pelo design faz. Rodrigo Canales, designer multidisciplinar, oferece sua especialização em Identidade Visual para criar narrativas visuais autênticas e impactantes para sua marca.',
    instagramicon: <FaInstagram />,
    instagrampath: 'https://www.instagram.com/canales_design',
    instagramlinklabel: 'Instagram Canales Design',
    linkedinicon: <FaLinkedinIn />,
    linkedinpath: 'https://www.linkedin.com/in/rodcanales/',
    linkedinlinklabel: 'Linkedin Rodrigo Canales',
    facebookicon: <FaFacebookF />,
    facebookpath: 'https://web.facebook.com/canalesdesign/',
    facebooklinklabel: 'Facebook Canales Design',
    cta: 'portfolio',
    path: 'https://canalesid.com.br',
  },
];

const FooterContact = [
  {
    id: 1,
    whatsapp: '+55 41 99753.2248',
    whatsapplink: 'https://api.whatsapp.com/send?phone=5541997532248',
    telegram: '@RodrigoCanales',
    telegramlink: 'https://t.me/@RodrigoCanales',
    email: 'contato@canalesdesign.com.br',
    emaillink: 'mailto:contato@canalesdesign.com',
  },
];

const NextContent = [
  {
    id: 1,
    headline: 'Desenvolvido com',
    logo: NextLogo,
    alt: 'Next JS Logo',
  },
];

export { FooterContent, FooterContact, NextContent };
