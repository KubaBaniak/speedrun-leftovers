import styled from 'styled-components';

const SearchInput = styled.input`
  margin-right: auto;
  width: 30%;
  width-max: 400px;
  height: 40px;
  border-radius: 5px;
`;

export default function SearchBar() {
  return <SearchInput></SearchInput>;
}
