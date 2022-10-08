import { Container, Stack, Button, Text } from "../../components";
import { Colors } from "../../theme/colors";
import ShareIcon from "../../components/icons/ShareIcon";
import { type } from "os";

export default function SingleCareerContainer() {
  const items = [
    {
      title: "About",
      description: [
        "  We are developing new functionality for an application – AI travel planner, that helps to organize trips and customize tourist’s itineraries while traveling across the world.   ",
      ],
    },
    {
      title: "Requirements",
      description: [
        "  3+ years of working experience in software engineering.   ",
        "  Extensive experience developing iOS applications in Swift.    ",
        "  Understanding of the full iOS mobile development life cycle.   ",
        "  Intermediate Strong level of English, good communication skills.   ",
      ],
    },
    {
      title: "Responsibilities",
      description: [
        "  Develop solutions and algorithms according to technical specifications or other requirements documentation; use standard algorithms in the applicable cases; write program code according to the defined application architecture.   ",
        "  Implement code refactoring and optimization methods.    ",
        "  Post refactoring and optimization results to the collective knowledge base as the best practices.    ",
        "  Develop, document, and edit programming interfaces, software modules and components assembling procedures, software deployment, and update procedures as well as data migration and transformation (conversion) procedures Work in pair with another developer, communication with team members sharing thoughts and knowledge New functionality design.   ",
        "  Estimating tasks Communication with customer.   ",
      ],
    },
    {
      title: "What we Offer",
      description: [
        "Above average compensation and competitive Social package.   ",
        "Close cooperation with a customer.   ",
        "Challenging tasks.    ",
        "  Competence development.   ",
        "  Ability to influence project technologies.   ",
        "  Team of professionals.    ",
        "  Dynamic environment with low level of bureaucracy.   ",
      ],
    },
  ];

  /*for (const item of items) {
      
      if (typeof item.description !== "string") {
        return console.log(item.description);
      }else {
  return description.map(item => <Text>item</Text>)
}*/

  const itemcomp = items.map(
    (
      item: {
        title: string;
        description: string[];
      },
      i
    ) => {
      return (
        <>
          <Stack key={i} color={Colors.primary_blue}>
            <Text size="32px" lineHeight="48px" fontweight="700">
              {item.title}
            </Text>
          </Stack>
          <Stack key={i} p={"2rem 0 "} height={"auto"} color={Colors.gray_600}>
            {item.description.map((f, i) => {
              return <Text key={i} size="20px">{f}</Text>;
            })}
          </Stack>
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
            <Text
              m={"16px 0"}
              size={"32px"}
              fontweight={"700"}
              lineHeight={"48px"}
              color={Colors.primary}
            >
              Frontend Developer
            </Text>
            <Button width={"auto"} height={"60px"}>
              Apply
            </Button>
          </Stack>
          <>{itemcomp}</>

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
              <Button height={"60px"} width={"100px"}>
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
