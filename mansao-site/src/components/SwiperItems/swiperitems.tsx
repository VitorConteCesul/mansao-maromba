"use client";

import { Box, Text, Flex, Link as ChakraLink } from "@chakra-ui/react";
import NextImage from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import NextLink from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LuShoppingBag } from "react-icons/lu";

interface SwiperItemsProps {
    items: {
        src: string;
        href: string;
        alt: string;
        price: string;
    }[];
}

export default function SwiperItems({ items }: SwiperItemsProps) {
    const [currentIndex, setCurrentIndex] = useState(1);

    return (
        <Box maxWidth={"1020px"} marginX={"auto"}>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={4}
                slidesPerGroup={1}
                loop={true}
                navigation={{
                    prevEl: ".custom-prev-button-item",
                    nextEl: ".custom-next-button-item",
                }}
                onSlideChange={(swiper) =>
                    setCurrentIndex(swiper.realIndex + 1)
                }
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Box
                            height="100%"
                            bg="white"
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            position="relative"
                            padding="16px"
                        >
                            <ChakraLink
                                as={NextLink}
                                href={item.href}
                                width="100%"
                            >
                                <Box
                                    overflow="hidden"
                                    aspectRatio={"1/1"}
                                    transition="transform 0.3s ease"
                                    _hover={{
                                        transform: "scale(1.05)",
                                        cursor: "pointer",
                                    }}
                                    width="100%"
                                    display="flex"
                                    justifyContent="center"
                                >
                                    <NextImage
                                        src={item.src}
                                        alt={item.alt}
                                        width={500}
                                        height={500}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            objectFit: "contain",
                                            aspectRatio: "1/1",
                                        }}
                                    />
                                </Box>
                            </ChakraLink>
                            <Box
                                boxSizing={"border-box"}
                                display={"block"}
                                height={"auto"}
                                paddingY={"10px"}
                                width={"auto"}
                                textAlign={"center"}
                            >
                                <ChakraLink
                                    as={NextLink}
                                    href={item.href}
                                    color={"#000"}
                                    textDecoration={"none"}
                                    flexDirection={"column"}
                                >
                                    <Text
                                        display={"flow-root"}
                                        marginBottom={"2px"}
                                        overflowX={"hidden"}
                                        overflowY="hidden"
                                        fontSize={"14px"}
                                        lineHeight={"19px"}
                                        textAlign={"center"}
                                        cursor={"pointer"}
                                        opacity={0.8}
                                        _hover={{
                                            opacity: 0.5,
                                        }}
                                        transition={"all 0.35s ease"}
                                        textDecoration={"none"}
                                    >
                                        {item.alt}
                                    </Text>
                                    <Text
                                        as="span"
                                        fontSize={"14px"}
                                        lineHeight={"16px"}
                                        textAlign={"center"}
                                        cursor={"pointer"}
                                    >
                                        R${item.price}
                                    </Text>
                                    <Flex direction={"row"} gap={2}>
                                        <Text
                                            fontSize={"16px"}
                                            textAlign={"center"}
                                            textDecoration={"underline"}
                                            cursor="pointer"
                                            fontWeight={"400"}
                                        >
                                            Comprar{" "}
                                        </Text>
                                        <LuShoppingBag />
                                    </Flex>
                                </ChakraLink>
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}

                <Flex
                    justifyContent="center"
                    alignItems="center"
                    gap={5}
                >
                    <Box
                        className="custom-prev-button-item"
                        cursor="pointer"
                        display="flex"
                    >
                        <NextImage
                            src="/assets/arrowLeft.svg"
                            alt="Anterior"
                            width={24}
                            height={24}
                            style={{ objectFit: "cover" }}
                        />
                    </Box>

                    <Text color="#000">
                        {currentIndex} / {items.length}
                    </Text>

                    <Box
                        className="custom-next-button-item"
                        cursor="pointer"
                        display="flex"
                    >
                        <NextImage
                            src="/assets/arrowRight.svg"
                            alt="Próximo"
                            width={24}
                            height={24}
                            style={{ objectFit: "cover" }}
                        />
                    </Box>
                </Flex>
            </Swiper>
        </Box>
    );
}
