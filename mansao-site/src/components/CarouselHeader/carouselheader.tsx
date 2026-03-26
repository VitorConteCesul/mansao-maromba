import { Box, Carousel, Text } from "@chakra-ui/react";
import { useState } from "react";
import NextImage from "next/image";

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
    const [currentIndex, setCurrentIndex] = useState(1);

    return (
        <Box w="100%">
            <Carousel.Root
                slideCount={items.length}
                w="100%"
                allowMouseDrag
                onPageChange={(e) => setCurrentIndex(e.page + 1)}
                autoplay={{ delay: 6000 }}
            >
                <Carousel.ItemGroup>
                    {items.map((item, index) => (
                        <Carousel.Item key={index} index={index}>
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
                                    
                                    draggable={false}
                                />
                            </Box>
                        </Carousel.Item>
                    ))}
                </Carousel.ItemGroup>

                <Carousel.Control
                    marginTop="12px"
                    justifyContent="center"
                    gap={5}
                >
                    <Carousel.PrevTrigger cursor="pointer" asChild>
                        <NextImage
                            src="/assets/arrowLeft.svg"
                            alt="Anterior"
                            width={24}
                            height={24}
                            objectFit="cover"
                        />
                    </Carousel.PrevTrigger>

                    <Text color="#000">
                        {currentIndex} / {items.length}
                    </Text>

                    <Carousel.NextTrigger cursor="pointer" asChild>
                        <NextImage
                            src="/assets/arrowRight.svg"
                            alt="Próximo"
                            width={24}
                            height={24}
                            objectFit="cover"
                        />
                    </Carousel.NextTrigger>
                </Carousel.Control>
            </Carousel.Root>
        </Box>
    );
}
