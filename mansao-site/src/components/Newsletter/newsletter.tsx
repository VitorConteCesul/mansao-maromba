import { Box, Flex, Heading, Input, InputGroup, Link, Text } from "@chakra-ui/react";
import NextImage from 'next/image'

export default function Newsletter() {
    return (
        <Flex
            alignItems={"center"}
            boxSizing={"border-box"}
            flexWrap={"wrap"}
            marginX={0}
            justifyContent={"center"}
            background={"rgb(209, 209, 209)"}
            height={"auto"}
            width={"100%"}
        >
            <Box
                position={"relative"}
                display={"block"}
                height={"auto"}
                maxWidth={"50%"}
                flexBasis={"50%"}
                width={"100%"}
            >
                <Box
                    display={"block"}
                    mx="auto"
                    maxWidth={"400px"}
                    paddingY="48px"
                    paddingX={"24px"}
                    marginY={0}
                    fontSize={"16px"}
                >
                    <Heading
                        as="h2"
                        fontSize={"22px"}
                        fontWeight={"700"}
                        textAlign={"center"}
                        marginBottom={"8px"}
                        color={"#000"}
                        fontFamily={"var(--font-montserrat)"}
                    >
                        Newsletter
                    </Heading>
                    <Text
                        as="p"
                        lineHeight={"20px"}
                        fontSize={"14px"}
                        textAlign={"center"}
                        color={"#000"}
                        marginBottom={"14px"}
                    >
                        Cadastre-se e receba novas ofertas
                    </Text>
                    <Box position={"relative"} display={"inherit"}>
                        <InputGroup
                            width="352px"
                            _hover={{ borderColor: "#000" }}
                            endElement={
                                <Link
                                    color="#000000"
                                    href="/"
                                    textDecoration="underline"
                                    fontSize="sm"
                                    _hover={{
                                        color: "rgb(54, 54, 54)",
                                    }}
                                >
                                    Enviar
                                </Link>
                            }
                        >
                            <Input
                                placeholder="E-mail"
                                type="email"
                                color="#000"
                                borderRadius={0}
                                borderColor="rgba(0, 0, 0, 0.3)"
                                _placeholder={{ color: "rgba(0, 0, 0, 0.3)", opacity: 1 }}
                                _hover={{ borderColor: "#000" }}
                                transition="all 0.4s ease-in-out"
                                paddingRight="4rem"
                            />
                        </InputGroup>
                    </Box>
                </Box>
            </Box>
            <Box
                position={"relative"}
                display={"block"}
                flexBasis={"50%"}
                maxWidth={"50%"}
                width={"100%"}
            >
                <NextImage
                    src="https://acdn-us.mitiendanube.com/stores/004/048/852/themes/morelia/img-1126447464-1755126042-088e1196d782792da5b8fcd499d625d31755126042.png?6502268024259766674"
                    alt="Imagem do Toguro"
                    width={953}
                    height={536}
                />
            </Box>
            <Link
                href="https://wa.me/5511999994314"
                position={"fixed"}
                bottom={"15px"}
                right={"15px"}
            >
                <NextImage src="/assets/whatsapp.svg" alt="Whatsapp" height={45} width={45} style={{borderRadius: "100px"}}/>
            </Link>
        </Flex>
    );
}
