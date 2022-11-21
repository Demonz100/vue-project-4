import { defineStore } from "pinia";

export const useCoffeeStore = defineStore('useCoffeeStore', {
    state: () => {
        return{
            coffees: []
        }
    },
    actions: {
        async getCoffees() {
            const res = await fetch("/db.json").then(response => response.json()).catch(er => console.log(er))
            this.coffees.push(...res.coffees)
        }
    }
})