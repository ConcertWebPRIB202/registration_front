<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="main-page">
    <div class="registration-form-container">
      <div class="registration-form">
        <div class="registration-logo">
          <!-- <RouterLink to="/"> -->
          <div class="logo-shaman-bg">
            <img class="logo-shaman" src="./assets/LogoShaman.svg" />
          </div>
          <div class="title-shaman">SHAMAN</div>
          <!-- </RouterLink> -->
        </div>
        <form class="registration-body">
          <div class="registration-component-body">
            <div class="star">
              <img src="./assets/star.svg" />
            </div>
            <div class="registration-input">
              <input class="registration-input-field" placeholder="Логин: " />
            </div>
          </div>
          <div class="registration-component-body">
            <div class="star">
              <img src="./assets/star.svg" />
            </div>
            <div class="registration-input">
              <div class="registration-input-block">
                <input class="registration-input-field" placeholder="Пароль: " />
                <img class="registration-input-eye" src="./assets/eye.svg">
              </div>
            </div>
            <div class="registration-help">
              <span class="registration-help-field">
                ? 
                </span>
            </div>
          </div>
          <div class="registration-component-body">
            <div class="star">
              <img src="./assets/star.svg" />
            </div>
            <div class="registration-input-block">
              <input class="registration-input-field" placeholder="Повторить пароль: " />
              <img class="registration-input-eye" src="./assets/eye.svg">
            </div>
          </div>
          <div class="registration-component-body">
            <div class="star">
              <img src="./assets/star.svg" />
            </div>
            <div class="registration-input">
              <input class="registration-input-field" placeholder="+7 " />
            </div>
            <div class="registration-help">
              <span class="registration-help-field">
                ? 
                </span>
            </div>
          </div>
          <div class="registration-component-body">
            <div class="star">
              
            </div>
            <div class="registration-input-block">
              <input class="registration-input-field" placeholder="Город " />
              <img class="registration-input-dropmenu" src="./assets/dropmenu.svg">
            </div>
          </div>
          <div class="registration-component-body">
            <div class="star">
              <img src="./assets/star.svg" />
            </div>
            <div class="registration-input">
              <input class="registration-input-field" placeholder="Почта " />
            </div>
          </div>
          <div class="registration-component-body radio">
            <div class="star">
              
            </div>
            <div class="registration-radio-block">
              <div class="registration-radio">
                <div class="registration-label-radio">
                  Пол: 
                </div>
                <div class="registration-input-radio-main">
                  <div class="registration-input-radio">
                    <input type="radio" class="registration-radio-field" name="male"/>
                    <label class="registration-radio-male">Муж</label>
                  </div>
                  <div class="registration-input-radio">
                    <input type="radio" class="registration-radio-field" name="male"/>
                    <label class="registration-radio-male">Жен</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="registration-component-body photo">
            <div class="registration-photo-body">
              <div class="star">
              <img src="./assets/star.svg" />
            </div>
            <div class="registration-radio-block">
              <div class="registration-radio">
                <div class="registration-label-radio">
                  Фото паспорта: 
                </div>
              </div>
            </div>
            </div>
            <div class="registration-help">
              <span class="registration-help-field">
                ? 
                </span>
            </div>
          </div>
          <div class="registration-component-body radio">
            <div class="star">
              
            </div>
            <div class="registration-radio-block">
              <div class="registration-radio">
                <div class="registration-input-radio-main">
                  <div class="registration-input-radio">
                    <input type="checkbox" class="registration-checkbox-field" name="check"/>
                    <label class="registration-checkboc">Я даю согласие на обработку персональных данных</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="registration-component-body">
            <div class="star">
              
            </div>
            <div>
              <button>Зарегистрироваться</button>
            </div>
          </div>
          <div class="registration-component-body">
            <div class="star">
              
            </div>
            <div>
              Уже есть аккаунт? Войти.
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-page {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #565656;
  margin: auto;
}
.registration-form-container {
  max-width: 1600px;
  background: #131313;
  border-radius: 30px;
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;
}
.registration-form {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.registration-logo {
  display: flex;
  flex-direction: column;
}
.logo-shaman-bg {
  border-radius: 50%;
}
.logo-shaman {
  width: 100%;
  height: 100%;
}
.title-shaman {
  text-align: center;
  font-size: 120px;
}
.registration-body {
  margin-top: 80px;
}
.registration-component-body {
  display: flex;
  margin-bottom: 20px;
}
.registration-input-block{
  position: relative;
}
.registration-input-eye{
  position: absolute;
  top: 16px;
  bottom: 0;
  right: 40px;
  display: flex;
  align-items: center;
}
.registration-input-dropmenu{
  position: absolute;
  top: 20px;
  bottom: 0;
  right: 46px;
  display: flex;
  align-items: center;
}
.registration-input-field {
  padding: 12px 32px;
  margin: 0 18px;
  border-radius: 30px;
  background-color: #5c5c5c;
  border: 0;
  font-size: 32px;
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
.star {
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
}
</style>
