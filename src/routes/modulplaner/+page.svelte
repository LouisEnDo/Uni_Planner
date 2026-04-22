
<script lang="ts">
  let { data } = $props();

</script>
<h1>Dein Stundenplaner</h1>
<table>
<thead class="border-solid border rounded-lg">
<tr class="m-2">
    <th>Modulname</th>
    <th>Credits</th>
</tr>
</thead>
<tbody>
{#each data.modules as module}
  <tr><td>{module.name}</td><td>{module.credits}</td></tr>
{/each}
</tbody>
</table>
