<script setup>
import { vMaska } from "maska";
const emits = defineEmits(['update:value'])
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'text'
    },
    value: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        required: true
    },
    tooltip: {
        type: Boolean,
        default: false
    },
    requiredStar: {
        type: Boolean,
        default: false
    },
    valueUpdate:{
        type: String,
        default: ''
    },
    error: {
        type: Array,
        required: false
    }
})

const updateValue = (e) => {
    emits('update:value', e.target.value)
}
const updateShow = (e) => {
    emits('update:value', e.target.valueUpdate)
}
</script>

<template>
    <input
    :id="name"
    :name="name"
    :type="type"
    :value="value"
    :placeholder="placeholder" 
    v-maska data-maska="+7 ### ### ## ##"
    @input="updateValue"
    class="input border-rd-10 text-color-white input-padding input-margin submain-background-color font-size-8 border-0"
    :class="error.length > 0 ? 'borderErrors' : ''"
    >
    <TransitionGroup>
        <div v-for="element of error" :key="element.$uid" class="mb-5 flex mt-5 font-size-8 errorMessage error-message-color-text">
            {{ element.$message }}
        </div>
    </TransitionGroup>
</template>

<style scoped>
.input{
    background: #373737;
}
.errorMessage{
    margin-left: 32px;
}
.borderErrors{
    border: 2px solid #F47A7A;
}
</style>