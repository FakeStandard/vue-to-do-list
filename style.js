const { createApp } = Vue

createApp({
    data() {
        return {
            idx: 4,
            tabList: ['All', 'Active', 'Completed'],
            tabSelected: 'All',
            userInput: "",
            lists: [
                { id: 1, name: 'First todo', completed: true },
                { id: 2, name: 'Second todo', completed: false },
                { id: 3, name: 'Third todo', completed: false },
            ]
        }
    },
    computed: {
        filterItem() {
            switch (this.tabSelected) {
                case 'All':
                    return this.lists
                case 'Active':
                    return this.lists.filter(f => !f.completed)
                case 'Completed':
                    return this.lists.filter(f => f.completed)
            }
        }
    },
    methods: {
        addClick() {
            const data = { id: this.idx, name: this.userInput }
            this.lists.push(data)
            this.idx++
            this.userInput = ""
        },
        removeClick(id) {
            const idx = this.lists.findIndex(f => f.id == id)

            if (idx !== -1)
                this.lists.splice(idx, 1)
        },
        clearClick() {
            this.lists = []
        },
        editClick(item) {
            console.log(item)
        },
        activeItem(items) {
            return items.filter(f => !f.completed)
        },
        completedItem(items) {
            return items.filter(f => f.completed)
        }
    }
}).mount('#app')