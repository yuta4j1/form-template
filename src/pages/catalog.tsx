import React from "react"
import { Box, Center, Heading } from "@chakra-ui/react"
import PrimaryButton from "../components/common/PrimaryButton"
import InputText from "../components/common/input-text"
import ProgressBar from "../components/common/progess"
import StepIndicator from "../components/common/step-indicator"

const Title: React.VFC<{ text: string }> = ({ text }) => {
  return (
    <Heading as="h3" size="lg" paddingBottom="2rem">
      {text}
    </Heading>
  )
}

const Catalog: React.VFC<{}> = ({}) => {
  return (
    <Box>
      <Center px={12} py={16}>
        <Heading>Component Catalog</Heading>
      </Center>
      <Box>
        <Title text="PrimaryButton" />
        <PrimaryButton text="お問い合わせ" clickHandler={() => {}} />
      </Box>
      <Box>
        <Title text="Textbox" />
        <InputText placeholder={"例：テスト"} maxLength={30} />
      </Box>
      <Box>
        <Title text="ProgressBar" />
        <ProgressBar percentage={60} />
      </Box>
      <Box>
        <Title text="StepIndicator" />
        <StepIndicator currentStep={4} />
      </Box>
    </Box>
  )
}

export default Catalog
