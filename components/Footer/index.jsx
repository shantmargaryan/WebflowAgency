"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import Logo from "../Logo";
import { Link } from "@/i18n/navigation";
import {
  FooterWrapper, FooterContainer, FooterParagraph, Title, SocialList, Item, Wrapper, Contact,
  ContactTitle,
  ContactsLinks,
  ScrollToTop
} from "./styled";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function Footer() {
  const [isvisible, setIsVisible] = useState(false);
  const t = useTranslations('Footer');

  const scrollToTop = () => {
    window?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <FooterWrapper>
      <FooterContainer>
        <Wrapper>
          <div>
            <Logo />
            <FooterParagraph>
              {t('smallDescription')}
            </FooterParagraph>
          </div>
          <div>
            <Title>
              {t('title')}
            </Title>
            <FooterParagraph>
              {t('largeDescription')}
            </FooterParagraph>
            <SocialList>
              <Item>
                <Link href="https://www.facebook.com/" target="_blank">
                  <FacebookOutlinedIcon />
                </Link>
              </Item>
              <Item>
                <Link href="https://www.instagram.com/">
                  <InstagramIcon />
                </Link>
              </Item>
            </SocialList>
          </div>
        </Wrapper>
        <Contact>
          <div>
            <ContactTitle>
              {t('emailTitle')}
            </ContactTitle>
            <ContactsLinks href="mailto:shnat212205@gmail.com">
              shnat212205@gmail.com
            </ContactsLinks>
          </div>
          <div>
            <ContactTitle>
              {t('callTitle')}
            </ContactTitle>
            <ContactsLinks href="tel:+37455212205">
              +37455212205
            </ContactsLinks>
          </div>
        </Contact>
        <ScrollToTop onClick={scrollToTop} isvisible={isvisible ? "true" : undefined}>
          <ExpandLessIcon />
        </ScrollToTop>
      </FooterContainer>
    </FooterWrapper>
  )
}
