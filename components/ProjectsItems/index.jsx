import { useTranslations } from "next-intl";
import { MoveRight as ArrowRight } from "lucide-react";
import { Images } from "./images";
import {
  ProjectsSection,
  ProjectsContainer,
  ProjectsTitle,
  List,
  Item,
  SmallTitle,
  TitleLink,
  Link,
  Page,
  Language,
  Development,
  ProjectsImg,
  ImgLink,
  Price
} from "./styled";

export default function ProjectsItems({ posts }) {
  const t = useTranslations("ProjectsItems");

  return (
    <ProjectsSection>
      <ProjectsContainer>
        <ProjectsTitle>
          {t("currentTitle")}
        </ProjectsTitle>
        <List>
          {posts?.map((post) => (
            <Item key={post.id}>
              <ImgLink href={`/projects/${post?.id}`}>
                <Page>
                  {t(post?.page)}
                </Page>
                <ProjectsImg 
                  src={Images[post?.id - 1]?.path}
                  alt={Images[post?.id - 1]?.alt}
                   width={700}
                  height={700}
                  style={{ width: '100%', height: 'auto' }}
                />
              </ImgLink>
              <SmallTitle>
                <TitleLink href={`/projects/${post?.id}`}>
                  {t(post?.title)}
                </TitleLink>
              </SmallTitle>
              <Language>
                {t(post?.language)}
              </Language>
              <Development>
                {t(post?.development)}
              </Development>
              <Price>
                {t(post?.price)}
              </Price>
              <Link href={post?.href} target="_blank">
                {t("viewMore")}
                <ArrowRight />
              </Link>
            </Item>
          ))}
        </List>
      </ProjectsContainer>
    </ProjectsSection>
  );
}