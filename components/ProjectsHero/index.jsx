import { useTranslations } from "next-intl";
import{
  ProjectsHeroSection,
  ProjectsHeroContainer,
  ProjectsHeroBeforeTitle,
  ProjectsHeroTitle,
  ProjectsHeroParagraph
} from "./styled";

export default function ProjectsHero() {
  const t = useTranslations("ProjectsHero");

  return (
    <ProjectsHeroSection>
      <ProjectsHeroContainer>
        <ProjectsHeroBeforeTitle>
          {t("beforeTitle")}
        </ProjectsHeroBeforeTitle>
        <ProjectsHeroTitle>
          {t("title")}
        </ProjectsHeroTitle>
        <ProjectsHeroParagraph>
          {t("description")}
        </ProjectsHeroParagraph>
      </ProjectsHeroContainer>
    </ProjectsHeroSection>
  )
}