import React, { VFC } from "react"
import { ButtonBase, Typography } from "@mui/material"
import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom"
import { useTheme } from "@mui/system"

const Header: VFC = () => {
  const StyledNav = styled.nav`
    box-shadow: "0px 13px 10px 5px rgba(0, 0, 0, 0.12)";
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0px 16px;
    position: sticky;
    top: 0;
    background-color: #ffffffdf;
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #f0f0f0;
    z-index: 1000;
  `
  const StyledLogoButton = styled(ButtonBase)`
    margin: 16;
  `
  const StyledLogoText = styled(Typography)`
    margin: 16;
  `
  const navigate = useNavigate()
  const onClickLogo = () => {
    navigate("/")
  }

  return (
    <StyledNav>
      <StyledLogoButton onClick={onClickLogo}>
        <StyledLogoText variant="body1">Wecken</StyledLogoText>
      </StyledLogoButton>
    </StyledNav>
  )
}

export default Header
