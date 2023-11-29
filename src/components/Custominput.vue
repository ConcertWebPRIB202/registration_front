<script lang="ts">
import { toRef, toRefs, computed } from 'vue';
import { useField } from 'vee-validate';

// const props = defineProps({
//     name: String,
//     type: String,
// });

// const name = computed(() => props.name);
// const { value, errorMessage } = useField(name);

export default {
    props:{
        tooltip:{
            type: Boolean,
            default(){
                return {}
            }
        },
        typeInput:{
            type: String,
            default(){
                return {}
            }
        },
        requiredStar:{
            type: Boolean,
            default(){
                return {}
            }
        },
        toggle:{
            type: String,
            default(){
                return {}
            }
        },
    },
    data() {
        return {}
    },
}
</script>

<template>
    <img v-if="tooltip == true" src="./icons/star.svg" />
    <input v-if="typeInput == 'text'" :type="typeInput" class="input border-rd-10 text-color-white input-padding input-margin submain-background-color font-size-8 border-0" placeholder="Логин "/>
    <input v-if="typeInput == 'email'" :type="typeInput" name="email" class="input border-rd-10 text-color-white input-padding input-margin submain-background-color font-size-8 border-0" placeholder="Логин "/>
    <input v-if="typeInput == 'password'" :type="typeInput" class="input border-rd-10 text-color-white input-padding input-margin submain-background-color font-size-8 border-0" placeholder="Логин "/>
    <img v-if="requiredStar == true" src="./icons/question mark.svg" />
    <!-- <input @input="handleChange" :value="value" @type="type" />
    <span>{{ errorMessage }}</span> -->
</template>

<style scoped>

</style>