import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@psilva1982-ds/react'
import { ArrowRight } from 'phosphor-react'

export default {
    title: 'Form/Button',
    component: Button,
    args: {
        children: 'Send',
    },
    tags: ['autodocs'],
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        variant: 'secondary',
        children: 'Create new',
    },
}

export const Link: StoryObj<ButtonProps> = {
    args: {
        variant: 'link',
        children: 'Cancel',
    },
}

export const Small: StoryObj<ButtonProps> = {
    args: {
        size: 'sm',
    },
}

export const WithIcon: StoryObj<ButtonProps> = {
    args: {
        children: (
            <>
                Próximo passo
                <ArrowRight weight="bold" />
            </>
        ),
    },
}

export const Disabled: StoryObj<ButtonProps> = {
    args: {
        disabled: true,
    },
}