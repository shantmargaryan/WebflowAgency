"use client"
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ClientsSection, ClientsContainer, ClientsTitle, ClientsParagraph, Content, SliderContent, Box, Text, Name, Position } from "./styled";
import { Imgs } from "./images";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomeClients() {
  const t = useTranslations("HomeClients");
  const t2 = useTranslations("HomeClients.Items");
  const [homeClients, setHomeClients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("/api/homeClients");
        const { homeClients } = await data.json();
        setHomeClients(homeClients);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };


    fetchData();
  }, []);

  return (
    <ClientsSection>
      <ClientsContainer>
        <Content>
          <ClientsTitle>
            {t("title")}
          </ClientsTitle>
          <ClientsParagraph>
            {t("description")}
          </ClientsParagraph>
        </Content>
        <Swiper
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
        >
          {homeClients.map((item) => (
            <SwiperSlide key={item.id}>
              <Text>
                {t2(item.title)}
              </Text>
              <SliderContent>
                <Image
                  src={Imgs[item.id - 1]?.path}
                  alt={Imgs[item.id - 1]?.alt}
                  width={70}
                  height={70}
                />
                <Box>
                  <Name>
                    {t2(item.name)}
                  </Name>
                  <Position>
                    {t2(item.position)}
                  </Position>
                </Box>
              </SliderContent>
            </SwiperSlide>
          ))}
        </Swiper>
      </ClientsContainer>
    </ClientsSection>
  )
}