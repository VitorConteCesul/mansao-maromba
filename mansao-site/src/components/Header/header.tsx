"use client";

import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import { useState, useRef, useEffect } from "react";
import { LuSearch, LuShoppingBag, LuUser } from "react-icons/lu";

export default function Header() {
    const [productsVisibility, setProductsVisibility] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // verifica se foi scrollado para baixo a tela, atualizando o state isScrolled para diminuir o tamanho do header
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 120) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // timer
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        // se o timer nao tiver chegado em 250 e essa função for chamada ela vai limpar o timer, abrindo a div ou não fazendo ela fechar
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setProductsVisibility(true);
    };

    const handleMouseLeave = () => {
        // esse timer vai ser o tempo restante até sumir a div dos produtos
        timeoutRef.current = setTimeout(() => {
            setProductsVisibility(false);
        }, 250);
    };

    return (
        <Flex
            as="header"
            top={0}
            w="100%"
            h={isScrolled ? "79px" : "100px"}
            zIndex={1040}
            position="sticky"
            alignItems="center"
            bg="#000000"
            color="white"
            transition={"all 0.3s ease"}
        >
            <Flex
                as="nav"
                w="100%"
                maxW="1020px"
                mx="auto"
                padding={"25px"}
                paddingLeft={"30px"}
                paddingRight={"30px"}
                h="full"
                alignItems="center"
                justifyContent="space-between"
            >
                <HStack>
                    <Box flexShrink={0}>
                        <NextLink href="/">
                            <NextImage
                                src="https://acdn-us.mitiendanube.com/stores/004/048/852/themes/common/logo-59460031-1702327004-d85672d8490cfcdddfd25fff2c4cb1621702327004-480-0.webp"
                                alt="Bebidas Mansão Maromba"
                                width={180}
                                height={100}
                                style={{
                                    width: isScrolled ? "100px" : "175px",
                                    height: isScrolled ? "40px" : "70px",
                                    transition: "all 0.2s ease",
                                    
                                }}
                            />
                        </NextLink>
                    </Box>

                    <Flex as="ul" gap="35px" alignItems="center">
                        <Box as="li" paddingLeft={"32px"}>
                            <NextLink href="/">
                                <Text
                                    fontSize="16px"
                                    _hover={{ color: "gray.300" }}
                                    transition="0.2s"
                                >
                                    Início
                                </Text>
                            </NextLink>
                        </Box>

                        <Box
                            as="li"
                            position="relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <NextLink href="https://gorodamansao.com/produtos/">
                                <Text
                                    fontSize="16px"
                                    _hover={{ color: "gray.300" }}
                                    transition="0.2s"
                                >
                                    Produtos
                                </Text>
                            </NextLink>

                            <Box
                                position="fixed"
                                top={isScrolled ? "79px" : "100px"}
                                left={0}
                                width="100%"
                                height="60px"
                                overflowY="hidden"
                                py="20px"
                                bg="#ffffff"
                                color="#000000"
                                display="flex"
                                alignItems="center"
                                borderBottom="1px solid #e2e2e2"
                                opacity={productsVisibility ? 1 : 0}
                                pointerEvents={
                                    productsVisibility ? "auto" : "none"
                                }
                                transition=" all 0.2s ease-in-out"
                                zIndex={1038}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Box maxW="960px" mx="auto" w="100%">
                                    <Box
                                        as="ul"
                                        w="100%"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="flex-start"
                                        gap="20px"
                                        listStyleType="none"
                                        m={0}
                                        p={0}
                                    >
                                        <Box
                                            as="li"
                                            fontSize="16px"
                                            fontWeight="400"
                                            marginRight={"70px"}
                                        >
                                            <NextLink href="/produtos/alcoólicos">
                                                <Text
                                                    _hover={{
                                                        color: "gray.500",
                                                    }}
                                                    transition="0.2s"
                                                >
                                                    Alcoólicos
                                                </Text>
                                            </NextLink>
                                        </Box>
                                        <Box
                                            as="li"
                                            fontSize="16px"
                                            fontWeight="400"
                                        >
                                            <NextLink href="/produtos/alcoolicos-combo">
                                                <Text
                                                    _hover={{
                                                        color: "gray.500",
                                                    }}
                                                    transition="0.2s"
                                                >
                                                    Alcoólicos + Combo
                                                </Text>
                                            </NextLink>
                                        </Box>
                                        <Box
                                            as="li"
                                            fontSize="16px"
                                            fontWeight="400"
                                        >
                                            <NextLink href="/produtos/gin-saborizados">
                                                <Text
                                                    _hover={{
                                                        color: "gray.500",
                                                    }}
                                                    transition="0.2s"
                                                >
                                                    Gin Saborizados
                                                </Text>
                                            </NextLink>
                                        </Box>
                                        <Box
                                            as="li"
                                            fontSize="16px"
                                            fontWeight="400"
                                        >
                                            <NextLink href="/produtos/nao-alcoólicos">
                                                <Text
                                                    _hover={{
                                                        color: "gray.500",
                                                    }}
                                                    transition="0.2s"
                                                >
                                                    Não Alcoólicos
                                                </Text>
                                            </NextLink>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box as="li">
                            <NextLink href="https://gorodamansao.com/contato/">
                                <Text
                                    fontSize="16px"
                                    _hover={{ color: "gray.300" }}
                                    transition="0.2s"
                                >
                                    Contato
                                </Text>
                            </NextLink>
                        </Box>
                    </Flex>
                </HStack>

                <Flex gap="25px" alignItems="center" cursor="pointer">
                    <Box _hover={{ opacity: 0.8 }} transition="0.2s">
                        <LuSearch size={28} />
                    </Box>

                    <Box _hover={{ opacity: 0.8 }} transition="0.2s">
                        <LuUser size={28} />
                    </Box>

                    <Box
                        position="relative"
                        _hover={{ opacity: 0.7 }}
                        transition="0.2s"
                    >
                        <LuShoppingBag size={28} />

                        <Flex
                            position="absolute"
                            top="-8px"
                            right="-10px"
                            
                            w="16px"
                            h="16px"
                            alignItems="center"
                            justifyContent="center"
                            
                        >
                            <Text fontSize="10px" fontWeight="bold">
                                0
                            </Text>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
}
