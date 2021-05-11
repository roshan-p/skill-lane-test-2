import React from "react";
import * as S from "./search-field.styled";
import { MdSearch } from "react-icons/md";

const SearchField = () => {
  return (
    <S.SearchContainer>
      <S.SearchField
        type="text"
        name="search"
        id="search"
        maxlength="100"
        placeholder="ค้นหาคอร์สเรียน..."
        autocomplete="off"
      >
      </S.SearchField>
      <S.SearchBtn type="submit" class="btn">
          <MdSearch />
        </S.SearchBtn>
    </S.SearchContainer>
  );
};

export default SearchField;
