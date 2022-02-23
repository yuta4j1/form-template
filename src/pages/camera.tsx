import React, { useLayoutEffect, useRef } from "react"
import { Box } from "@chakra-ui/react"

const Camera: React.VFC<{}> = ({}) => {
  let canvEl = useRef<HTMLVideoElement | null>(null)
  useLayoutEffect(() => {
    if (canvEl === null) return
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then(stream => {
        if (canvEl.current) {
          console.log(stream)
          canvEl.current.srcObject = stream
          canvEl.current?.play()
        }
      })
  }, [canvEl])
  return (
    <Box>
      <h2>カメラを起動したい</h2>
      <video width="100%" height="100%" ref={canvEl}></video>
    </Box>
  )
}

export default Camera
