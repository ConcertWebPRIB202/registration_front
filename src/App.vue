<script setup>
import { reactive, ref , computed } from 'vue'; 
import useVuelidate from '@vuelidate/core'
import {helpers, minLength, maxLength, email, numeric, sameAs, required} from '@vuelidate/validators'
import axios from 'axios';
import { vMaska } from "maska";
import CustomInput from './components/Custominput.vue';
import Checkbox from './components/Checkbox.vue';


const review = reactive({
  login: '',
  password: '',
  repeat_password: '',
  phone: '',
  city: '',
  citys: [
            { value: 'Moscov', label: "Москва"},
            { value: 'Volgograd', label: "Волгоград"},
            { value: 'Omsk', label: "Омск"},
            { value: 'Ekaterinburg', label: "Екатеринбург"},
            { value: 'Tomsk', label: "Томск"},
          ],
  email: '',
  gender_id: true,
  photo: null,
  photo_look: null,
  consent: false,
})

const uploadFile = (e) => {
  const file_look = e.target.files[0].name;
  review.photo_look = file_look;
  const file = e.target.files[0];
  review.photo = file;
}

const isShown = ref(false)

const toggle = () => {
  return isShown.value = !isShown.value;
}

const isShownPhone = ref(false)

const togglePhone = () => {
  return isShownPhone.value = !isShownPhone.value;
}

const isShownPhoto = ref(false)

const togglePhoto = () => {
  return isShownPhoto.value = !isShownPhoto.value;
}

const isShowPassword = ref(true)
const passwordFieldType = ref("password")

const switchVisibility = () => {
  return `${passwordFieldType.value = passwordFieldType.value === "password" ? "text" : "password"} ${isShowPassword.value = !isShowPassword.value}`;
}

const isShowPasswordConfirm = ref(true)
const passwordFieldTypeConfirm = ref("password")

const switchVisibilityConfirm = () => {
  return `${passwordFieldTypeConfirm.value = passwordFieldTypeConfirm.value === "password" ? "text" : "password"} ${isShowPasswordConfirm.value = !isShowPasswordConfirm.value}`;
}

const nameField = ref('')
const emailField = ref('')
const passwordField = ref('')
const passwordFieldConfirm = ref('')

const rules = computed(() => ({
  nameField: {
    minLength: helpers.withMessage('Логин должен состоять минимум из 8 симвобов', minLength(6)),
    required: helpers.withMessage('Логин не введен', required)
  },
  passwordFieldConfirm: {
    sameAsPassword: helpers.withMessage('Пароли не совпадают', sameAs(passwordField.value)),
    required: helpers.withMessage('Пароль не введен', required)
  },
  emailField: {
    email: helpers.withMessage('Почта введена некорректно', email),
    required: helpers.withMessage('Почта не введена', required)
  },
}))

const v = useVuelidate(rules, {nameField, emailField, passwordField, passwordFieldConfirm})

// console.log(v)


const submit = () => {

  v.value.$touch()
  console.log(v.value.$error)
  if (v.value.$error) return
  alert('Forma complited')
  


  axios.post('http://127.0.0.1:8000/reg/user', review, {
    headers: {
      'Content-Type': 'multipart/from-data',
    },
    data:{
      login: review.login,
      password: review.password,
      repeat_password: review.repeat_password,
      phone: review.phone,
      email: review.email,
      photo: review.photo,
      city: review.city,
      gender_id: review.gender_id
    }
  });

  // .then((res) => {
  //   console.log(res);
  // })
  // .catch((err) => {
  //   console.log(err);
  // })
  // .finally(() => {
  //   console.log('End');
  // })
}

</script>

