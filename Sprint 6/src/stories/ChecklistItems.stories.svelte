<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ChecklistItems from './ChecklistItems.svelte';
  import { fn } from 'storybook/test';

  const { Story } = defineMeta({
    title: 'Sprint 6/Checklist Items',
    component: ChecklistItems,
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
      size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
      },
    },
    args: {
      onclick: fn(),
    }
  });
</script>

<Story name="Button 1" args={{ size: 'large', label: 'Button' }} />

<Story name="Button 2" args={{ size: 'large', label: 'Button' }} />

<Story name="Button 3" args={{ size: 'large', label: 'Button' }} />

<Story name="Button 4" args={{ size: 'large', label: 'Button' }} />

<Story name="Button 5" args={{ size: 'large', label: 'Button' }} />