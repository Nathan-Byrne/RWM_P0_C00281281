<script lang="ts">
  import './ChecklistItems.css';

  // Button Data
  type ButtonData = {
    label: string;
    active: boolean;
  };

  // Buttons to Update the Bar
  let buttons: ButtonData[] = [
    { label: 'Num 1 Task', active: false },
    { label: 'Num 2 Task', active: false },
    { label: 'Num 3 Task', active: false },
    { label: 'Num 4 Task', active: false },
    { label: 'Num 5 Task', active: false }
  ];

  // Bar Percent
  let progress = 0;
  let enableTooltip = false;

  // Log Percent Updates on Press
  function toggleButton(index: number) {
    buttons[index].active = !buttons[index].active;
    if (buttons[index].active == true)
      buttons[index].label = "Num " + (index + 1).toString() + " Task ✓";
    else
      buttons[index].label = "Num " + (index + 1).toString() + " Task";
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
  <div class="progress-bar" aria-hidden="true" 
    on:mousemove={() => enableTooltip = true}
    on:mouseout={() => enableTooltip = false}
    on:blur={() => enableTooltip = false}>
    <div class="progress" style="width: {progress}%;">
      <!--<span class="tick">&#10003;</span>-->
      <!--<span class="tick">&#10003;</span>-->
      <!--<span class="tick">&#10003;</span>-->
      <!--<span class="tick">&#10003;</span>-->
      <!--<span class="tick">&#10003;</span>-->
    </div>
  </div>

  {#if enableTooltip && progress >= 50}
    <div>
      <span>Tooltip: 50% or more</span>
    </div>
  {/if}

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