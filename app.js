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
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        deleteNote(idx) {
            this.notes.splice(idx, 1)
        }
    },
    computed: {

    },
    watch: {
        inputValue(value) {
            if (value.length >= 59) {
                alert('Заметка слишком длинная')
            }
        }
    }
}

Vue.createApp(App).mount('#app')