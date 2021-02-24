app.component('photo-view', {
    props:  {
        canvas: Boolean,
        canvasSrc: String
    },
    template: `
    <div class="w-2/6 p-4 bg-gray-900 flex" v-show="canvas">
      <img :src="canvasSrc" class="w-11/12">
      <button v-on:click="closeCanvas" class="h-1/4 focus:outline-none items-start">
        <i class="im im-x-mark text-white mx-5"></i>
      </button>
    </div>
    `,
    methods: {
        closeCanvas(){
            this.$emit('close-canvas')
        }
    }
})