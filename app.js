const App = {
    data() {
        return {
            placeholder: 'Введите название заметки',
            title: 'Список заметок',
            inputValue: '',
            notes: ['Купить молоко', 'Вынести мусор', 'Убрать кровать']
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        deleteNote(idx) {
            this.notes.splice(idx, 1)
        }
    }
}

Vue.createApp(App).mount('#app')