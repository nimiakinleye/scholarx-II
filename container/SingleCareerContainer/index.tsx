import { useState, useEffect} from 'react';
import { Container, Stack, Button, Text } from "../../components";
import { Colors } from "../../theme/colors";
import ShareIcon from "../../components/icons/ShareIcon";


export default function SingleCareerContainer() {

  const [data, setdata] = useState([]);
  const url = `https://api.scholarx.co/api/v1/jobs/all?category=cloud&page=1&limit=5`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        let resp = result.jobs;
        setdata(resp);
      });
  }, []);


   const req = data.map(
     (
       item: {
         requirements: string[];
       },
       i
     ) => {
       return (
         <>
           <Stack key={i} p={"2rem 0 "} height={"auto"} color={Colors.gray_600}>
             {item.requirements.map((f, i) => {
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
   );

  

  const res = data.map(
    (
      item: {
        responsibilities: string[];
      },
      i
    ) => {
      return (
        <>
          <Stack key={i} p={"2rem 0 "} height={"auto"} color={Colors.gray_600}>
            {item.responsibilities.map((f, i) => {
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
  );


  const wwo = data.map((
      item: {
        what_we_offer: string[];
      },
      i
    ) => {
    return (
      <>
          <Stack key={i} p={"2rem 0 "} height={"auto"} color={Colors.gray_600}>
            {item.what_we_offer.map((f, i) => {
              return (
                <Text key={i} size="20px">
                  {f}
                </Text>
              );
            })}
          </Stack>
      </>
    );
  })

   const abt = data.map((item: {
        about: string;
      }, i) => {
       return (
         <>
             <Stack
               key={i}
               p={"2rem 0 "}
               height={"auto"}
               color={Colors.gray_600}
             >
                   <Text key={i} size="20px">
                     {item.about}
                   </Text>
             </Stack>
           </>
       );
       })
      
    const rol = data.map(
      (
        item: {
          role: string;
        },
        i
      ) => {
        return (
          <>
            <Text
              m={"16px 0"}
              size={"32px"}
              fontweight={"700"}
              lineHeight={"48px"}
              color={Colors.primary}
            >
              {item.role}
            </Text>
          </>
        );
      }
    );


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
              {rol}
            </>
            <Button width={"auto"} height={"60px"}>
              Apply
            </Button>
          </Stack>
          <>
            <Stack color={Colors.primary_blue}>
              <Text size="32px" lineHeight="48px" fontweight="700">
                About
              </Text>
            </Stack>
          </>
          <>{abt}</>
          <>
            <Stack color={Colors.primary_blue}>
              <Text size="32px" lineHeight="48px" fontweight="700">
                Requirements
              </Text>
            </Stack>
          </>
          <>{req}</>
          <>
            <Stack color={Colors.primary_blue}>
              <Text size="32px" lineHeight="48px" fontweight="700">
                Responsibilities
              </Text>
            </Stack>
          </>
          <>{res}</>
          <>
            <Stack color={Colors.primary_blue}>
              <Text size="32px" lineHeight="48px" fontweight="700">
                What we Offer
              </Text>
            </Stack>
          </>
          <>{wwo}</>

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
