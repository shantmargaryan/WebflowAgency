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
import { svgs } from "./svgs";
export default function AboutBenefits() {
  const t = useTranslations("AboutBenefits")
  const t2 = useTranslations("AboutBenefits.Items")

  const items = [
    "firstSmallText",
    "secondSmallText",
    "thirdSmallText"
  ]

  return (
    <BenefitsSection>
      <BenefitsContainer>
        <BenefitsTitle>
          {t("title")}
        </BenefitsTitle>
        <BenefitsList>
          {items.map((item, index) => (
            <BenefitsItem key={item}>
              <BenefitsImg
                src={svgs[index]?.src}
                alt={svgs[index]?.alt}
                width={30}
                height={30}
              />
              <SmallTitle>
                {t2(`${item}.title`)}
              </SmallTitle>
              <SmallParagraph>
                {t2(`${item}.description`)}
              </SmallParagraph>
            </BenefitsItem>
          ))}
        </BenefitsList>
      </BenefitsContainer>
    </BenefitsSection>
  )
}