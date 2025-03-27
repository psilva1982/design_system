import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@psilva1982-ds/react'

export default {
    title: 'Surfaces/Box',
    component: Box,
    args: {
        children: (
            <>
                <Text>Testando o elemento Box</Text>
            </>
        ),
    },  
    argTypes: {
        children: {
          control: {
            type: null,
          },
        },
      },
    tags: ['autodocs'],
} as Meta<BoxProps>

export const Default: StoryObj<BoxProps> = {}