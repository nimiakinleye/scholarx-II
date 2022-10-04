import React from "react";
import Image from "next/image";
import { Container,Stack,Text } from "../../components"
import { Colors } from "../../theme/colors"
import Bola from '../../assets/images/Bola.png'
import Dami from "../../assets/images/Dami.png"
import Maxwell from "../../assets/images/Maxwell.png"
import Olabisi from "../../assets/images/Olabisi.png"


export default function FoundingTeam(){
    return(
        <Container>
            <Stack m={"80px 0 0 0"}>
                <Stack>
                    <Text as="h3" color={Colors.primary}>
                    Our Founding Team
                    </Text>
                </Stack>
                <Stack className="founding-team-members" direction="row" gap={"22px"}  p={"40px 0 0 0"}>
                    <Stack>
                        <Image src={Bola} alt={"Bola Lawal's Picture"}/>
                        <Stack textAlign={"center"}>
                            <Text as="h4" size={"18px"}>
                                Bola Lawal
                            </Text>
                            <Text as="p" size={"14px"} color={Colors.primary_blue_70}>
                                CEO/Co-Founder
                            </Text>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Image src={Dami} alt={"Damilola Emuze's Picture"}/>
                        <Stack textAlign={"center"}>
                            <Text as="h4" size={"18px"}>
                                Damilola Emuze
                            </Text>
                            <Text as="p" size={"14px"} color={Colors.primary_blue_70}>
                                COO/Co-Founder
                            </Text>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Image src={Maxwell} alt={"Maxwell Ogunfuyi's Picture"}/>
                        <Stack textAlign={"center"}>
                            <Text as="h4" size={"18px"}>
                                Maxwell Ogunfuyi
                            </Text>
                            <Text as="p" size={"14px"} color={Colors.primary_blue_70}>
                                CTO/Co-Founder
                            </Text>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Image src={Olabisi} alt={"Olabisi Kowobari's Picture"}/>
                        <Stack textAlign={"center"}>
                            <Text as="h4" size={"18px"}>
                                Olabisi Kowobari
                            </Text>
                            <Text as="p" size={"14px"} color={Colors.primary_blue_70}>
                                Business Development Manager
                            </Text>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    )
}