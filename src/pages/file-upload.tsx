import React, { useState } from "react"
import { Box, Input, FormControl, FormLabel, Image } from "@chakra-ui/react"

const FileUpload: React.VFC<{}> = ({}) => {
  const [imgFile, setImgFile] = useState<File | null>(null)
  if (imgFile) {
    console.log("これは？", URL.createObjectURL(imgFile))
  }
  return (
    <Box>
      <FormControl>
        <FormLabel htmlFor="upload-file">画像を選択してね</FormLabel>
        <Input
          type="file"
          id="upload-file"
          accept=".jpg, .jpeg, .png"
          onChange={e => {
            const fileDatas = e.currentTarget.files
            if (fileDatas && fileDatas.length > 0) {
              console.log("fileData", fileDatas[0])
              const f = fileDatas[0]
              setImgFile(f)
            }
          }}
        />
      </FormControl>
      <Box>{imgFile && <Image src={URL.createObjectURL(imgFile)} w="300" h="200"></Image>}</Box>
    </Box>
  )
}

export default FileUpload
