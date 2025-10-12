<script lang="ts">
  import './button.css';

  interface Props {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onclick?: () => void;
  }

  const { primary = false, backgroundColor, size = 'medium', label, ...props }: Props = $props();
  
  let mode = $derived(primary ? 'checklist-button--primary' : 'checklist-button--secondary');
  let style = $derived(backgroundColor ? `background-color: ${backgroundColor}` : '');
</script>

<button
  type="button"
  class={['checklist-button', `checklist-button--${size}`, mode].join(' ')}
  {style}
  {...props}
>
  {label}
</button>
