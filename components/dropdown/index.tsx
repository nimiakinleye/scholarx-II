import React from "react";
import CategoryIcon from "../../components/icons/CategoryIcon/index";

import { Stack, Text } from "../../components";
import { CategoryWrapper }from "./styles/index.styles";
import { Colors } from "../../theme/colors";

export default function Dropdown() {
  return (
    <CategoryWrapper>
      <Stack m={"8px 8px 0 6px"} width={"30px"}>
        <CategoryIcon color={Colors.text_gray}/>
      </Stack>

      <select value={""}>
        <option value="All Category">All Category</option>
        <option value="Software Development">Software Development</option>
      </select>
    </CategoryWrapper>
  );
}