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
import IntersectionComponent from "@/Utils/Intersection";

export default function AboutOurMission() {
  const t = useTranslations("AboutMission");
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersect = () => {
    setIsVisible(true);
  };

  return (
    <OurMissionSection>
      <IntersectionComponent onIntersect={handleIntersect} />
      <OurMissionContainer>
        <Wrapper>
          <Content isVisible={isVisible}>
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
          <OurMissionImg
            isVisible={isVisible}
            src="/imgs/OfficeImg6.jpg"
            alt="subdivision"
            width={700}
            height={700}
            style={{ width: '100%', height: 'auto' }}
            priority={false}
          />
        </Wrapper>
        <Wrapper>
          <OurMissionImg
            isVisible={isVisible}
            src="/imgs/OfficeImg4.jpg"
            alt="groupWorks"
            width={700}
            height={700}
            style={{ width: '100%', height: 'auto' }}
            priority={false}
          />
          <Content isVisible={isVisible}>
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