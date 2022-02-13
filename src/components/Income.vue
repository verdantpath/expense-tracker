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
    <p>{{ totalIncome }}</p>
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
      totalIncome: 0,
    }
  },
  methods: {
    updateTotals() {
      // this.totalIncome = parseFloat(
      //   Number(this.incomeFields.logicalPosition)
      // + Number(this.incomeFields.other)  
      // ).toFixed(2);
      this.totalIncome = Object.keys(this.incomeFields)
      .reduce((acc,key) => {
        return parseFloat(acc + Number(this.incomeFields[key]));
      }, 0).toFixed(2);
      this.$store.dispatch('updateTotalIncome', this.totalIncome);
    },
  },
  computed() {

  },
  created() {
    this.emitter.on('clear-fields', () => {
      console.log('income cleared');
      Object.keys(this.incomeFields).forEach(key => {
        this.incomeFields[key] = '';
      });
      
      // console.log(this.incomeFields);
      // this.incomeFields.other = '';
      // for (let field in this.incomeFields) {
      //   // console.log(field);
      //   field.value = '';
      // }
    });
  },
  updated() {
    this.updateTotals();
  },
}
</script>

<style scoped>

</style>