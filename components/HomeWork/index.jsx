"use client";
import { HomeWorkSection, HomeWorkContainer, HomeWorkTitle, HomeWorkParagraph, HomeWorkLink, List, CounterNumber, ListItem, SmallTitle, SmallParagraph } from "./styled";
import { MoveRight as ArrowRight } from "lucide-react";
import { Icon } from "@/Utils/Icon";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function HomeWork() {
  const t = useTranslations("HomeWork");
  const t2 = useTranslations("HomeWork.Items");
  const [homeWorkItems, setHomeWorkItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("/api/homeWorksItems");
        const { homeWorkItems: items } = await data.json();
        setHomeWorkItems(items);
      } catch (error) {
        console.error("Error fetching work items:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <HomeWorkSection>
      <HomeWorkContainer>
        <div>
          <HomeWorkTitle>
            {t("title")}
          </HomeWorkTitle>
          <HomeWorkParagraph>
            {t("description")}
          </HomeWorkParagraph>
          <HomeWorkLink href="#contact">
            {t("link")}
            <ArrowRight />
          </HomeWorkLink>
        </div>
        <List>
          {homeWorkItems.map(({ id, title, description }) => (
            <ListItem key={id}>
              <CounterNumber>
                <Icon icon="pointer" />
              </CounterNumber>
              <SmallTitle>{t2(title)}</SmallTitle>
              <SmallParagraph>{t2(description)}</SmallParagraph>
            </ListItem>
          ))}
        </List>
      </HomeWorkContainer>
    </HomeWorkSection>
  )
}
