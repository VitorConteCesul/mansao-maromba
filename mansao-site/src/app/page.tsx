"use client";

import CarouselHeader from "@/components/CarouselHeader/carouselheader";
import Header from "@/components/Header/header";
import {
    Box,
    Text,
    Flex,
    Link as ChakraLink,
    Heading,
    HStack,
    Group,
    Button,
    InputGroup,
    Input,
    Link,
} from "@chakra-ui/react";
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
import { hover } from "framer-motion";
import ImagemLancamentos from "@/components/ImagemLancamentos/image";
import Newsletter from "@/components/Newsletter/newsletter";

const whiskyList = [
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/products/img-20250113-wa0055-b81be437b87f0596c317367908684473-1024-1024.webp",
        alt: "Whisky + Combo 1L (6 unidades)",
        price: "94,90",
        href: "https://gorodamansao.com/produtos/whisky-combo-1l-6-unidades/",
    },
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/products/whisky-combo-job-1l-b479a979fd3eb2d80b17654683945967-480-0.webp",
        alt: "Whisky + Combo Job 1L (6 unidades)",
        price: "99,90",
        href: "https://gorodamansao.com/produtos/whisky-combo-job-1l-6-unidades-1563u/",
    },
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/products/img-20250113-wa0056-2aa5040058fbde1f4a17367909276814-480-0.webp",
        alt: "Gin + Combo Melancia 1L (6 unidades)",
        price: "94,90",
        href: "https://gorodamansao.com/produtos/gin-combo-melancia-1l-6-unidades/",
    },
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/products/img-20250113-wa0057-9481b9342d5d4a5dac17367908987407-480-0.webp",
        alt: "Vodka + Combo 1L (6 unidades)",
        price: "94,90",
        href: "https://gorodamansao.com/produtos/vodka-combo-1l-6-unidades/",
    },
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/products/mansao-maromba-site-a54399d79c33c1893f17296175357834-480-0.webp",
        alt: "Whisky + Combo Maçã Verde 1L (6 unidades)",
        price: "94,90",
        href: "https://gorodamansao.com/produtos/whisky-combo-maca-verde-1l-6-unidades/",
    },
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/products/gin-combo-tigrinho-tropical-1l-d2b13bd2d9a3deb15617480146186080-480-0.webp",
        alt: "Gin + Combo Tigrinho Tropical 1L (6 unidades)",
        price: "94,90",
        href: "https://gorodamansao.com/produtos/gin-combo-tigrinho-tropical-1l-6-unidades/",
    },
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/products/whisky-combo-double-darkness-50c0b27f9d998c5fad17545763653107-480-0.webp",
        alt: "Whisky + Combo Double Darkness 1L (6 unidades)",
        price: "94,90",
        href: "https://gorodamansao.com/produtos/whisky-combo-double-darkness-1l-6-unidades/",
    },
];

const novosLancamentos = [
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/products/gin-saborizado-melancia-750ml-29479e303b9e177d8117694693220754-640-0.webp",
        href: "https://gorodamansao.com/produtos/gin-morango-com-hibisco-750ml-6-unidades-c3irx/",
        alt: "Gin Melancia 750mL (6 unidades)",
        price: "139,99",
    },
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/products/gin-saborizado-tropical-750ml-545e8e95c0f59514ff17654865515336-1024-1024.webp",
        href: "https://gorodamansao.com/produtos/gin-tropical-750ml-6-unidades-wzugj/",
        alt: "Gin Tropical 750mL (6 unidades)",
        price: "139,99",
    },
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/products/gin-saborizado-maca-verde-750ml-8979de87850547398117694692931476-480-0.webp",
        href: "https://gorodamansao.com/produtos/gin-maca-verde-750ml-6-unidades-aflp9/",
        alt: "Gin Maçã Verde 750mL (6 unidades)",
        price: "139,99",
    },
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/products/gin-saborizado-pitaya-750ml-69c003c097fcfd460f17654865884283-480-0.webp",
        href: "https://gorodamansao.com/produtos/gin-pitaya-750ml-6-unidades-pa6rc/",
        alt: "Gin Pitaya 750mL (6 unidades)",
        price: "139,99",
    },
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/products/gin-saborizado-frutas-vermelhas-750ml-af35558b4451ae0ac417654865633559-480-0.webp",
        href: "https://gorodamansao.com/produtos/gin-frutas-vermelhas-750ml-6-unidades-x4xdg/",
        alt: "Gin Frutas Vermelhas 750mL (6 unidades)",
        price: "139,99",
    },
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/products/gin-saborizado-limao-siciliano-cravo-e-canela-750ml-a9e3ac0141d636a24d17654864466481-480-0.webp",
        href: "https://gorodamansao.com/produtos/gin-limao-siciliano-cravo-e-canela-750ml-6-unidades-1om11/",
        alt: "Gin Limão Siciliano Cravo e Canela 750mL (6 unidades)",
        price: "139,99",
    },
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/products/gin-saborizado-morango-com-hibisco-750ml-2008e7267da592f0d317655475591106-480-0.webp",
        href: "https://gorodamansao.com/produtos/gin-morango-com-hibisco-750ml-6-unidades-c3irx/",
        alt: "Gin Morango com Hibisco 750mL (6 unidades)",
        price: "139,99",
    },
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/products/gin-saborizado-laranja-com-maracuja-750ml-7884a00eb7072dca5c17655475884124-480-0.webp",
        href: "https://gorodamansao.com/produtos/gin-laranja-com-maracuja-750ml-6-unidades-fz4gc/",
        alt: "Gin Laranja com Maracujá 750mL (6 unidades)",
        price: "139,99",
    },
    {
        src: "https://acdn-us.mitiendanube.com/stores/004/048/852/products/gin-saborizado-blueberry-750ml-40183748cf5c7ef6d217654865759898-480-0.webp",
        href: "https://gorodamansao.com/produtos/gin-blueberry-750ml-6-unidades-io98x/",
        alt: "Gin Blueberry 750mL (6 unidades)",
        price: "139,99",
    },
];

