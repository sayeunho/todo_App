<template>
    <div class="inputBox shadow">
       <input
        type="text"
        v-model="newTodoItem"
        placeholder="이곳에 해야할 일을 적어주세요"
        v-on:keyup.enter="addTodo"
        />
        <span class="addContainer" v-on:click="addTodo">
            <font-awesome-icon class="addBtn" icon="plus" aria-hidden="true" />
        </span> 

        <modal v-if="showModal" @close="showModal = false" >
            <h3 slot="header">경고</h3>
            <span slot="body">할 일을 입력해주세요.</span>
            <button slot="footer" @click="showModal = false">닫기</button>
        </modal>       
    </div>
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
    data() {
        return {
            newTodoItem: "",
            showModal: false
        };
    },
    methods: {
        addTodo() {
            if (this.newTodoItem !== "") {
                let value = this.newTodoItem && this.newTodoItem.trim();
                this.$emit("addTodo", value);
                this.clearInput();
            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput() {
            this.newTodoItem = "";
        }
    },
    components: {
        Modal : Modal
    }        
};
</script>