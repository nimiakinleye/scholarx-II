import { useState, useEffect } from 'react';
import { Container, Stack, Button, Text } from "../../components";
import { Colors } from "../../theme/colors";
import ShareIcon from "../../components/icons/ShareIcon";
import { useRouter } from 'next/router';
import axios from 'axios';


export default function SingleCareerContainer() {
  const router = useRouter()
  const { id } = router.query
  const [data, setData] = useState<any>();
  const url = `https://api.scholarx.co/api/v1/jobs/${id}`;

  useEffect(() => {
    if (id) {
      axios.get(url)
        .then(res => {
          const { job } = res.data
          setData(job)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [id]);


  const req = () => {
    return (
      <>
        <Stack p={".5rem 0 "} height={"auto"} color={Colors.gray_600}>
          {data?.requirements?.map((f: any, i: number) => {
            return (
              <Text key={i} size="20px">
                {f}
              </Text>
            );
          })}
        </Stack>
      </>
    );
  }



  const res = () => {
    return (
      <>
        <Stack p={".5rem 0 "} height={"auto"} color={Colors.gray_600}>
          {data?.responsibilities?.map((f: any, i: number) => {
            return (
              <Text key={i} size="20px">
                {f}
              </Text>
            );
          })}
        </Stack>
      </>
    );
  }


  const wwo = () => {
    return (
      <>
        <Stack p={".5rem 0 "} height={"auto"} color={Colors.gray_600}>
          {data?.what_we_offer?.map((f: any, i: any) => {
            return (
              <Text key={i} size="20px">
                {f}
              </Text>
            );
          })}
        </Stack>
      </>
    );
  }

  const abt = () => {
    return (
      <>
        <Stack
          p={".5rem 0 "}
          height={"auto"}
          color={Colors.gray_600}
        >
          <Text size="20px">
            {data?.about}
          </Text>
        </Stack>
      </>
    );
  }

  const rol = () => {
    return (
      <>
        <Text
          m={"16px 0"}
          size={"32px"}
          fontweight={"700"}
          lineHeight={"48px"}
          color={Colors.primary}
        >
          {data?.role}
        </Text>
      </>
    );
  }


  return (
    <>
      <Container>
        <Stack width="100%">
          <Stack
            alignItems="center"
            justifyContent={"space-between"}
            p={"18px 0"}
            direction="row"
          >
            <>
              {rol()}
            </>
            <Button width={"auto"} height={"60px"}>
              Apply
            </Button>
          </Stack>
          <Stack m="16px 0">
            <Stack color={Colors.primary_blue}>
              <Text size="32px" lineHeight="48px" fontweight="700">
                About
              </Text>
            </Stack>
            {abt()}
          </Stack>
          <Stack m="16px 0">
            <Stack color={Colors.primary_blue}>
              <Text size="32px" lineHeight="48px" fontweight="700">
                Requirements
              </Text>
            </Stack>
            {req()}
          </Stack>
          <Stack m="16px 0">
            <Stack color={Colors.primary_blue}>
              <Text size="32px" lineHeight="48px" fontweight="700">
                Responsibilities
              </Text>
            </Stack>
            {res()}
          </Stack>
          <Stack m="16px 0">
            <Stack color={Colors.primary_blue}>
              <Text size="32px" lineHeight="48px" fontweight="700">
                What we Offer
              </Text>
            </Stack>
            {wwo()}
          </Stack>


          <Stack
            m={"30px 0 10px 0"}
            alignItems="center"
            direction="row"
            flexWrap="wrap"
            width="50%"
            md_width="100%"
            justifyContent="space-between"
          >
            <Stack m="1rem 0">
              <Button height={"60px"} width={"auto"}>
                Apply
              </Button>
            </Stack>
            <Stack
              bordercolor={Colors.primary_blue}
              borderstyle={"solid"}
              borderwidth={"1px"}
              width={"100px"}
              height={"60px"}
            >
              <Button height={"60px"} width={"auto"} color={Colors.white}>
                <Stack alignItems="center" width="100%" direction={"row"}>
                  <ShareIcon color={Colors.primary_blue} />
                  <Text
                    m="0 0 5px 7px"
                    size={"16px"}
                    color={Colors.primary_blue}
                  >
                    Share
                  </Text>
                </Stack>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
