<script lang="ts">
  import './ChecklistItems.css';

  // Button Data
  type ButtonData = 
  {
    label: string;
    active: boolean;
  };

  // Buttons to Update the Bar
  let buttons: ButtonData[] = 
  [
    { label: '1st Task', active: false },
    { label: '2nd Task', active: false },
    { label: '3rd Task', active: false },
    { label: '4th Task', active: false },
    { label: '5th Task', active: false }
  ];

  

  // Bar Percent
  let progress = 0;
  // Whenever progress bar changes we update this with a dollar sign
  $: isHalfComplete = progress >= 50;
  let enableTooltip = false;

  // Log Percent Updates on Press
  function toggleButton(index: number) 
  {
    buttons[index].active = !buttons[index].active;
    buttons = [...buttons];
  }

  // Updates Progress Bar once Submitted
  function submitProgress() {
    const activeCount = buttons.filter((btn) => btn.active).length;
    progress = activeCount * 20;
  }
</script>

<style>
/* Tooltip container */
.tooltip 
{
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* Add dots under the hoverable text */
  cursor: pointer;
}

/* Tooltip text */
.tooltiptext 
{
  visibility: hidden; /* Hidden by default */
  width: 130px;
  background-color: black;
  color: blue;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1; /* Ensure tooltip is displayed above content */
}

/* Show the tooltip text on hover */
.tooltip:hover .tooltiptext 
{
    visibility: visible;
}
</style>


<div class:half-complete = {isHalfComplete}>
  Hover over me
  <span class="tooltiptext">You're 50% of the way there! (milestone)</span>
</div>




<div class="container">
  <!-- Bar -->
  <div class="progress-bar" aria-hidden="true"
  on:mousemove={() => enableTooltip = true}
  on:mouseout={() => enableTooltip = false}
  on:blur={() => enableTooltip = false}>
    <div class="progress" style="width: {progress}%;"></div>
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

        {#if btn.active}
        <!-- &#10003 is a tickmark character -->
        <!-- aria-hidden="true" hides accessiblity modes for screen readers (text to speech?) from appearing -->
          <span class = "tick"  aria-hidden="true">&#10003</span>
        {/if}
        
      </button>

    {/each}
  </div>

  <!-- Submit Button-->
  <button class="submit" on:click={submitProgress}>Submit</button>
  
  <p>Task &#10003;</p>
</div>