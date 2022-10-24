import React, {useState} from "react";
import SearchIcon from "../../components/icons/SearchIcon/index";
import { SearchWrapper } from "./styles/index.styles"
import { Stack } from "../../components";
import { Colors } from "../../theme/colors";



export default function Search() {
  /*const [search, setSearch] = useState();
  const handleChange = (e: { target: { value: any; }; }) => {
    
    setSearch(e.target.value);
    console.log(search)
  };*/
  
  return (
    <SearchWrapper>
      <form >
        <Stack width="auto" p={"8px 0 0 4px"} alignItems="center" direction="row">
          <Stack maxWidth={"22px"} m={"0 8px 0 4px"}>
            <SearchIcon color={Colors.text_gray} />
          </Stack>
          <input name="search" title="search" placeholder="Search Jobs" />
        </Stack>
      </form>
    </SearchWrapper>
  );
}
