import CheckMark from "components/svgComponents/CheckMarkIcon"
import colors from "constants/colors"
import { mediaDevice, pixelToRem } from "helpers/responsiveUITools"
import Image from "next/image"
import React, { forwardRef } from "react"
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form"
import styled from "styled-components"

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid
    ${(props: { hasError: boolean }) =>
      props.hasError ? colors.red : "transparent"};
  padding: ${(props: { hasError: boolean }) => (props.hasError ? 3 : 0)}px;

  ${mediaDevice["mobile"]`
        margin-top: 16px;
    `}
`

const CheckboxSimulator = styled.div`
  width: 22px;
  height: 22px;
  min-width: 22px;
  min-height: 22px;
  background: ${colors.ivoryWeb};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  ${mediaDevice["mobile"]`
		background: ${colors.ivoryMobile};
    `}
`

export const ErrorMessage = styled.span`
  font-weight: 400;
  font-size: ${pixelToRem(10)};
  line-height: 12px;
  color: ${colors.red};
`

const CheckboxSimulatorSelected = styled(CheckboxSimulator)`
  background: ${colors.green};
`

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const Label = styled.label`
  font-weight: 400;
  font-size: ${pixelToRem(14)};
  line-height: 17px;
  display: flex;
  align-items: center;

  ${mediaDevice["mobile"]`
		font-weight: 400;
		font-size: ${pixelToRem(13)};
		line-height: 16px;
    `}
`

type Props = {
  label?: string
  name: string
  className?: string
  errorMessage?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
  value: boolean
  renderCustomLabel?: () => React.ReactNode
}

const Checkbox = forwardRef(
  (
    {
      label,
      name,
      className,
      errorMessage,
      value,
      renderCustomLabel,
      ...props
    }: Props,
    ref
  ) => {
    function renderCheckboxSimulator() {
      if (value) {
        return (
          <CheckboxSimulatorSelected>
            <CheckMark />
          </CheckboxSimulatorSelected>
        )
      }

      return <CheckboxSimulator />
    }

    return (
      <>
        <Container hasError={!!errorMessage?.message} className={className}>
          <StyledCheckbox
            defaultChecked={value}
            type="checkbox"
            id={name}
            name={name}
            {...props}
          />
          <Label htmlFor={name}>
            {renderCheckboxSimulator()}
            {label}
          </Label>
          {renderCustomLabel && renderCustomLabel()}
        </Container>
        {!!errorMessage?.message && (
          <ErrorMessage>{errorMessage?.message instanceof Error}</ErrorMessage>
        )}
      </>
    )
  }
)

export default Checkbox
