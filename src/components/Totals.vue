<template>
  <div class="column right">
    <div class="update-clear-btns">
      <button @click="updateTotals" class="ui primary button">Update</button>
      <button @click="clearAllFields" class="ui primary button">Clear</button>
      <!-- <button @click="sanityCheck" class="ui primary button">Sanity Check</button> -->
      <!-- <button @click="tester" class="ui primary button">Tester</button> -->
    </div>
     <p>Total expenses: {{ totalExpenses }}</p>
     <p>Total income: {{ totalIncome }}</p>
     <p>Extra money: {{ totalIncome - totalExpenses }}</p>
     <p>Foo: {{ getTotalIncome }}</p>
     <!-- <p>computedTotalExpenses: {{ computedTotalExpenses }}</p> -->
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  
  export default {
    name: 'Totals',
    data() {
      return {
        totalExpenses: 0,
        totalIncome: 0,
        count: 0,
        testers: 0  
      } 
    },
    emits: [
      'clear-fields'
    ],
    methods: {
      updateTotals() {
        this.totalExpenses = this.$store.getters.getTotalExpenses;
        this.totalIncome = this.$store.getters.getTotalIncome;
      },
      clearAllFields() {
        if(confirm("Do you really want to clear all fields and start over?")) {
          this.emitter.emit('clear-fields');
          this.totalExpenses = 0;
          this.totalIncome = 0;
        }
      },
    },
    computed: {
      // foo() {
      //   return this.$store.getters.getFoo
      // },
      ...mapGetters([
        'getFoo',
        'getTotalExpenses',
        'getTotalIncome'
      ]),
    }
  }
</script>

<style scoped>
  .right {
    text-align: right;
  }
  .update-clear-btns {
    padding: 30px 0;
  }
</style>