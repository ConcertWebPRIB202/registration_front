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
    textTooltip:{
        type: Boolean,
        default: ''
    },
    passvordlook:{
        type: Boolean,
        default: ''
    },
    passwordclose:{
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
</script>

<template>
    <!-- <div class="flex mb-5">
        <img v-if="requiredStar == true" src="./icons/star.svg" />
        <input
        :id="name"
        :name="name"
        :type="type"
        :value="value"
        :placeholder="placeholder" 
        @input="updateValue"
        class="input border-rd-10 text-color-white input-padding input-margin submain-background-color font-size-8 border-0"
        :class="error.length > 0 ? 'borderErrors' : ''"
        >
        <img v-if="tooltip == true" src="./icons/question mark.svg" />
    </div> -->
    <div class="flex mb-5 tooltip-group relative">
        <img v-if="requiredStar == true" src="../assets/star.svg" />
        <div class="relative">
            <input
                :id="name"
                :name="name"
                :type="type"
                :value="value"
                :placeholder="placeholder" 
                @input="updateValue"
                class="input border-rd-10 text-color-white input-padding input-margin submain-background-color font-size-8 border-0"
                :class="error.length > 0 ? 'borderErrors' : ''"
            >
            <!-- <img class='input-icon absolute input-icon-top input-icon-right' src="./assets/eye.svg" v-show="isShowPassword" type="password" @click="switchVisibility"/>
            <img class='input-icon absolute input-icon-top input-icon-right' src="./assets/passwordhide.svg" v-show="!isShowPassword" type="password" @click="switchVisibility" /> -->
            <img v-if="passvordlook == true" class='input-icon absolute input-icon-top input-icon-right' src="../assets/eye.svg"/>
            <img v-if="passwordclose == true" class='input-icon absolute input-icon-top input-icon-right' src="../assets/passwordhide.svg"/>
        </div>
        <!-- {{ error }} -->
        <!-- <div v-show="isShown" class="tooltip tooltip-bottom">Пароль должен состоять из <br> латинских символов. <br> Должен содержать знаки и <br> заглавные буквы</div>
        <img  @mouseenter="toggle" @mouseleave="toggle" v-if="tooltip == true" src="./icons/question mark.svg" /> -->
        <img v-if="tooltip == true" src="../assets/question mark.svg" />
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