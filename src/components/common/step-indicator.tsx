import React from "react"
import { Flex, Box } from "@chakra-ui/react"

const Step: React.VFC<{ value: number; step: number }> = ({ value, step }) => {
  let isActive = false
  let backgroundColor
  if (value <= step) {
    backgroundColor = "blue.300"
    if (value === step) {
      isActive = true
    }
  } else {
    backgroundColor = "gray.200"
  }

  // TODO: ステップがアクティブの時、光る感じのスタイルを追加したい

  return (
    <Box
      h="10px"
      w="10px"
      borderRadius="50%"
      backgroundColor={backgroundColor}
      boxShadow={
        isActive
          ? "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ffc, 0 0 40px #ff9;"
          : ""
      }
    />
  )
}

const Bar: React.VFC<{ value: number; step: number }> = ({ value, step }) => {
  let background
  if (value < step) {
    background = "blue.200"
  } else {
    background = "gray.200"
  }
  return <Box h="2px" w="70px" background={background} />
}

const StepIndicator: React.VFC<{ currentStep: number }> = ({ currentStep }) => {
  return (
    <Flex m="3rem" alignItems="center">
      <Step value={1} step={currentStep} />
      <Bar value={1} step={currentStep} />
      <Step value={2} step={currentStep} />
      <Bar value={2} step={currentStep} />
      <Step value={3} step={currentStep} />
      <Bar value={3} step={currentStep} />
      <Step value={4} step={currentStep} />
    </Flex>
  )
}

export default StepIndicator
