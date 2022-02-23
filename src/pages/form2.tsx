import React from "react"
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormHelperText,
  Input,
  Radio,
  RadioGroup,
  Stack,
  CheckboxGroup,
  Checkbox,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { form2Update } from "../redux/reducers/formData"
import { useAppDispatch } from "../redux/hooks"
import SelectPet from "../components/select-pet"

type Form2DataType = {
  age: number
  phoneNumber: string
  havePet: boolean
  pets: string[]
}

type Form2DispType = {
  age: string
  phoneNumber: string
  havePet: string
  pets: string[]
}

const petsCheckbox: { id: string; value: string; label: string }[] = [
  {
    id: "1",
    label: "犬",
    value: "dog",
  },
  {
    id: "2",
    label: "ねこ",
    value: "cat",
  },
  {
    id: "3",
    label: "鳥",
    value: "bird",
  },
  {
    id: "4",
    label: "ハムスター",
    value: "hamster",
  },
]

export const Form2: React.VFC<{
  updateAction: (data: Form2DataType) => void
  moveToConfirm: () => void
}> = ({ updateAction, moveToConfirm }) => {
  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Form2DispType>()
  const onSubmit = (data: Form2DispType) => {
    const d: Form2DataType = {
      age: Number(data.age),
      phoneNumber: data.phoneNumber,
      havePet: data.havePet === "1",
      pets: data.pets,
    }
    // ここでデータ変換する
    console.log(data)
    updateAction(d)
    moveToConfirm()
  }

  console.log("errors", errors)

  const isDuelist = watch("havePet")

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.age}>
          <FormLabel htmlFor="age">年齢</FormLabel>
          <Input
            id="age"
            {...register("age", {
              required: { value: true, message: "年齢は必須入力です。" },
              maxLength: {
                value: 3,
                message: "3桁以下の数値を入力してください。",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "数値で入力してください。",
              },
              onBlur: () => {
                trigger("age")
              },
            })}
          />
          {errors.age && (
            <FormErrorMessage>{errors.age.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.phoneNumber}>
          <FormLabel htmlFor="phoneNumber">電話番号</FormLabel>
          <Input
            id="phoneNumber"
            {...register("phoneNumber", {
              required: { value: true, message: "電話番号は必須入力です。" },
              minLength: {
                value: 5,
                message: "電話番号は5文字以上で入力してください。",
              },
            })}
          />
          {errors.phoneNumber && (
            <FormErrorMessage>{errors.phoneNumber.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.havePet}>
          <FormLabel as="legend">ペットを飼っていますか？</FormLabel>
          <RadioGroup>
            <Stack direction="row">
              <Radio
                value="1"
                {...register("havePet", {
                  required: true,
                })}
              >
                はい
              </Radio>
              <Radio
                value="2"
                {...register("havePet", {
                  required: true,
                })}
              >
                いいえ
              </Radio>
            </Stack>
          </RadioGroup>
          {errors.havePet && errors.havePet.type === "required" && (
            <FormErrorMessage>いずれかを選択してください。</FormErrorMessage>
          )}
          <FormHelperText>Select only if you're a fan.</FormHelperText>
        </FormControl>
        {isDuelist === "1" && (
          <FormControl isInvalid={!!errors.pets}>
            <FormLabel as="legend">
              飼っているペットを選んでください。
            </FormLabel>
            <Stack spacing={5}>
              <CheckboxGroup>
                {petsCheckbox.map(v => (
                  <SelectPet<Form2DispType>
                    key={v.id}
                    register={register}
                    value={v.value}
                    label={v.label}
                    registerKey={"pets"}
                  />
                ))}
              </CheckboxGroup>
            </Stack>
            {errors.pets && (
              <FormErrorMessage>
                {(errors.pets as any).message}
              </FormErrorMessage>
            )}
            <FormHelperText>Select only if you're a fan.</FormHelperText>
          </FormControl>
        )}
        <Input type="submit" value="次の画面へ" />
      </form>
    </div>
  )
}

const Form2Container: React.VFC<{}> = ({}) => {
  let navigate = useNavigate()
  const dispatch = useAppDispatch()
  const updateAction = (data: Form2DataType) => dispatch(form2Update(data))
  return (
    <Form2
      updateAction={updateAction}
      moveToConfirm={() => navigate("/confirm")}
    />
  )
}

export default Form2Container
