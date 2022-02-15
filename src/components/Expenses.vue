<template>
  <div class="column">
    <h2>Expenses</h2>
      <div class="input-form">
        <form class="ui form">
          <div class="field">
            <label>Rent</label>  
            <input v-model="expenseFields.rent" type="text" placeholder="Enter monthly rent amount" />
          </div>
          <div class="field">
            <label>Cellular</label>
            <input v-model="expenseFields.cellular" type="text" placeholder="Enter your monthly cell bill" />
          </div>
          <div class="field">
            <label>Internet</label>
            <input v-model="expenseFields.internet" type="text" placeholder="Enter your monthly ISP bill" />
          </div>
          <div class="field">
            <label>Energy</label>
            <input v-model="expenseFields.energy" type="text" placeholder="Enter your monthly energy bill" />
          </div>
          <div class="field">
            <label>Netflix</label>
            <input v-model="expenseFields.netflix" type="text" placeholder="Enter your monthly Netflix bill" />
          </div>
          <div class="field">
            <label>VPN</label>
            <input v-model="expenseFields.vpn" type="text" placeholder="Enter your monthly VPN bill" ref="vpnRef" />
          </div>
          <div class="field">
            <label>Car Insurance</label>
            <input v-model="expenseFields.carInsurance" type="text" placeholder="Enter your monthly car insurance bill" />
          </div>
          <div class="field">
            <label>Gasoline</label>
            <input v-model="expenseFields.gasoline" type="text" placeholder="Enter your monthly gas amount" />
            <span class="show-more" @click="addMoreGasoline = !addMoreGasoline">+</span>
            <div v-if="addMoreGasoline" class="add-more-container">
              <div class="add-item" v-for="(item,key) in this.gasolineFields" :key="key">
                <input type="text" v-model="this.gasolineFields[key].item" placeholder="Description" />
                <input type="text" v-model="this.gasolineFields[key].amount" placeholder="Amount" />
                <span class="remove-item" @click="removeField(key, this.gasolineFields, 'gasoline')">&ndash;</span>
              </div>
              <button @click="addField(this.gasolineFields, 'gasoline', $event)" class="ui button">Add Another</button>
            </div>
          </div>
          <div class="field">
            <label>Food and Groceries</label>
            <input v-model="expenseFields.food" type="text" placeholder="Enter your monthly food and grocery amount" />
            <span class="show-more" @click="addMoreFood = !addMoreFood">+</span>
            <div v-if="addMoreFood" class="add-more-container">
              <div class="add-item" v-for="(item,key) in this.foodFields" :key="key">
                <input type="text" v-model="this.foodFields[key].item" placeholder="Description" />
                <input type="text" v-model="this.foodFields[key].amount" placeholder="Amount" />
                <span class="remove-item" @click="removeField(key, this.foodFields, 'food')">&ndash;</span>
              </div>
              <button @click="addField(this.foodFields, 'food', $event)" class="ui button">Add Another</button>
            </div>
          </div>
          <div class="field">
            <label>Records</label>
            <input v-model="expenseFields.records" type="text" placeholder="Enter your monthly record expenditure" />
            <span class="show-more" @click="addMoreRecords = !addMoreRecords">+</span>
            <div v-if="addMoreRecords" class="add-more-container">
              <div class="add-item" v-for="(item,key) in this.recordsFields" :key="key">
                <input type="text" v-model="this.recordsFields[key].item" placeholder="Description" />
                <input type="text" v-model="this.recordsFields[key].amount" placeholder="Amount" />
                <span class="remove-item" @click="removeField(key, this.recordsFields, 'records')">&ndash;</span>
              </div>
              <button @click="addField(this.recordsFields, 'records', $event)" class="ui button">Add Another</button>
            </div>
          </div>
          <div class="field">
            <label>Entertainment and other</label>
            <input v-model="expenseFields.entertainment" type="text" placeholder="Enter your monthly entertainment and other expenses" />
            <span class="show-more" @click="addMoreEntertainment = !addMoreEntertainment">+</span>
            <div v-if="addMoreEntertainment" class="add-more-container">
              <div class="add-item" v-for="(item,key) in this.entertainmentFields" :key="key">
                <input type="text" v-model="this.entertainmentFields[key].item" placeholder="Description" />
                <input type="text" v-model="this.entertainmentFields[key].amount" placeholder="Amount" />
                <span class="remove-item" @click="removeField(key, this.entertainmentFields, 'entertainment')">&ndash;</span>
              </div>
              <button @click="addField(this.entertainmentFields, 'entertainment', $event)" class="ui button">Add Another</button>
            </div>
          </div>  
          <p>{{ totalExpenses }}</p>
        </form>
        
    </div>
  </div>
</template>

<script>
export default {
  name: 'Expenses',
  data() {
    return {
      expenseFields: {
        rent: '',
        cellular: '',
        internet: '',
        energy: '',
        netflix: '',
        vpn: '',
        carInsurance: '',
        gasoline: '',
        food: '',
        records: '',
        entertainment: ''
      },
      entertainmentFields: [
        {
          item: '', 
          amount: null
        }
      ],
      recordsFields: [
        {
          item: '',
          amount: null
        }
      ],
      foodFields: [
        {
          item: '',
          amount: null
        }
      ],
      gasolineFields: [
        {
          item: '',
          amount: null
        }
      ],
      addMoreEntertainment: false,
      addMoreRecords: false,
      addMoreFood: false,
      addMoreGasoline: false,
      totalExpenses: 0,
      // foo: foo,
    }
  },
  props: {
    msg: String,
  },
  methods: {
    sumFields(fieldType) {
      return Object.keys(fieldType).reduce((acc,key) => {
        return parseFloat(acc + Number(fieldType[key].amount));
      }, 0).toFixed(2);
    },
    updateTotals() {
      // event.preventDefault();
      this.totalExpenses = Object.keys(this.expenseFields)
      .reduce((acc,key) => {
          return parseFloat(acc + Number(this.expenseFields[key]))
        }, 0).toFixed(2);
      
      this.$store.dispatch('updateTotalExpenses', this.totalExpenses);
    },
    addField(fieldType, parentField, event) {
      event.preventDefault();
      fieldType.push({ item: "", amount: null });
      this.expenseFields[parentField] = this.sumFields(fieldType);
    },
    removeField(index, fieldType, parentField) {
      fieldType.splice(index, 1);
      this.expenseFields[parentField] = this.sumFields(fieldType)
    },
    updateFoo() {
      this.$store.dispatch('updateFoo', this.foo);
    }
  },
  computed: {
    foo() {
      return this.expenseFields.rent
    },
    // calculateTotals() {
    //   return this.updateTotals();
    // }
  },
  created() {
    this.updateFoo();
    console.log(this.expenseFields.rent);
    console.log("@@@ ", process.env.VUE_APP_LOCAL_URL, process.env.NODE_ENV, process.env.BASE_URL);
    this.emitter.on('clear-fields', () => {
      // console.log('expenses cleared');
      Object.keys(this.expenseFields).forEach(key => {
        this.expenseFields[key] = '';
      });
      this.entertainmentFields = [{ item: "", amount: null }];
      this.addMoreEntertainment = false;
      this.recordsFields = [{ item: "", amount: null }];
      this.addMoreRecords = false;
      this.foodFields = [{ item: "", amount: null }];
      this.addMoreFood = false;
      this.gasolineFields = [{ item: "", amount: null }];
      this.addMoreGasoline = false;
    });
  },
  updated() {
    this.updateTotals();
  }
}
</script>