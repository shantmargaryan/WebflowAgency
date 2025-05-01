import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Imgs } from "./images";
import { ArrowRight } from "lucide-react";
import { BlogSection, BlogContainer, BlogTitle, List, Item, ItemTitle, ItemParagraph, BlogImg, ReadMore } from "./styled";



export default async function HomeBlog() {
  const t = useTranslations("HomeBlogItems");
  const data = await fetch("/api/homeBlog");
  const { homeBlog } = await data.json();

  return (
    <BlogSection>
      <BlogContainer>
        <BlogTitle>
          {t("currentTitle")}
        </BlogTitle>
        <List>
          {
            homeBlog?.map(({ id, title, description }) => (
              <Item key={id}>
                <Link href="#">
                  <BlogImg
                    path={Imgs[id - 1].path}
                    alt={Imgs[id - 1].alt}
                    width={0}
                    height={0}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Link>
                <ItemTitle>
                  {t(title)}
                </ItemTitle>
                <ItemParagraph>
                  {t(description)}
                </ItemParagraph>
                <ReadMore href="#">
                  {t("link")}
                  <ArrowRight />
                </ReadMore>
              </Item>
            ))
          }
        </List>
      </BlogContainer>
    </BlogSection>
  );
}