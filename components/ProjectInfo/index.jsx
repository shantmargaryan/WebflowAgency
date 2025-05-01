import { useTranslations } from "next-intl";
import { ProjectInfoWrapper, ProjectInfoImg, ProjectInfoContainer, ProjectInfoList, ProjectInfoListItem, ProjectInfoTitle, ProjectInfoSpan } from "./styled";
export default function ProjectInfo({ img, alt }) {
  const t = useTranslations("ProjectsItems");
  const t2 = useTranslations("ProjectsItems.ProjectAboutInfo");
  const items = [
    "language",
    "development",
    "price"
  ]

  return (
    <ProjectInfoWrapper>
      <ProjectInfoContainer>
        {img && (
          <ProjectInfoImg src={img}
            alt={alt}
            width={700}
            height={700}
            style={{ width: '100%', height: 'auto' }} />
        )}
        <ProjectInfoList>
          {
            items.map((item) => (
              <ProjectInfoListItem
                key={item}>
                <ProjectInfoTitle>
                  {t2(item)}
                </ProjectInfoTitle>
                <ProjectInfoSpan>
                  {t(item)}
                </ProjectInfoSpan>
              </ProjectInfoListItem>
            ))
          }
        </ProjectInfoList>
      </ProjectInfoContainer>
    </ProjectInfoWrapper>
  )
}