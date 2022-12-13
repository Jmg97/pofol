import styled from "styled-components";
import { GoMarkGithub } from "react-icons/go";


export const Header = () => {
    return(
        <HeaderWrap>
          <HeaderContentWrap>
            <HeaderFirstContent>
              <span>Mingoo JI</span>
            </HeaderFirstContent>
            <HeaderSecondContent>
              <GoMarkGithub size={25}/>
            </HeaderSecondContent>
            <HeaderThirdContent>

            </HeaderThirdContent>
          </HeaderContentWrap>
        </HeaderWrap>
    )
};

const HeaderWrap = styled.nav`
  width:100%;
  height:10vh;
  background-color:#eedfba;
  position:fixed;
`

const HeaderContentWrap = styled.div`
  width:100%;
  max-width:60%;
  height:100%;
  margin:auto;
  display:flex;
  justify-contents:space-between;
`
const HeaderFirstContent = styled.div`
  display:flex;
  align-items:center;
`
const HeaderSecondContent = styled.div`
  display:flex;
  align-items:center;
`
const HeaderThirdContent = styled.div`
  display:flex;
  align-items:center;
`