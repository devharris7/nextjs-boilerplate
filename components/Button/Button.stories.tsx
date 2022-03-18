import type { Story, Meta } from "@storybook/react/types-6-0";

import Button from "./Button";
import type { ButtonProps } from "./Button";

export default {
  title: "Button",
  component: Button,
} as Meta;

export const Template: Story<ButtonProps> = (args) => <Button {...args}>Default</Button>;

export const Small: Story<ButtonProps> = Template.bind({});
Small.args = {
  size: "sm",
};

export const Base: Story<ButtonProps> = Template.bind({});
Base.args = {
  size: "md",
};

export const Large: Story<ButtonProps> = Template.bind({});
Large.args = {
  size: "lg",
};

export const Contained: Story<ButtonProps> = Template.bind({});
Contained.args = {
  variant: "contained",
};

export const Outlined: Story<ButtonProps> = Template.bind({});
Outlined.args = {
  variant: "outlined",
};

export const Disabled: Story<ButtonProps> = Template.bind({});
Disabled.args = {
  disabled: true,
};
