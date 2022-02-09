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
    <p>{{ totalIncome }}</p>
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
      totalIncome: 0,
    }
  },
  methods: {
    updateTotals() {
      this.totalIncome = parseFloat(
        Number(this.incomeFields.logicalPosition)
      + Number(this.incomeFields.other)  
      ).toFixed(2);
      this.$store.dispatch('updateTotalIncome', this.totalIncome);
    },
  },
  computed() {

  },
  updated() {
    this.updateTotals();
  },
}
</script>

<style scoped>

</style>