<template>
  <div class="ma overflow-hidden pt-10 pb-10 submain-background-color">
    <div class="container ma b-rd-10 main-background-color">
      <div class="registration-body flex justify-center">
        <div class="registration-logo flex justify-center flex-col mr-10">
          <img class="logo-shaman" src="./assets/logoShaman.svg" />
          <div class="title-shaman text-center font-size-30 text-color-white">
            SHAMAN
          </div>
        </div>
        <form class="registration-form mt-20" @submit.prevent.stop="submit">
          <div class="flex mb-5 justify-center font-size-6 error-message-color-text">
            <label>Поля, отмеченные * являются обязательными</label>
          </div>
          <CustomInput
          :requiredStar="true"
          name="login"
          placeholder="Логин "
          v-model:value="v.nameField.$model"
          :error="v.nameField.$errors"
          />
          <CustomInput
          :requiredStar="true"
          :tooltip="true"
          name="password"
          :type="passwordFieldType"
          placeholder="Пароль "
          v-model:value="passwordField"
          v-show="isShowPassword"
          />
          <CustomInput
          :requiredStar="true"
          name="passwordConfirm"
          :type="passwordFieldTypeConfirm"
          placeholder="Повторите пароль "
          v-model:value="v.passwordFieldConfirm.$model"
          :error="v.passwordFieldConfirm.$errors"
          />
          <CustomInput
          :requiredStar="true"
          name="email"
          placeholder="Почта "
          v-model:value="v.emailField.$model"
          :error="v.emailField.$errors"
          />
          

          <Checkbox
          
          />
          <!-- {{ v }} -->

          <div class="flex mb-5 tooltip-group relative">
            <img src="./assets/star.svg" />
            <div class="relative">
              <input
                :type="passwordFieldType" 
                v-model.trim="review.password" 
                placeholder="Пароль "

                class="input border-0 border-rd-10 text-color-white input-padding input-margin submain-background-color font-size-8"  
                >
              <img class='input-icon absolute input-icon-top input-icon-right' src="./assets/eye.svg" v-show="isShowPassword" type="password" @click="switchVisibility"/>
              <img class='input-icon absolute input-icon-top input-icon-right' src="./assets/passwordhide.svg" v-show="!isShowPassword" type="password" @click="switchVisibility" />
            </div>
            <div v-show="isShown" class="tooltip tooltip-bottom">Пароль должен состоять из <br> латинских символов. <br> Должен содержать знаки и <br> заглавные буквы</div>
            <img  @mouseenter="toggle" @mouseleave="toggle" src="./assets/question mark.svg" />
          </div>
          <div class="flex mb-5">
            <img src="./assets/star.svg" />
            <div class="relative">
              <input
              :type="passwordFieldTypeConfirm"
              v-model.trim="review.passwordConfirm"
              placeholder="Повторите пароль  "

              class="input border-0 border-rd-10 text-color-white input-padding input-margin submain-background-color font-size-8"
              >
              <img class='input-icon absolute input-icon-top input-icon-right' src="./assets/eye.svg" v-show="isShowPasswordConfirm" type="password" @click="switchVisibilityConfirm"/>
              <img class='input-icon absolute input-icon-top input-icon-right' src="./assets/passwordhide.svg" v-show="!isShowPasswordConfirm" type="password" @click="switchVisibilityConfirm" />
            </div>
          </div>
          <div class="flex tooltip-group relative">
            <img src="./assets/star.svg" />
            <div class="relative">
              <input 
              type="tel" 
              v-model.trim="review.phone" 
              v-maska data-maska="+7 ### ### ## ## " 
              placeholder="+7"
              
              class="input border-0 border-rd-10 text-color-white input-padding input-margin submain-background-color font-size-8" 
              
              >
            </div>
            <div v-show="isShownPhone" class="tooltip tooltip-right">Номер должен вводиться без <br> кода страны</div>
            <img @mouseenter="togglePhone" @mouseleave="togglePhone" src="./assets/question mark.svg" />
          </div>
          <div class="flex mb-5 mt-5 ml-5">
            <div class="relative city w-full">
              <select name="" id="city" class="input-city" v-model="review.city">
                <option selected disabled value="">Город: </option>
                <option v-for="{value, label} in review.citys" :key="value" :value="value.value">
                {{ label }}
                </option>
              </select>
            </div>
          </div>
          <!-- <div class="flex flex-col mb-5">
            <div class="mb-5">
              <img src="./assets/star.svg" />
                <input
                type="email" 
                v-model.trim="review.email" 
                placeholder="Почта  "
                
                class="input border-0 border-rd-10 text-color-white input-padding input-margin submain-background-color font-size-8" 
                
                >
            </div>
          </div> -->
          <div class="flex mb-5 gender-body flex-col ml-13">
            <label class="gender-label font-size-8 text-color-white">Пол: </label>
            <div class="gender-block flex grid-items-center">
              <input 
                class="custom-radio" 
                type="radio" 
                name="gender" 
                id="gender-male" 
                :value="true" 
                v-model.trim="review.gender"
              >
              <label for="gender-male" class="gender-label font-size-8 text-color-white sex mr-16">Муж</label>
              <input 
                class="custom-radio" 
                type="radio" 
                name="gender" 
                id="gender-femile" 
                :value="false" 
                v-model.trim="review.gender"
              >
              <label for="gender-femile" class="gender-label font-size-8 text-color-white sex mr-8">Жен</label>
            </div>
          </div>
          <div class="flex mb-5 photo-body flex-col">
            <div class="photo-block flex justify-between relative  mb-5">
              <div>
                <img src="./assets/star.svg" />
                <label class="photo-label font-size-8 text-color-white ml-8">Фото паспорта: </label>
              </div>
              <div v-show="isShownPhoto" class="tooltip tooltip-top">Прикрепите фото первой <br> страницы паспорта.Фото <br> должно быть в форматах <br> jpg, jpeg, png, bmp, <br> gif, svg или webp</div>
              <img @mouseenter="togglePhoto" @mouseleave="togglePhoto" class="photo-margin" src="./assets/question mark.svg">
            </div>
            <input 
            type="file" 
            id='upload' 
            accept="image/x-png,image/gif,image/jpeg,image/jpg,image/bmp,image/svg,image/webp"
            @change="uploadFile"
            >
            <label for='upload'  class="input-file"><img src="./assets/upload.svg"></label>
          </div>
          <div class="flex mb-5 justify-center font-size-6 error-message-color-text">
            {{ review.photo_look }}
          </div>
          <!-- <div class="mb-5 checkbox-body">
            <img src="./assets/star.svg" />
            <input type="checkbox" class="custom-checkbox" id="consent" v-model="review.consent">
            <label for="consent" class="checkbox-label flex font-size-8 text-color-white widthchecbox" >Я даю свое согласие на обработку персональных данных</label>
          </div> -->
          <button type="submit" class="form-button-click ml-12 cursor-pointer border-rd-20 border-0 text-color-white submain-background-color font-size-8">Зарегистрироваться</button>
          <p class="loginIn text-color-white underline text-center mt-16 mb-24 mr-20 font-size-6">
            <router-link to="#">Уже есть аккаунт? Войти</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Настройка кастомного чекбокса */
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.custom-checkbox+label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
.custom-checkbox+label::before {
  content: '';
  display: inline-block;
  margin-left: 32px;
  margin-right: 32px;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #373737;
  border-radius: 0.25em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  background: #373737;
}
.custom-checkbox:checked+label::before {
  border-color: #F7F4A4;
  background-color: #F7F4A4;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2ffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}
/* стили при наведении курсора на checkbox */
.custom-checkbox:not(:disabled):not(:checked)+label:hover::before {
  border-color: #F7F4A4;
}
/* стили для активного состояния чекбокса (при нажатии на него) */
.custom-checkbox:not(:disabled):active+label::before {
  background-color: #F7F4A4;
  border-color: #F7F4A4;
}
/* стили для чекбокса, находящегося в фокусе */
.custom-checkbox:focus+label::before {
  box-shadow: 0 0 0 0.2rem rgba(239, 255, 57, 0.25);
}
/* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
.custom-checkbox:focus:not(:checked)+label::before {
  border-color: #80bdff;
}
/* стили для чекбокса, находящегося в состоянии disabled */
.custom-checkbox:disabled+label::before {
  background-color: #e9ecef;
}

/* Настройка кастомных radio-battons */
  /* для элемента input c type="radio" */
  .custom-radio {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  /* для элемента label связанного с .custom-radio */
  .custom-radio+label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }
  /* создание в label псевдоэлемента  before со следующими стилями */
  .custom-radio+label::before {
    content: '';
    display: inline-block;
    height: 38px;
    width: 38px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #373737;
    border-radius: 50%;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    background: #373737;
  }
  /* стили при наведении курсора на радио */
  .custom-radio:not(:disabled):not(:checked)+label:hover::before {
    border-color: #F7F4A4;
  }
  /* стили для активной радиокнопки (при нажатии на неё) */
  .custom-radio:not(:disabled):active+label::before {
    background-color: #F7F4A4;
    border-color: #F7F4A4;
  }
  /* стили для радиокнопки, находящейся в фокусе */
  .custom-radio:focus+label::before {
    box-shadow: 0 0 0 0.2rem rgba(239, 255, 57, 0.25);
  }
  /* стили для радиокнопки, находящейся в фокусе и не находящейся в состоянии checked */
  .custom-radio:focus:not(:checked)+label::before {
    border-color: #80bdff;
  }
  /* стили для радиокнопки, находящейся в состоянии checked */
  .custom-radio:checked+label::before {
    border-color: #F7F4A4;
    background-color: #F7F4A4;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2ffff'/%3e%3c/svg%3e");
  }
  /* стили для радиокнопки, находящейся в состоянии disabled */
  .custom-radio:disabled+label::before {
    background-color: #e9ecef;
  }

/* Цвет текста у inputs в разных браузерах */
::-webkit-input-placeholder {
  color: #ffffff;
  opacity: 0.5;
}
:-moz-placeholder {
  color: #ffffff;
  opacity: 0.5;
}
::-moz-placeholder {
  color: #ffffff;
  opacity: 0.5;
}
:-ms-input-placeholder {
  color: #ffffff;
  opacity: 0.5;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
/* Кастомный тултип */
.tooltip{
  padding: 10px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border: 2px solid #F7F4A4;
  position: absolute;
  top: -70px;
  right: -42%;
  color: #FFFFFF;
  font-size: 24px;
  text-align: center;
  background-color: #000000;
}
/* Кастомное выпадающие меню */
.input-city{
  padding: 12px 32px;
  margin: 0 18px;
  border-radius: 30px;
  background-color: #5c5c5c;
  border: 0;
  font-size: 32px;
  width: 453px;
  color: #FFFFFF;
  appearance: none;
  background: url(./assets/dropmenu.svg) no-repeat right rgba(55, 55, 55, 1);
  background-position-x: calc(100% - 20px);
  opacity: 0.78;
}
/* Кастомная загрузка файла */
.input-file{
  display: flex;
  justify-content: center;
  text-align: center;
  background: #373737;
  height: 102px;
  width: 63%;
  border-radius: 30px;
  margin: 0 0 0 50px;
  padding: 20px 26px;
}
.form-button{
  margin: 0 0 0 50px;
}
.form-button-click{
  /* width: 85%; */
  padding: 10px 74px 14px 74px;
  background: #373737;
  font-family: Inter,  -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}
#upload{
  display: none;
}
.loginIn a{
  color: #ffffff;
}
.tooltip-top{
  top: -190px;
}
.tooltip-bottom{
  top: -150px;
}
.input{
  background: #373737;
}
.errorMessage{
  margin-left: 52px;
}
.borderErrors{
  border: 2px solid #F47A7A;
}
.logo-shaman{
  max-width: 100%;
}
.widthchecbox{
  max-width: 610px;
}
.photo-margin{
  margin-right: 74px;
}
.tooltip-right{
  right: -46%;
}
@media (max-width: 1440px) {
  .container{
    display: flex;
    justify-content: center;
  }
  .registration-body{
    flex-direction: column;
  }
  .registration-logo{
    margin-right: 0;
    margin-top: 20px;
  }
  .registration-form{
    margin-top: 20px;
  }
  /* .input-city{
    width: 84%;
  } */
  .photo-margin {
    margin-right: 10px;
  }
  .tooltip{
    right: 0;
    top: 100%;
    z-index: 999;
    font-size: 32px;
    width: 100%;
  }
}
@media (max-width: 768px) {
  .logo-shaman{
    display: none;
  }
  .title-shaman{
    font-size: 5rem;
  }
  .tooltip{
    right: -2%;
  }
}
</style>