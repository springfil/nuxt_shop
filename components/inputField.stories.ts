import type { Meta, StoryObj } from "@storybook/vue3";
import inputField from "./inputField.vue";

const meta: Meta<typeof inputField> = {
    title: "Components/InputField",
    component: inputField,
    argTypes: {
        variant: {
            control: "select",
            options: ["gray", "black"],
        },
    },
    args: {
        variant: "gray",
    },
    render: (args) => ({
        components: { inputField },
        setup() {
            return { args };
        },
        template: `<inputField :variant="args.variant" placeholder="Введите текст..." />`,
    }),
};

export default meta;
type Story = StoryObj<typeof inputField>;

export const Gray: Story = {
    args: {
        variant: "gray",
    },
};

export const Black: Story = {
    args: {
        variant: "black",
    },
};
