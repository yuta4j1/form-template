import React from "react"
import { Progress } from "@chakra-ui/react"

const ProgressBar: React.VFC<{ percentage: number }> = ({ percentage }) => {
  return <Progress value={percentage} />
}

export default ProgressBar
