"use client";

import CarouselHeader from "@/components/CarouselHeader/carouselheader";
import Header from "@/components/Header/header";
import { Box, Text, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { Carousel } from "@chakra-ui/react";
import NextImage from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import NextLink from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LuShoppingBag } from "react-icons/lu";
import SwiperItems from "@/components/SwiperItems/swiperitems";

const whiskyList = [
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/products/img-20250113-wa0055-b81be437b87f0596c317367908684473-1024-1024.webp",
        alt: "Whisky + Combo 1L (6 unidades)",
        price: "94,90",
        href: "https://gorodamansao.com/produtos/whisky-combo-1l-6-unidades/"
    },
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/products/whisky-combo-job-1l-b479a979fd3eb2d80b17654683945967-480-0.webp",
        alt: "Whisky + Combo Job 1L (6 unidades)",
        price: "99,90",
        href: "https://gorodamansao.com/produtos/whisky-combo-job-1l-6-unidades-1563u/"
    },
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/products/img-20250113-wa0056-2aa5040058fbde1f4a17367909276814-480-0.webp",
        alt: "Gin + Combo Melancia 1L (6 unidades)",
        price: "94,90",
        href: "https://gorodamansao.com/produtos/gin-combo-melancia-1l-6-unidades/"
    },
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/products/img-20250113-wa0057-9481b9342d5d4a5dac17367908987407-480-0.webp",
        alt: "Vodka + Combo 1L (6 unidades)",
        price: "94,90",
        href: "https://gorodamansao.com/produtos/vodka-combo-1l-6-unidades/"
    },
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/products/mansao-maromba-site-a54399d79c33c1893f17296175357834-480-0.webp",
        alt: "Whisky + Combo Maçã Verde 1L (6 unidades)",
        price: "94,90",
        href: "https://gorodamansao.com/produtos/whisky-combo-maca-verde-1l-6-unidades/"
    },
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/products/gin-combo-tigrinho-tropical-1l-d2b13bd2d9a3deb15617480146186080-480-0.webp",
        alt: "Gin + Combo Tigrinho Tropical 1L (6 unidades)",
        price: "94,90",
        href: "https://gorodamansao.com/produtos/gin-combo-tigrinho-tropical-1l-6-unidades/"
    },
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/products/whisky-combo-double-darkness-50c0b27f9d998c5fad17545763653107-480-0.webp",
        alt: "Whisky + Combo Double Darkness 1L (6 unidades)",
        price: "94,90",
        href: "https://gorodamansao.com/produtos/whisky-combo-double-darkness-1l-6-unidades/"
    },
];

export default function Home() {
    return (
        <Box>
            <Header />
            <CarouselHeader/>
            <Box
                as="section"
                position={"relative"}
                boxSizing={"border-box"}
                display={"block"}
                flexBasis={"100%"}
                flexGrow={0}
                flexShrink={0}
                height="100%"
                maxWidth={"100%"}
                width={"100%"}
                paddingY={"25px"}
            >
                <Box width={"100%"} marginX={"auto"} paddingX={"20px"}>
                    <Flex
                        marginX={"-15px"}
                        boxSizing={"border-box"}
                        flexWrap={"wrap"}
                    >
                        <Box
                            position={"relative"}
                            boxSizing={"border-box"}
                            display={"block"}
                            flexBasis={"100%"}
                            flexGrow={0}
                            flexShrink={0}
                            maxWidth={"100%"}
                            paddingX="15px"
                            width={"100%"}
                        >
                            <Text
                                as="h2"
                                position={"relative"}
                                color={"#000"}
                                fontSize={"24px"}
                                fontWeight={"700"}
                                marginTop={"24px"}
                                paddingBottom={"8px"}
                                zIndex={9}
                                textAlign={"center"}
                            >
                                OS MAIS VENDIDOS
                            </Text>
                            <SwiperItems items={whiskyList}/>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
}
