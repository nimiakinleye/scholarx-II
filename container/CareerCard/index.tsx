import React from "react";
import { Text, Stack, Button } from "../../components";
import { Colors } from "../../theme/colors";
import ShareIcon from "../../components/icons/ShareIcon";


export default function CareerCard(){
    return (
      <>
          <Stack
          xsm_width={"100%"}
          sm_width={"40%"}
            m={"20px 10px"}
            p={"18px"}
            bordercolor={Colors.primary_blue}
            borderstyle={"solid"}
            borderwidth={"1px"}
            height={"280px"}
            width={"28%"}
          >
            <Text
              m={"12px 0 0 0"}
              size={"32px"}
              fontweight={"700"}
              textalign={"center"}
              color={Colors.primary_blue}
            >
              Frontend Developer
            </Text>
            <Stack
              height={"70px"}
              p={"0 0 16px 0"}
              borderwidth={"0 0 1px 0"}
              bordercolor={Colors.neutral_gray100}
              borderstyle={"solid"}
              direction="row"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack
                m={"15px 0 0 0"}
                borderwidth={"0 0 1px 0"}
                bordercolor={Colors.yellow}
                borderstyle={"solid"}
                width={"38%"}
              >
                <Text textalign="center" size={"18px"} color={Colors.yellow}>
                  Refer a friend
                </Text>
              </Stack>

              <Stack
                width="35%"
                m={"12px 0 0 0"}
                direction="row"
                justifyContent="center"
                alignItems={"center"}
              >
                <ShareIcon color={Colors.neutral_gray100} />
                <Text size={"18px"} m={"0 0 0 8px"} color={Colors.neutral_gray100}>
                  Share
                </Text>
              </Stack>
            </Stack>
            <Stack m={"18px 0 0 0"} height={"50px"}>
              <Text
                size={"18px"}
                textalign="center"
                color={Colors.neutral_gray100}
              >
                Software Development
              </Text>
            </Stack>
            <Stack alignItems="center">
              <Button size={"16px"} width={"auto"}>
                Apply
              </Button>
            </Stack>
          </Stack>
      </>
    );
}