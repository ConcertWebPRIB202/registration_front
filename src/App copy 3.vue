<template>
  <div class="main-page">
    <div class="container">
      <div class="registration-body">
        <div class="registration-logo">
          <div class="logo">
            <img class="logo-shaman" src="./assets/LogoShaman.svg" />
          </div>
          <div class="title-shaman">SHAMAN</div>
        </div>
        <form class="registration-form" @submit.prevent="RegisterUser">
          <div class="form-group">
            <img src="./assets/star.svg" />
            <input id="login" class="input" type="text" placeholder="Логин: " v-model="login">
          </div>
          <div class="form-group tooltip-group">
            <img src="./assets/star.svg" />
            <div class="input-wrapper">
              <input id="password" class="input" placeholder="Пароль: " :type="passwordFieldType" v-model="password">
              <img class='input-icon' src="./assets/eye.svg" v-show="isShowPassword" type="password" @click="switchVisibility"/>
              <img class='input-icon' src="./assets/passwordhide.svg" v-show="!isShowPassword" type="password" @click="switchVisibility" />
            </div>
            <div v-show="isShown" class="tooltip tooltip-top">Пароль должен состоять из <br> латинских символов. <br> Должен содержать знаки и <br> заглавные буквы</div>
            <img  @mouseenter="toggle" @mouseleave="toggle" src="./assets/question mark.svg" />
          </div>
          <div class="form-group">
            <img src="./assets/star.svg" />
            <div class="input-wrapper">
              <input id="passwordConfirm" class="input" placeholder="Повторите пароль: " :type="passwordFieldTypeConfirm" v-model="passwordConfirm">
              <img class='input-icon' src="./assets/eye.svg" v-show="isShowPasswordConfirm" type="password" @click="switchVisibilityConfirm"/>
              <img class='input-icon' src="./assets/passwordhide.svg" v-show="!isShowPasswordConfirm" type="password" @click="switchVisibilityConfirm" />
            </div>
          </div>
          <div class="form-group tooltip-group">
            <img src="./assets/star.svg" />
            <div class="input-wrapper">
              <input id="phone" class="input" type="phone" placeholder="Телефон: " v-model="phone">
            </div>
            <div v-show="isShownPhone" class="tooltip">Номер должен вводиться с <br> кодом страны</div>
            <img @mouseenter="togglePhone" @mouseleave="togglePhone" src="./assets/question mark.svg" />
          </div>
          <div class="form-group">
            <div class="input-wrapper city">
              <select name="" id="" class="input-city">
                <option selected disabled value="">Город: </option>
                <option v-for="{value, label} in options" :key="value" :value="value">
                {{ label }}
                </option>
              </select>
              <!-- <input id="city" class="input" type="text" placeholder="Город" v-model="city"> -->
              <!-- <img class='input-icon dropmenu' src="./assets/dropmenu.svg" /> -->
            </div>
          </div>
          <div class="form-group">
            <img src="./assets/star.svg" />
            <input id="email" class="input" type="email" placeholder="Почта" v-model="email">
          </div>
          <div class="form-group gender-body">
            <label class="gender-label">Пол: </label>
            <div class="gender-block">
              <input class="custom-radio" type="radio" name="gender" id="gender-male" v-model="gender">
              <label for="gender-male" class="gender-label sex">Муж</label>
              <input class="custom-radio" type="radio" name="gender" id="gender-femile" v-model="gender">
              <label for="gender-femile" class="gender-label sex">Жен</label>
            </div>
          </div>
          <div class="form-group photo-body">
            <div class="photo-block">
                <div>
                <img src="./assets/star.svg" />
                <label class="photo-label">Фото паспорта: </label>
              </div>
              <div v-show="isShownPhoto" class="tooltip tooltip-top">Прикрепите фото первой <br> страницы паспорта.Фото <br> должно быть в форматах <br> .jpeg или .png</div>
              <img @mouseenter="togglePhoto" @mouseleave="togglePhoto" src="./assets/question mark.svg">
            </div>
            <input type="file" id='upload' />
            <label for='upload' class="input-file"><img src="./assets/upload.svg"></label>
          </div>
          <div class="form-group checkbox-body">
            <img src="./assets/star.svg" />
            <input type="checkbox" class="custom-checkbox" id="happy" name="happy" value="yes">
            <label for="happy" class="checkbox-label">Я даю свое согласие на обработку <br> персональных данных</label>
          </div>
          <div class="form-button">
              <button type="submit" class="form-button-click">Зарегистрироваться</button>
          </div>
          <p class="loginIn">
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
    },
};
</script>

