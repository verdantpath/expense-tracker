<template>
  <div class="column">
    <h2>Income</h2>
      <form class="ui form">
      <div class="field">
        <label>Day Job</label>
        <input v-model="incomeFields.logicalPosition" type="text" placeholder="Enter your monthly Logical Position income" />
      </div>
      <div class="field">
        <label>Other</label>
        <input v-model="incomeFields.other" type="text" placeholder="Enter your other monthly income" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Income',
  data() {
    return {
      incomeFields: {
        logicalPosition: '',
        other: ''
      },
    }
  }
}
</script>

<style scoped>

</style>