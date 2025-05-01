import { useTranslations } from "next-intl";
import Image from "next/image";
import { AboutProjectWrapper, AboutProjectContainer, AboutProjectTitle, AboutProjectParagraph, AboutProjectList, AboutProjectListItem } from "./styled";
export default function AboutProject({ id, imgUrl, alt }) {
  const t = useTranslations("ProjectAbout");
  const items = [
    "firstSmallText",
    "secondSmallText",
    "thirdSmallText"
  ]

  return (
    <AboutProjectWrapper>
      <AboutProjectContainer>
        <AboutProjectTitle>
          {t("title")}
        </AboutProjectTitle>
        <AboutProjectParagraph>
          {t(`items.${id}.description`)}
        </AboutProjectParagraph>
        <AboutProjectList>
          {
            items.map((item) => (
              <AboutProjectListItem key={item}>
                <AboutProjectParagraph>
                  {t(`items.${id}.${item}`)}
                </AboutProjectParagraph>
              </AboutProjectListItem>
            ))}
        </AboutProjectList>
        <Image src={imgUrl}
          alt={alt}
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }} />
      </AboutProjectContainer>
    </AboutProjectWrapper>
  )
}