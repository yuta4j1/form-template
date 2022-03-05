import React from "react"
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Flex,
  Spacer,
  Box,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { form1Update } from "../redux/reducers/formData"
import { useAppDispatch } from "../redux/hooks"
import Layout from "../layout"
import FormCard from "../components/common/form-card"

type Form1DataType = {
  firstName: string
  lastName: string
}

export const Form1: React.VFC<{
  updateAction: (data: Form1DataType) => void
  moveToForm2: () => void
}> = ({ updateAction, moveToForm2 }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Form1DataType>()
  const onSubmit = (data: Form1DataType) => {
    console.log(data)
    updateAction(data)
    moveToForm2()
  }

  return (
    <Layout>
      <Flex justify={"center"}>
        <Box w={{ sm: "60%", base: "100%" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Spacer h={2} />
            <FormCard>
              <FormControl isInvalid={!!errors.firstName}>
                <FormLabel htmlFor="firstName">FirstName</FormLabel>
                <Input
                  id="firstName"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && errors.firstName.type === "required" && (
                  <FormErrorMessage>FirstNameは必須入力です。</FormErrorMessage>
                )}
              </FormControl>
            </FormCard>
            <Spacer h={2} />
            <FormCard>
              <FormControl isInvalid={!!errors.lastName}>
                <FormLabel htmlFor="lastName">LastName</FormLabel>
                <Input
                  id="lastName"
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && errors.lastName.type === "required" && (
                  <FormErrorMessage>LastNameは必須入力です。</FormErrorMessage>
                )}
              </FormControl>
            </FormCard>
            <Spacer h={2} />
            <Input type="submit" value="次の画面へ" />
          </form>
        </Box>
      </Flex>
    </Layout>
  )
}

const Form1Container: React.VFC<{}> = ({}) => {
  let navigate = useNavigate()
  const dispatch = useAppDispatch()
  const updateAction = (data: Form1DataType) => dispatch(form1Update(data))
  return (
    <Form1 updateAction={updateAction} moveToForm2={() => navigate("/form2")} />
  )
}

export default Form1Container
