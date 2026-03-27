import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import NextImage from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const items = [
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/themes/morelia/2-slide-1770649919938-5336565029-fe653c716ffc7b368923b09f4112d0b01770649921-1920-1920.webp?6502268024259766674",
        alt: "Carrosel 1",
    },
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/themes/morelia/2-slide-1769624527429-4951018497-21c7219a6321af1574f2601fd5d5272b1769624531-1920-1920.webp?6502268024259766674",
        alt: "Carrosel 2",
    },
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/themes/morelia/2-slide-1769624527431-8404873176-b96bb7237340d5f37a37e3fe7e54e30d1769624531-1920-1920.webp?6502268024259766674",
        alt: "Carrosel 3",
    },
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/themes/morelia/2-slide-1769624527432-6183017191-3cd68bf1750f692bce2c2e4d6f72c16c1769624532-1920-1920.webp?6502268024259766674",
        alt: "Carrosel 4",
    },
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/themes/morelia/2-slide-1769624527433-3645247440-726353e100cb08e5a5256a90f4c579fe1769624532-1920-1920.webp?6502268024259766674",
        alt: "Carrosel 5",
    },
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/themes/morelia/2-slide-1769624527433-8494406820-72d899ec573a1fa9b396b88bd35d2e801769624533-1920-1920.webp?6502268024259766674",
        alt: "Carrosel 6",
    },
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/themes/morelia/2-slide-1769624527433-5914827225-e4c1d4329210ad45c377951060e67d151769624533-1920-1920.webp?6502268024259766674",
        alt: "Carrosel 7",
    },
];

export default function CarouselHeader() {
    const [heeaderCurrentIndex, setHeaderCurrentIndex] = useState(1);

    return (
        <Box w="100%" as="section">
            <Swiper
                modules={[Autoplay, Navigation]}
                slidesPerView={1}
                allowTouchMove={true}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                onSlideChange={(swiper) => setHeaderCurrentIndex(swiper.realIndex + 1)}
                navigation={{
                    prevEl: ".custom-prev-button",
                    nextEl: ".custom-next-button",
                }}
                loop={true}
                style={{ width: "100%" }}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Box w="100%" h="auto">
                            <NextImage
                                src={item.src}
                                alt={item.alt}
                                width={1920}
                                height={543}
                                sizes="100vw"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                }}
                                
                            />
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Flex
                marginTop="20px"
                justifyContent="center"
                alignItems="center"
                gap={5}
            >
                <Box className="custom-prev-button" cursor="pointer" display="flex">
                    <NextImage
                        src="/assets/arrowLeft.svg"
                        alt="Anterior"
                        width={24}
                        height={24}
                        style={{ objectFit: "cover" }}
                    />
                </Box>

                <Text color="#000">
                    {heeaderCurrentIndex} / {items.length}
                </Text>

                <Box className="custom-next-button" cursor="pointer" display="flex">
                    <NextImage
                        src="/assets/arrowRight.svg"
                        alt="Próximo"
                        width={24}
                        height={24}
                        style={{ objectFit: "cover" }}
                    />
                </Box>
            </Flex>
        </Box>
    );
}