<script lang="ts">
  import { superForm } from 'sveltekit-superforms';

  // export let data;

  // Client API:
  // const { form } = superForm(data.form);
</script>


<form method="POST" action="?/sendEmail">
  <label for="name">Name</label>
  <!-- <input type="text" name="name" bind:value={$form.name} /> -->
  <input type="text" name="name" />

  <label for="email">E-mail</label>
  <!-- <input type="email" name="email" bind:value={$form.email} /> -->
  <input type="text" name="email" />

  <div><button type="submit">Submit</button></div>
  <!-- <p class="success">{$form?.success ||""}</p> -->
</form>

<style lang="scss">
  input {
    color: black;
  }
</style>