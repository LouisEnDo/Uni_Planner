
<script lang="ts">
  let { data } = $props();

  const onAddEvent = ()=>{

  }
</script>
<h1>Dein Stundenplaner</h1>

<div class="flex flex-row gap-2 max-h-fit h-fit">
<div class="flex flex-row w-fit border border-gray-300 rounded-lg px-4 w-1/2">
    <span class="flex-1 font-bold bg-gray-300 px-2">Montag</span>
    <span class="flex-1 font-bold bg-blue-100 px-2">Dienstag</span>
    <span class="flex-1 font-bold bg-gray-300 px-2">Mittwoch</span>
    <span class="flex-1 font-bold bg-blue-100 px-2">Donnerstag</span>
    <span class="flex-1 font-bold bg-gray-300 px-2">Freitag</span>
    <span class="flex-1 font-bold bg-blue-100 px-2">Samstag</span>
    <span class="flex-1 font-bold bg-gray-300 px-2">Sonntag</span>
</div>
<div class="flex flex-col border rounded w-1/2">
<span>Termin Hinzufügen</span>
  <input type="text" id="title" placeholder="Name"/>
  <label for="weekday">Wochentag</label>
  <select name="weekday" id="weekday">
  <option value="mon">Montag</option>
  <option value="tue">Dienstag</option>
  <option value="wed">Mittwoch</option>
  <option value="thu">Donnerstag</option>
  <option value="fri">Freitag</option>
  <option value="sat">Samstag</option>
  <option value="sun">Sonntag</option>
</select>
  <input type="time" placeholder="von"/>
  <input type="time" placeholder="bis"/>

  <label for="type">Typ</label>
  <select name="type" id="type">
  <option value="activity">Aktivität</option>
  <option value="university">Uni</option>
  <option value="work">Arbeit</option>
  <option value="other">Sonstige</option>

</select>
<button class="border rounded bg-green-800/20 p-2 m-2 hover:bg-green-800/50" typeof="submit" onclick={onAddEvent}>Termin hinzufügen</button>
</div>
</div>
