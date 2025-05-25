"use client"
import { useTranslations } from "next-intl";
import { useState } from "react";
import {
  OurMissionSection,
  OurMissionContainer,
  Wrapper,
  Content,
  BeforeTitle,
  Title,
  OurMissionDecoration,
  OurMissionImg
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
          <OurMissionImg src="/imgs/OfficeImg6.jpg" alt="subdivision"
            width={700}
            height={700}
            style={{ width: '100%', height: 'auto' }}
            onLoad={() => setImageLoading(false)}
            imageLoading={imageLoading}
            priority={false}
          />
        </Wrapper>
        <Wrapper>
          <OurMissionImg src="/imgs/OfficeImg4.jpg" alt="groupWorks"
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