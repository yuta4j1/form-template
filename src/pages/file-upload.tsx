import React, { useState } from "react"
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Image,
  Button,
} from "@chakra-ui/react"

const FileUpload: React.VFC<{}> = ({}) => {
  const [imgFile, setImgFile] = useState<File | null>(null)
  const onSubmit = () => {
    const formData = new FormData()
    if (imgFile) {
      formData.append("fileData", imgFile)
    }

    const options: { method: string; body: any; headers?: any } = {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }

    delete options.headers["Content-Type"]

    fetch("http://localhost:1234/file_upload", options)
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
        <Button type="submit" onClick={onSubmit}>
          アップロード
        </Button>
      </FormControl>
      <Box>
        {imgFile && (
          <Image src={URL.createObjectURL(imgFile)} w="300" h="200"></Image>
        )}
      </Box>
    </Box>
  )
}

export default FileUpload
