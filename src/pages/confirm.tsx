import React from "react"
import { useAppSelector } from "../redux/hooks"
import type { FormdataType } from "../redux/reducers/formData"

const Confirm: React.VFC<{ formData: FormdataType }> = ({ formData }) => {
  console.log({ formData })
  return (
    <div>
      <p>確認画面です。</p>
      <div>// TODO: フォームに入力した内容を表示したい</div>
    </div>
  )
}

const ConfirmContainer: React.VFC<{}> = ({}) => {
  const formData = useAppSelector(state => state.formData)
  return <Confirm formData={formData} />
}

export default ConfirmContainer
