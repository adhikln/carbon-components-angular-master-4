/* tslint:disable variable-name */
import "storybook-addon-code-display-ts/register";
import { moduleMetadata, Meta, Story } from "@storybook/angular";
import { IconModule } from "../icon";
import { ButtonModule, ButtonSet } from "./";

export default {
	title: "Components/Button/Button Set",
	decorators: [
		moduleMetadata({
			imports: [ButtonModule, IconModule],
		}),
	],
	parameters: {
		layout: "centered",
		// Add the code parameter here
		code: `
      <cds-button-set>
        <button cdsButton="secondary" [size]="size" [isExpressive]="isExpressive">Button</button>
        <button cdsButton [size]="size" [isExpressive]="isExpressive">Button</button>
      </cds-button-set>
    `,
	},
	component: ButtonSet,
} as Meta;

const Template: Story<ButtonSet> = (args) => ({
	props: args,
	template: `
    <cds-button-set>
      <button cdsButton="secondary" [size]="size" [isExpressive]="isExpressive">Button</button>
      <button cdsButton [size]="size" [isExpressive]="isExpressive">Button</button>
    </cds-button-set>
  `,
});

export const Basic = Template.bind({});
