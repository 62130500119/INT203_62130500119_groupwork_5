app.component('photo-item', {
    props:  {
        images: Array,
        nopic: Boolean
    },
    template: `
    <ul class="w-2/6">
      <li v-for="(img,index) in images" class="flex items-center" v-show="img.show">
      <button v-on:click="showCanvas(index)" class="focus:outline-none">
      <img :src="img.src" class="w-80 p-2">
    </button>
    <span class="w-52">
    <p class="text-2xl px-5">{{img.title}}</p>
    </span>
    <i class="im im-heart text-red-400" v-show="img.done"></i>
      </li>
      <div v-show="nopic" class="p-10 flex justify-center items-center">
        <h1 class="text-4xl font-bold">No Picture!</h1>
      </div>
    </ul>
    
    `,
    data() {
        return {
        }
    },
    methods: {
        showCanvas(index){
            this.$emit('show-canvas',index)
        }
    }
});