import React from "react"
import { UseFormRegister, Path } from "react-hook-form"
import { Checkbox } from "@chakra-ui/react"

type Form2DispType = {
  age: string
  phoneNumber: string
  havePet: string
  pets: string[]
}

interface Props<T> {
  register: UseFormRegister<T>
  label: string
  value: string
  registerKey: Path<T>
}

const SelectPet = <T extends Form2DispType>({
  register,
  label,
  value,
  registerKey,
}: Props<T>) => {
  return (
    <Checkbox
      {...register(registerKey, {
        required: {
          value: true,
          message: "必須選択です。",
        },
      })}
      value={value}
    >
      {label}
    </Checkbox>
  )
}

export default SelectPet
