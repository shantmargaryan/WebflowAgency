"use client"
import { useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";
import {
  OurMissionSection,
  OurMissionContainer,
  Wrapper,
  Content,
  BeforeTitle,
  Title,
  OurMissionDecoration
} from "./styled";

export default function AboutOurMission() {
  const t = useTranslations("AboutMission");
  const [imageLoading, setImageLoading] = useState(true);
  return (
    <OurMissionSection>
      <OurMissionContainer>
        <Wrapper>
          <Content>
            <BeforeTitle>
              {t("beforeTitle")}
            </BeforeTitle>
            <Title>
              {t("title")}
            </Title>
            <OurMissionDecoration>
              {t("description")}
            </OurMissionDecoration>
          </Content>
          <Image src="/imgs/OurMissionImg .png" alt="subdivision"
            width={700}
            height={700}
            style={{ width: '100%', height: 'auto' }}
            onLoad={() => setImageLoading(false)}
            imageLoading={imageLoading}
            priority={false}
          />
        </Wrapper>
        <Wrapper>
          <Image src="/imgs/OurVisionImg.png" alt="groupWorks"
            width={700}
            height={700}
            style={{ width: '100%', height: 'auto' }}
            onLoad={() => setImageLoading(false)}
            imageLoading={imageLoading}
            priority={false}
          />
          <Content>
            <BeforeTitle>
              {t("secoundBeforeTitle")}
            </BeforeTitle>
            <Title>
              {t("secoundTitle")}
            </Title>
            <OurMissionDecoration>
              {t("secoundDescription")}
            </OurMissionDecoration>
          </Content>
        </Wrapper>
      </OurMissionContainer>
    </OurMissionSection>
  )
}