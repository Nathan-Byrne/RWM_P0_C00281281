<script lang="ts">
  import './ChecklistItems.css';

  // Button Data
  type ButtonData = {
    label: string;
    active: boolean;
  };

  // Buttons to Update the Bar
  let buttons: ButtonData[] = [
    { label: '1st Task', active: false },
    { label: '2nd Task', active: false },
    { label: '3rd Task', active: false },
    { label: '4th Task', active: false },
    { label: '5th Task', active: false }
  ];

  // Bar Percent
  let progress = 0;

  // Log Percent Updates on Press
  function toggleButton(index: number) {
    buttons[index].active = !buttons[index].active;
    buttons = [...buttons];
  }

  // Updates Progress Bar once Submitted
  function submitProgress() {
    const activeCount = buttons.filter((btn) => btn.active).length;
    progress = activeCount * 20;
  }
</script>

<div class="container">
  <!-- Bar -->
  <div class="progress-bar">
    <div class="progress" style="width: {progress}%;"></div>
  </div>

  <!-- Task Buttons -->
  <div class="buttons">
    {#each buttons as btn, i}

      <button class:active={btn.active} on:click={() => toggleButton(i)}>
        {btn.label}
      </button>

    {/each}
  </div>

  <!-- Submit Button-->
  <button class="submit" on:click={submitProgress}>Submit</button>
</div>