<template>
  <div class="main-page ma w-full h-full overflow-hidden pt-10 pb-10 submain-background-color">
    <div class="container ma b-rd-10 main-background-color">
      <div class="registration-body flex justify-center w-full h-full">
        <div class="registration-logo flex justify-center flex-col mr-10">
          <img class="logo-shaman w-full" src="./assets/LogoShaman.svg" />
          <div class="title-shaman text-center font-size-30 text-color-white">
            SHAMAN
          </div>
        </div>
        <!-- @submit.prevent="RegisterUser" -->
        <form class="registration-form mt-20" novalidate @submit.prevent="onSubmit">
          <div class="form-group flex mb-5">
            <img src="./assets/star.svg" />
            <input id="login" class="input border-rd-10 border-0 text-color-white input-padding input-margin submain-background-color font-size-8" type="text" placeholder="Логин: " v-model="login">
          </div>
          <div class="form-group flex mb-5 tooltip-group relative">
            <img src="./assets/star.svg" />
            <div class="input-wrapper relative">
              <input id="password" class="input border-rd-10 border-0 text-color-white input-padding input-margin submain-background-color font-size-8" placeholder="Пароль: " :type="passwordFieldType" v-model="password">
              <img class='input-icon absolute input-icon-top input-icon-right' src="./assets/eye.svg" v-show="isShowPassword" type="password" @click="switchVisibility"/>
              <img class='input-icon absolute input-icon-top input-icon-right' src="./assets/passwordhide.svg" v-show="!isShowPassword" type="password" @click="switchVisibility" />
            </div>
            <div v-show="isShown" class="tooltip tooltip-top">Пароль должен состоять из <br> латинских символов. <br> Должен содержать знаки и <br> заглавные буквы</div>
            <img  @mouseenter="toggle" @mouseleave="toggle" src="./assets/question mark.svg" />
          </div>
          <div class="form-group flex mb-5">
            <img src="./assets/star.svg" />
            <div class="input-wrapper relative">
              <input id="passwordConfirm" class="input border-rd-10 border-0 text-color-white input-padding input-margin submain-background-color font-size-8" placeholder="Повторите пароль: " :type="passwordFieldTypeConfirm" v-model="passwordConfirm">
              <img class='input-icon absolute input-icon-top input-icon-right' src="./assets/eye.svg" v-show="isShowPasswordConfirm" type="password" @click="switchVisibilityConfirm"/>
              <img class='input-icon absolute input-icon-top input-icon-right' src="./assets/passwordhide.svg" v-show="!isShowPasswordConfirm" type="password" @click="switchVisibilityConfirm" />
            </div>
          </div>
          <div class="form-group flex mb-5 tooltip-group relative">
            <img src="./assets/star.svg" />
            <div class="input-wrapper relative">
              <input id="phone" class="input border-rd-10 border-0 text-color-white input-padding input-margin submain-background-color font-size-8" type="phone" placeholder="Телефон: " v-model="phone">
            </div>
            <div v-show="isShownPhone" class="tooltip">Номер должен вводиться с <br> кодом страны</div>
            <img @mouseenter="togglePhone" @mouseleave="togglePhone" src="./assets/question mark.svg" />
          </div>
          <div class="form-group flex mb-5">
            <div class="input-wrapper relative city w-full">
              <select name="" id="" class="input-city">
                <option selected disabled value="">Город: </option>
                <option v-for="{value, label} in options" :key="value" :value="value">
                {{ label }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-group flex mb-5">
            <img src="./assets/star.svg" />
            <input id="email" class="input border-rd-10 border-0 text-color-white input-padding input-margin submain-background-color font-size-8" type="email" placeholder="Почта" v-model="email">
          </div>
          <div class="form-group flex mb-5 gender-body flex-col ml-13">
            <label class="gender-label font-size-9 text-color-white">Пол: </label>
            <div class="gender-block flex grid-items-center">
              <input class="custom-radio" type="radio" name="gender" id="gender-male" v-model="gender">
              <label for="gender-male" class="gender-label font-size-9 text-color-white sex mr-8">Муж</label>
              <input class="custom-radio" type="radio" name="gender" id="gender-femile" v-model="gender">
              <label for="gender-femile" class="gender-label font-size-9 text-color-white sex mr-8">Жен</label>
            </div>
          </div>
          <div class="form-group flex mb-5 photo-body flex-col">
            <div class="photo-block flex justify-between relative">
              <div>
                <img src="./assets/star.svg" />
                <label class="photo-label font-size-9 text-color-white ml-8">Фото паспорта: </label>
              </div>
              <div v-show="isShownPhoto" class="tooltip tooltip-top">Прикрепите фото первой <br> страницы паспорта.Фото <br> должно быть в форматах <br> .jpeg или .png</div>
              <img @mouseenter="togglePhoto" @mouseleave="togglePhoto" src="./assets/question mark.svg">
            </div>
            <input type="file" id='upload' />
            <label for='upload' class="input-file"><img src="./assets/upload.svg"></label>
          </div>
          <div class="form-group flex mb-5 checkbox-body">
            <img src="./assets/star.svg" />
            <input type="checkbox" class="custom-checkbox" id="happy" name="happy" value="yes">
            <label for="happy" class="checkbox-label font-size-6 text-color-white">Я даю свое согласие на обработку <br> персональных данных</label>
          </div>
          <div class="form-button text-center">
              <button type="submit" class="form-button-click cursor-pointer border-rd-20 border-0 p-3 text-color-white submain-background-color font-size-8">Зарегистрироваться</button>
          </div>
          <p class="loginIn text-color-white underline text-center mt-16 mb-24 font-size-6">
            <router-link to="#">Уже есть аккаунт? Войти</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { toValue } from 'vue';

  export default{
    data() {
        return {
          login: "",
          password: "",
          passwordConfirm: "",
          phone: "",
          city: "",
          email: "",
          gender: "",
          consent: "",

          passwordFieldType: "password",
          passwordFieldTypeConfirm: "password",

          isShown: false,
          isShownPhone: false,
          isShownPhoto: false,
          isShowPassword: true,
          isShowPasswordConfirm: true,

          options: [
            { value: 1, label: "Москва"},
            { value: 2, label: "Волгоград"},
            { value: 3, label: "Омск"},
            { value: 4, label: "Екатеринбург"},
            { value: 5, label: "Томск"},
          ]
        };
    },
    methods: {
      RegisterUser(){
        console.log("Вы успешно зарегистрировались!");
      },
      toggle() {
        this.isShown = !this.isShown;
      },
      togglePhone() {
        this.isShownPhone = !this.isShownPhone;
      },
      togglePhoto() {
        this.isShownPhoto = !this.isShownPhoto;
      },
      switchVisibility() {
        this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
        this.isShowPassword  = !this.isShowPassword;
      },
      switchVisibilityConfirm() {
        this.passwordFieldTypeConfirm = this.passwordFieldTypeConfirm === "password" ? "text" : "password";
        this.isShowPasswordConfirm  = !this.isShowPasswordConfirm;
      },

      onSubmit() {
        console.log('Submitted');
      },
    },
};
</script>

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
  border: 1px solid #565656;
  border-radius: 0.25em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  background: #565656;
}
.custom-checkbox:checked+label::before {
  border-color: #faf572;
  background-color: #faf572;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
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
    border: 1px solid #565656;
    border-radius: 50%;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    background: #565656;
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
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
  }
  /* стили для радиокнопки, находящейся в состоянии disabled */
  .custom-radio:disabled+label::before {
    background-color: #e9ecef;
  }

/* Цвет текста у inputs в разных браузерах */
::-webkit-input-placeholder {
  color: #ffffff;
}
:-moz-placeholder {
  color: #ffffff;
}
::-moz-placeholder {
  color: #ffffff;
}
:-ms-input-placeholder {
  color: #ffffff;
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
  right: -65%;
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
  width: 86%;
  color: #FFFFFF;
  appearance: none;
  background: url(./assets/dropmenu.svg) no-repeat right rgba(92, 92, 92, 1);
  background-position-x: calc(100% - 20px);
}
/* Кастомная загрузка файла */
.input-file{
  display: flex;
  justify-content: center;
  text-align: center;
  background: #5c5c5c;
  height: 150px;
  border-radius: 30px;
  margin: auto;
  padding: 20px 40px;
}
.form-group:nth-child(5){
  margin-left: 20px;
}
#upload{
  display: none;
}
.loginIn a{
  color: #ffffff;
}
.tooltip-top{
  top: -150px;
}
</style>
