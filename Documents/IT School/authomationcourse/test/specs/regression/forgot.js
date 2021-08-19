import Forgot from '../../classes/pages/forgot.page';
import Login from '../../classes/pages/login.page';


describe('Elements-displayed', () => {

    before(() => {
        Forgot.openPage();
    })

    it('Login-Logo', () => {
        Forgot.checkLogo()
    })

    it('Username-Field', () => {
        Forgot.checkEmailField()
    })

    it('Button-RemindPassword', () => {
        Forgot.checkButtonRemPassword()
    })

})

describe('Values', () => {

    it('Email placeholder', () => {
        Forgot.checkEmailPlaceholder()
    })

    it('Value-RemindPassword', () => {
        Forgot.checkButtonRemPasswordValue()
    })
})

describe('Functionality', () => {

    it('Error message appears if only Email field is empty and click Remind Password', () => {
        //browser.url('/forgot');
        Forgot.openPage()
        Forgot.clickRemindPasswordBtnForgotPage()
        Forgot.checkErrorEmailFieldEmpty()
    })

    it('Error message disapears on input in Email field', () => {
        Forgot.setValueIncorrEmailForgotPage()
        Forgot.checkErrMsgDisap()
    })

    it('Error message appears if Email is incorrect', () => {
        Forgot.clickRemindPasswordBtnForgotPage()
        Forgot.checkErrMsgWrongEmail()
    })

    it('Success message appears if Email is correct', () => {
        Forgot.setValueEmailForgotPage()
        Forgot.clickRemindPasswordBtnForgotPage()
        Forgot.checkPasswSent()
    })

    it('User is redirected to ', () => {
        Login.checkUrl() 
    })

})