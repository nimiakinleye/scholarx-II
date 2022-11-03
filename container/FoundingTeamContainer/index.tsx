import React from "react";
import Image from "next/image";
import { Container, Stack, Text } from "../../components"
import { Colors } from "../../theme/colors"
import Bola from '../../assets/images/Bola.png'
import Dami from "../../assets/images/Dami.png"
import Maxwell from "../../assets/images/Maxwell.png"
import Olabisi from "../../assets/images/Olabisi.png"
import { TeamWrapper } from "./styles/index.styles";


export default function FoundingTeam() {
    const team = [
        { name: "Bola Lawal", position: "CEO/Co-Founder", image: Bola, alt: "Bola Lawal's Picture", link: "https://www.linkedin.com/in/bola-l-3344ba32/" },
        { name: "Damilola Emuze", position: "COO/Co-Founder", image: Dami, alt: "Damilola Emuze's Picture", link: "https://www.linkedin.com/in/damilola-emuze-187389166/" },
        { name: "Maxwell Ogunfuyi", position: "CTO/Co-Founder", image: Maxwell, alt: "Maxwell Ogunfuyi's Picture", link: "https://www.linkedin.com/in/maxwell-ogunfuyi-3581a68/" },
        { name: "Olabisi Kowobari", position: "Business Development Manager", image: Olabisi, alt: "Olabisi Kowobari's Picture", link: "https://www.linkedin.com/in/olabisierinoshokowobari/" },
    ]
    return (
        // <TeamWrapper>
        <Container alignItems="flex-start">
            <Stack m={"80px 0 0 0"} width="100%">

                <Text as="h4" color={Colors.primary} size={"48px"} sm_size={"21px"} >
                    Our Team
                </Text>

                <Stack className="founding-team-members" width="100%" justifyContent="space-between" direction="row" gap={"22px"} p={"40px 0 40px 0"} md_flexWrap="wrap" md_alignItems="center" sm_justifyContent="center">
                    {
                        team?.map((member: any, i: number) => {
                            return (
                                <Stack key={i} data-aos="flip-right">
                                    <a href={member?.link} target={"_blank"} rel="noreferrer"><Image className="pointer" src={member?.image} alt={member.alt} /></a>
                                    <Stack textAlign={"center"}>
                                        <Text as="h4" size={"18px"}>
                                            {member?.name}
                                        </Text>
                                        <Text as="p" size={"14px"} color={Colors.primary_blue_70}>
                                            {member.position}
                                        </Text>
                                    </Stack>
                                </Stack>
                            )
                        })
                    }
                </Stack>
            </Stack>
        </Container>
        // </TeamWrapper>
    )
}