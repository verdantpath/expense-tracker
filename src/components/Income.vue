<template>
  <div class="column">
    <h2>Income</h2>
      <form class="ui form">
      <div class="field">
        <label>Day Job</label>
        <input v-model="incomeFields.dayJob" type="text" placeholder="Enter your monthly Logical Position income" />
      </div>
      <div class="field">
        <label>Other</label>
        <input v-model="incomeFields.other" type="text" placeholder="Enter your other monthly income" />
        <span class="show-more" @click="addMoreIncome = !addMoreIncome">+</span>
          <div v-if="addMoreIncome" class="add-more-container">
            <div class="add-item" v-for="(item,key) in this.otherIncomeFields" :key="key">
              <input type="text" v-model="this.otherIncomeFields[key].item" placeholder="Description" />
              <input type="text" v-model="this.otherIncomeFields[key].amount" placeholder="Amount" />
              <span class="remove-item" @click="removeField(key, this.otherIncomeFields, 'other')">&ndash;</span>
            </div>
            <button @click="addField(this.otherIncomeFields, 'other', $event)" class="ui button">Add Another</button>
          </div>
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
        dayJob: '',
        other: ''
      },
      otherIncomeFields: [
        {
          item: '',
          amount: null
        }
      ],
      totalIncome: 0,
      addMoreIncome: false,
    }
  },
  methods: {
    updateTotals() {
      // this.totalIncome = parseFloat(
      //   Number(this.incomeFields.dayJob)
      // + Number(this.incomeFields.other)  
      // ).toFixed(2);
      this.totalIncome = Object.keys(this.incomeFields)
      .reduce((acc,key) => {
        return parseFloat(acc + Number(this.incomeFields[key]));
      }, 0).toFixed(2);
      this.$store.dispatch('updateTotalIncome', this.totalIncome);
    },
    sumFields(fieldType) {
      return Object.keys(fieldType).reduce((acc,key) => {
        return parseFloat(acc + Number(fieldType[key].amount));
      }, 0).toFixed(2);
    },
    addField(fieldType, parentField, event) {
      event.preventDefault();
      fieldType.push({ item: "", amount: null });
      this.incomeFields[parentField] = this.sumFields(fieldType);
    },
    removeField(index, fieldType, parentField) {
      fieldType.splice(index, 1);
      this.incomeFields[parentField] = this.sumFields(fieldType)
    },
  },
  computed() {

  },
  created() {
    this.emitter.on('clear-fields', () => {
      // console.log('income cleared');
      Object.keys(this.incomeFields).forEach(key => {
        this.incomeFields[key] = '';
      });
      this.otherIncomeFields = [{ item: "", amount: null }];
      this.addMoreIncome = false;
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