<style scoped>
#upload{
  display: none;
}


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
  border-color: #0b76ef;
  background-color: #0b76ef;
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
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
/* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
.custom-checkbox:focus:not(:checked)+label::before {
  border-color: #80bdff;
}
/* стили для чекбокса, находящегося в состоянии disabled */
.custom-checkbox:disabled+label::before {
  background-color: #e9ecef;
}


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
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  /* стили для радиокнопки, находящейся в фокусе и не находящейся в состоянии checked */
  .custom-radio:focus:not(:checked)+label::before {
    border-color: #80bdff;
  }
  /* стили для радиокнопки, находящейся в состоянии checked */
  .custom-radio:checked+label::before {
    border-color: #0b76ef;
    background-color: #0b76ef;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
  }
  /* стили для радиокнопки, находящейся в состоянии disabled */
  .custom-radio:disabled+label::before {
    background-color: #e9ecef;
  }




.main-page {
  width: 100%;
  height: 100%; 
  overflow: hidden; 
  background: #565656;
  margin: auto;
  padding-top: 50px;
  padding-bottom: 50px;
}
.container {
  /* max-width: 1650px; */
  background: #131313;
  border-radius: 30px; 
  margin: auto;
}
.registration-body {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.registration-logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 50px;
}
.logo {
  border-radius: 50%;
}
.logo-shaman {
  width: 100%;
  height: 100%;
}
.title-shaman {
  text-align: center;
  font-size: 120px;
  color: #FFFFFF;
}
.registration-form {
  margin-top: 80px;
}
.form-group{
  display: flex;
  /* justify-content: center; */
  margin-bottom: 20px;
}
.form-group:nth-child(5){
  margin-left: 20px;
}
.gender-body{
  flex-direction: column;
  margin-left: 52px;
}
.photo-body{
  flex-direction: column;
}
.photo-block{
  display: flex;
  justify-content: space-between;
  position: relative;
}
/* .checkbox-body{
  justify-content: unset;
} */
.checkbox-input{
  margin-left: 32px;
  margin-right: 32px;
  width: 36px;
}
.checkbox-label{
  font-size: 26px;
  color: #FFFFFF;
  word-wrap: break-word;
}
.checkbox-block{
  display: flex;
}
.photo-label{
  margin-left: 32px;
  font-size: 32px;
  color: #FFFFFF;
}
.gender-block{
  display: flex;
  align-items: center;
}
.gender-label{
  font-size: 32px;
  color: #FFFFFF;
}
.sex {
  margin-right: 30px;
}
.gender-input{
  margin-right: 20px;
}
.input{
  padding: 12px 32px;
  margin: 0 18px;
  border-radius: 30px;
  background-color: #5c5c5c;
  border: 0;
  font-size: 32px;
  color: white;
}
.form-button{
  text-align: center;
}
.form-button-click{
  font-size: 32px;
  background: #5C5C5C;
  color: #FFFFFF;
  border-radius: 50px;
  border: 0;
  padding: 8px;
  cursor: pointer;
}
.loginIn{
  margin-top: 50px;
  margin-bottom: 80px;
  text-align: center;
  color: #ffffff;
  text-decoration: underline;
  font-size: 24px;
}
.loginIn a{
  color: #ffffff;
}
.input-wrapper{
  position: relative;
}
.input-icon{
  position: absolute;
  top: 18px;
  right: 30px;
}
.dropmenu{
  top: 22px;
  right: 34px;
}
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
.tooltip-group{
  position: relative;
}
.tooltip-top{
  top: -150px;
}
.city{
  width: 100%;
}
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



/* .registration-component-body {
  display: flex;
  margin-bottom: 20px;
} */
/* .registration-input-block{
  position: relative;
} */
/* .registration-input-eye{
  position: absolute;
  top: 16px;
  bottom: 0;
  right: 40px;
  display: flex;
  align-items: center;
} */
/* .registration-input-dropmenu{
  position: absolute;
  top: 20px;
  bottom: 0;
  right: 46px;
  display: flex;
  align-items: center;
} */
/* .registration-input-field {
  padding: 12px 32px;
  margin: 0 18px;
  border-radius: 30px;
  background-color: #5c5c5c;
  border: 0;
  font-size: 32px;
} */
/* .star {
  display: flex;
  width: 20px;
}
.registration-help {
  display: flex;
  justify-content: center;
  align-items: center;
}
.registration-help-field{
  background-color: #5c5c5c;
  padding: 4px 12px;
  border-radius: 50%;
  color: #FFFFFF;
}
.registration-radio-block{
  margin-left: 50px;
}
.registration-label-radio{
  font-size: 32px;
  color: #FFFFFF;
}
input[type="radio"]{
  background: #5c5c5c !important;
  height: 38px;
  width: 38px;
}

.registration-input-radio{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
}
.registration-input-radio:last-child{
  margin-right: 0;
}
.registration-input-radio-main{
  display: flex;
  justify-content: center;
  align-items: center;
}
.registration-radio-male{
  font-size: 32px;
  color: #FFFFFF;
  text-align: center;
  margin-left: 15px;
}
.photo{
  justify-content: space-between;
}
.registration-photo-body{
  display: flex;
} */
</style>
