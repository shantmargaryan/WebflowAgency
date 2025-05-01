import { useTranslations } from "next-intl";
import {
  BenefitsSection,
  BenefitsContainer,
  BenefitsTitle,
  BenefitsList,
  BenefitsItem,
  BenefitsImg,
  SmallParagraph,
  SmallTitle,
} from "./styled";

export default function AboutBenefits() {
  const t = useTranslations("AboutBenefits")
  const t2 = useTranslations("AboutBenefits.Items")

  return (
    <BenefitsSection>
      <BenefitsContainer>
        <BenefitsTitle>
          {t("title")}
        </BenefitsTitle>
        <BenefitsList>
          <BenefitsItem>
            <BenefitsImg path="/svg/HandsOnApproach.svg" alt="icons"
              width={30}
              height={30}
                          />
            <SmallTitle>
              {t2("title")}
            </SmallTitle>
            <SmallParagraph>
              {t2("description")}
            </SmallParagraph>
          </BenefitsItem>
          <BenefitsItem>
            <BenefitsImg path="/svg/TemplateCustmization.svg" alt="icons"
              width={30}
              height={30}
                          />
            <SmallTitle>
              {t2("secoundTitle")}
            </SmallTitle>
            <SmallParagraph>
              {t2("secoundDescription")}
            </SmallParagraph>
          </BenefitsItem>
          <BenefitsItem>
            <BenefitsImg path="/svg/UsesClientFirst.svg" alt="icons"
              width={30}
              height={30}
                          />
            <SmallTitle>
              {t2("thirdTitle")}
            </SmallTitle>
            <SmallParagraph>
              {t2("thirdDescription")}
            </SmallParagraph>
          </BenefitsItem>
        </BenefitsList>
      </BenefitsContainer>
    </BenefitsSection>
  )
}