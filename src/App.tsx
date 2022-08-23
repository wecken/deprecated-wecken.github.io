import React from "react"
import Header from "libs/components/molecules/Header"
import { Route, Routes } from "react-router-dom"
import Main from "libs/components/views/main"
import Mbux from "libs/components/views/mbux"
import KurashiruStore from "libs/components/views/kurashiruStore"
import EOW from "libs/components/views/eow"
import i18n from "i18next"
import detector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
import { JA_JP, EN_US } from "libs/translations"
import { ThemeProvider } from "libs/theme/ThemeProvider"
import styled from "@emotion/styled"
import About from "libs/components/views/about"
import NetsuperIntegration from "libs/components/views/netsuperIntegration"
import KurashiruDelivery from "libs/components/views/kurashiruDelivery"
const resources = {
  ja: JA_JP,
  en: EN_US,
}

// const initialLang: SupportedLanguage = "ja"

i18n
  .use(initReactI18next)
  .use(detector)
  .init({
    resources,
    // lng: initialLang,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  })

const Root = styled.div`
  background-color: ${(props) => props.theme.palette.wecken.black[10]};
  min-height: 100vh;
  color: ${(props) => props.theme.palette.wecken.black.high};
`

function App() {
  return (
    <>
      <ThemeProvider>
        <Root>
          <Header />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/works" element={<Main />} />
            <Route path="/works/mbux" element={<Mbux />} />
            <Route path="/works/kurashiru_store" element={<KurashiruStore />} />
            <Route path="/works/EOW" element={<EOW />} />
            <Route
              path="/works/netsuper_integration"
              element={<NetsuperIntegration />}
            />
            <Route
              path="/works/kurashiru_delivery"
              element={<KurashiruDelivery />}
            />
          </Routes>
        </Root>
      </ThemeProvider>
    </>
  )
}

export default App