export default function Home() {
    return (
        <Box as="main">
            <Header />
            <CarouselHeader />
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
                            <SwiperItems items={whiskyList} />
                        </Box>
                    </Flex>
                </Box>
            </Box>
            <Box
                as="section"
                boxSizing={"border-box"}
                position={"relative"}
                paddingY={"20px"}
                height={"auto"}
                width={"100%"}
            >
                <Box
                    boxSizing={"inherit"}
                    display={"block"}
                    width={"inherit"}
                    height={"inherit"}
                >
                    <Box
                        boxSizing={"border-box"}
                        display={"block"}
                        maxWidth={"1020px"}
                        mx="auto"
                        paddingX={"30px"}
                        width={"100%"}
                    >
                        <Heading
                            as="h2"
                            position={"relative"}
                            marginY={"24px"}
                            paddingBottom={"8px"}
                            zIndex={9}
                            textAlign={"center"}
                            fontWeight={"700"}
                            fontSize={"24px"}
                            color={"#000"}
                        >
                            LINHA PREMIUM MANSÃO MAROMBA
                        </Heading>
                        <Flex
                            position={"relative"}
                            overflowX={"hidden"}
                            overflowY={"hidden"}
                            height={"auto"}
                            zIndex={1}
                            width={"100%"}
                        >
                            <HStack
                                position={"relative"}
                                height={"100%"}
                                width={"100%"}
                                gap="30px"
                            >
                                <ImagemLancamentos
                                    alt="Whisky"
                                    src="https://acdn-us.mitiendanube.com/stores/004/048/852/themes/morelia/slide-1765555694918-7310363490-0312d6e1a4166d29f55f072e8e19eedc1765555696.png?6502268024259766674"
                                />

                                <ImagemLancamentos
                                    alt="Vodka"
                                    src="https://acdn-us.mitiendanube.com/stores/004/048/852/themes/morelia/slide-1765555694918-2651655458-a2a4f4b5ff91a1838fffdcbcef4946041765555697.png?6502268024259766674"
                                />

                                <ImagemLancamentos
                                    alt="Gin"
                                    src="https://acdn-us.mitiendanube.com/stores/004/048/852/themes/morelia/slide-1765555694918-7099535074-962311875171836781a7f1bc60fc914b1765555698.png?6502268024259766674"
                                />
                            </HStack>
                        </Flex>
                    </Box>
                </Box>
            </Box>
            <Box
                as="section"
                paddingY={"25px"}
                overflowX={"hidden"}
                overflowY={"hidden"}
                height={"auto"}
                position={"relative"}
                width={"100%"}
            >
                <Box
                    boxSizing={"border-box"}
                    display={"block"}
                    height={"auto"}
                    mx="auto"
                    maxWidth={"1020px"}
                    paddingX={"30px"}
                >
                    <Heading
                        as="h2"
                        position={"relative"}
                        marginTop={"24px"}
                        paddingBottom={"8px"}
                        zIndex={9}
                        textAlign={"center"}
                        fontWeight={"700"}
                        fontSize={"24px"}
                        color={"#000"}
                    >
                        NOSSOS LANÇAMENTOS
                    </Heading>
                    <SwiperItems items={novosLancamentos} />
                </Box>
            </Box>
            <Box
                as="section"
                boxSizing={"border-box"}
                position={"relative"}
                display={"block"}
                overflowX={"hidden"}
                overflowY={"hidden"}
                width={"100%"}
                height={"auto"}
            >
                <Newsletter/>
            </Box>
        </Box>
    );
}
