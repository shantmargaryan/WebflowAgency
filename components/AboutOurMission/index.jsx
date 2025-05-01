import { useTranslations } from "next-intl";
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
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto' }}
          />
        </Wrapper>
        <Wrapper>
          <Image src="/imgs/OurVisionImg.png" alt="groupWorks"
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto' }}
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