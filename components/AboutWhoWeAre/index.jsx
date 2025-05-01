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
        <WhoWeAreImg src="/imgs/WhoWeAreImg.png"
          alt="whoWeAre"
           width={700}
          height={700}
          style={{ width: '100%', height: 'auto' }}
        />
      </WhoWeAreContainer>
    </WhoWeAreSection>
  );
}