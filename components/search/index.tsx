import React from "react";
import SearchIcon from "../../components/icons/SearchIcon/index";
import { SearchWrapper } from "./styles/index.styles"
import { Stack } from "../../components";
import { Colors } from "../../theme/colors";

export default function Search() {
  return (
    <SearchWrapper>
      <form>
        <Stack p={"8px 0 0 4px"} direction="row">
          <Stack maxWidth={"22px"} m={"0 8px 0 4px"}>
            <SearchIcon color={Colors.text_gray} />
          </Stack>
          <input title="search" placeholder="Search Jobs" />
        </Stack>
      </form>
    </SearchWrapper>
  );
}
