import type { Meta, StoryObj } from "@storybook/vue3";
import ActionButton from "./ActionButton.vue";

const meta: Meta<typeof ActionButton> = {
    title: "Components/ActionButton",
    component: ActionButton,
    argTypes: {
        color: {
            control: "select",
            options: ["primary", "ghost"],
        },
        default: {
            control: "text",
            description: "Slot content",
        },
    },
    args: {
        color: "primary",
        default: "Button",
    },
    render: (args) => ({
        components: { ActionButton },
        setup() {
            return { args };
        },
        template: `<ActionButton :color="args.color">{{ args.default }}</ActionButton>`,
    }),
};

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Primary: Story = {
    args: {
        color: "primary",
    },
};

export const Ghost: Story = {
    args: {
        color: "ghost",
    },
};
