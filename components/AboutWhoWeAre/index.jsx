"use client"
import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  WhoWeAreSection,
  WhoWeAreContainer,
  Wrapper,
  Content,
  BeforeTitle,
  Title,
  Description,
  WhoWeAreImg
} from "./styled";

export default function AboutWhoWeAre() {
  const t = useTranslations("AboutWhoWeAre");
  const [imageLoading, setImageLoading] = useState(true);
  return (
    <WhoWeAreSection>
      <WhoWeAreContainer>
        <Wrapper>
          <Content>
            <BeforeTitle>
              {t("beforeTitle")}
            </BeforeTitle>
            <Title>
              {t("title")}
            </Title>
            <Description>
              {t("description")}
            </Description>
          </Content>
          <Content>
            <Title>
              {t("secoundTitle")}
            </Title>
            <Description>
              {t("secoundDescription")}
            </Description>
          </Content>
        </Wrapper>
        <WhoWeAreImg src="/imgs/OfficeImg1.jpg"
          alt="whoWeAre"
          width={700}
          height={700}
          style={{ width: '100%', height: 'auto' }}
          onLoad={() => setImageLoading(false)}
          imageLoading={imageLoading}
          priority={false}
        />
      </WhoWeAreContainer>
    </WhoWeAreSection>
  );
}