import type { Meta, StoryObj } from '@storybook/react'
 import { Avatar, AvatarProps } from '@psilva1982-ds/react'
 
 export default {
   title: 'Data display/Avatar',
   component: Avatar,
   args: {
     src: 'https://i.pravatar.cc/300',
     alt: 'Random avatar',
   },
   argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },   
   tags: ['autodocs'],
 } as Meta<AvatarProps>
 
 export const Primary: StoryObj<AvatarProps> = {}
 
 export const WithFallback: StoryObj<AvatarProps> = {
   args: {
     src: undefined,
   },
 }