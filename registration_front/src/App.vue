<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <div class="registration-form-container">
        <div class="logo">
            <!-- <router-link to="/"> -->
            <div class="logo-image">
                <img src="./assets/LogoShaman.svg">
            </div>
            <div class="logo-text">
                SHAMAN
            </div>
            <!-- </router-link> -->
        </div>
        <div class="registration-form">
            <form action="">
                <div class="obligatory-text-field">
                    <div class="star">
                        <img src="./assets/Star.svg">
                    </div>
                    <input class="obligatory-text-field-input" type="text" placeholder="Логин">
                </div>
                <div class="obligatory-password-field-w-tooltip">
                    <div class="star">
                        <img src="./assets/Star.svg">
                    </div>
                    <input class="obligatory-password-field-w-tooltip-input" type="password" placeholder="Пароль">
                    <div class="eye-icon">
                        <img src="./assets/Eye.svg" alt="">
                    </div>
                    <div class="tooltip">
                        <img src="./assets/Tooltip.svg" alt="">
                    </div>
                </div>
                <div class="obligatory-password-field-wout-tooltip">
                    <div class="star">
                        <img src="./assets/Star.svg">
                    </div>
                    <input class="obligatory-password-field-wout-tooltip-input" type="password" placeholder="Повторите пароль">
                    <div class="eye-icon">
                        <img src="./assets/Eye.svg" alt="">
                    </div>
                </div>
                <div class="obligatory-phone-field">
                    <div class="star">
                        <img src="./assets/Star.svg">
                    </div>
                    <input class="obligatory-phone-field-input" type="tel" placeholder="+7">
                    <div class="tooltip">
                        <img src="./assets/Tooltip.svg" alt="">
                    </div>
                </div>
                <div class="city-field-wout-tooltip">
                    <input class="city-field-wout-tooltip-input" type="password" placeholder="Город">
                    <div class="list-icon">
                        <img src="./assets/List.svg" alt="">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
    .registration-form-container {
        display: flex;
        background-color: #131313;
        max-width: 1600px;
        border-radius: 30px;
        margin-top: 60px;
        margin-left: auto;
        margin-right: auto;
        flex-direction: row;
        color: #ffffff;
    }
    .logo{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
    }
    .logo-text{
        font-size: 120px;
        width:min-content;
        text-decoration: none;
    }
    .registration-form{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 60px;
        align-items: start;
    }
    .obligatory-text-field{
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .obligatory-text-field-input{
        background-color: #373737;
        margin: 8px;
        height: 61px;
        width: 413px;
        border-radius: 30px;
        border-width: 0px;
        font-size: 32px;
    }
    .obligatory-text-field-input::placeholder{
        padding-left: 32px;
        color: #ffffff;
    }
    .obligatory-password-field-w-tooltip{
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
    }
    .obligatory-password-field-w-tooltip-input{
        background-color: #373737;
        margin: 8px;
        height: 61px;
        width: 413px;
        border-radius: 30px;
        border-width: 0px;
        font-size: 32px;
    }
    .obligatory-password-field-w-tooltip-input::placeholder{
        padding-left: 32px;
        color: #ffffff;
    }
    .obligatory-password-field-w-tooltip .eye-icon{
        display: flex;
        align-items: center;
        position: absolute;
        right: 55px;
    }
    .tooltip{
        display: flex;
        align-items: center;
    }
    .obligatory-password-field-wout-tooltip{
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
    }
    .obligatory-password-field-wout-tooltip-input{
        background-color: #373737;
        margin: 8px;
        height: 61px;
        width: 413px;
        border-radius: 30px;
        border-width: 0px;
        font-size: 32px;
    }
    .obligatory-password-field-wout-tooltip-input::placeholder{
        padding-left: 32px;
        color: #ffffff;
    }
    .obligatory-password-field-wout-tooltip .eye-icon{
        display: flex;
        align-items: center;
        position: absolute;
        right: 55px;
    }
    .obligatory-phone-field{
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .obligatory-phone-field-input{
        background-color: #373737;
        margin: 8px;
        height: 61px;
        width: 413px;
        border-radius: 30px;
        border-width: 0px;
        font-size: 32px;
    }
    .obligatory-phone-field-input::placeholder{
        padding-left: 32px;
        color: #ffffff;
    }
    .city-field-wout-tooltip{
        margin-top: 20px;
        margin-left: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
    }
    .city-field-wout-tooltip-input{
        background-color: #373737;
        margin: 8px;
        height: 61px;
        width: 413px;
        border-radius: 30px;
        border-width: 0px;
        font-size: 32px;
    }
    .city-field-wout-tooltip-input::placeholder{
        padding-left: 32px;
        color: #ffffff;
    }
    .city-field-wout-tooltip .list-icon{
        display: flex;
        align-items: center;
        position: absolute;
        right: 60px;
    }
</style>
