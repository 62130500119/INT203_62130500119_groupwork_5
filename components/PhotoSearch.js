app.component('photo-search',{
    props:{
        search: Boolean,cancel: Boolean,input: Boolean,nopic: Boolean,canvas: Boolean
    },
    template: `
    <div class="w-2/6 p-3 flex flex-row-reverse" v-show="!canvas">
        <button v-show="search" @click="toggleSearch" class="focus:outline-none"><i class="im im-magnifier" style="font-size: 2.65em"></i></button>
        <button v-show="cancel" @click="toggleSearch" class="w-20 h-12 mx-1 text-xl text-white bg-blue-500 rounded-md">Cancel</button>
        <input v-show="input" type="text" v-model="inputTask" @keyup.enter="searching" placeholder="Enter a new task ..." class="bg-white rounded flex-1 border-b-2 border-blue-300 focus:outline-none">
    </div>
    `,
    data() {
        return {
            inputTask: ''
        }
    },
    methods: {
        toggleSearch(){
            this.$emit('toggle-search')
        },
        searching(){
            this.$emit('searching',this.inputTask)
        }   
    }
});