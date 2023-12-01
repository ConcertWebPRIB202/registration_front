<script setup>
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
    show:{
        type: Boolean,
        default: ''
    },
    error: {
        type: Array,
        required: false
    }
})

// console.log(props.error)

const updateValue = (e) => {
    emits('update:value', e.target.value)
}
const updateShow = (e) => {
    emits('update:value', e.target.error)
}
</script>

<template>
    <div class="flex mb-5">
        <img v-if="requiredStar == true" src="./icons/star.svg" />
        <input
        :id="name"
        :name="name"
        :type="type"
        :value="value"
        :placeholder="placeholder" 
        @input="updateValue"
        class="input border-rd-10 text-color-white input-padding input-margin submain-background-color font-size-8 border-0"
        :class="error ? 'borderErrors' : ''"
        >
        {{ error }}
        <img v-if="tooltip == true" src="./icons/question mark.svg" />
    </div>
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
    margin-left: 52px;
}
.borderErrors{
    border: 2px solid #F47A7A;
}
</style>