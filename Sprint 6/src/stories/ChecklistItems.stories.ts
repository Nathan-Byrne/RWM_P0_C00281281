import type { Meta, StoryFn } from '@storybook/svelte';
import ChecklistItems from '$lib/components/ChecklistItems.svelte';

const meta: Meta<typeof ChecklistItems> = {
  title: 'Example/ProgressButtons',
  component: ChecklistItems,
};

export default meta;

type ProgressButtonsProps = typeof ChecklistItems extends new (...args: any) => { $$prop_def: infer P } ? P : never;

const Template: StoryFn<ProgressButtonsProps> = (args: ProgressButtonsProps) => ({
  Component: ChecklistItems,
  props: args,
});

// Hold Everything in 1 Page
export const Page = Template.bind({});
Page.args = {
};