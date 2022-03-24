const app = new Vue({
    el: "#app",
    data: {
        emailList: [],
        
    },
    methods: {
        // removeListItem(itemIndex){
        //     if(this.emailList[itemIndex] != undefined){
        //         this.emailList.splice(itemIndex, 1);
        //     }
        //     else{
        //         console.log("This element doesn't exist");
        //     }
        // }
    },
    created(){},
    mounted(){
        const self = this;
        for(i = 0;i < 10;i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(function (answer) {
            self.emailList.push(answer.data.response);
        })
        }
    }
});