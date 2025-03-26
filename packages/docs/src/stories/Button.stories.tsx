import type { StoryObj, Meta } from "@storybook/react"

import { Button, ButtonProps } from '@psilva1982-ds/react'

export default {
  title: 'Button',
  component: Button,

  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Small: StoryObj<ButtonProps> = {

}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: "big"
  },
}
