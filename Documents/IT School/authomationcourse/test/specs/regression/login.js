import Login from '../../classes/pages/login.page';
import Forgot from '../../classes/pages/forgot.page';

describe('Elements', () => {

    before(() => {
        Login.openPage()
    })

    it('Login-Logo', () => {
        Login.checkLogo()
    })

    it('Username-Field', () => {
        Login.checkEmailField()
    })

    it('Password-Field', () => {
        Login.checkPassword()
    })

    it('Button-Login', () => {
       Login.checkLoginBtn()
    })

    it('Button-Forgot', () => {
        Login.checkForgotBtn()
    })

})

describe('Values', () => {

    it('email placeholder', () => {
        Login.checkEmailPlaceholder()
    })

    it('Password placeholder', () => {
        Login.checkPasswordPlaceholder()
    })

    it('Button-Login', () => {
        Login.checkBtnLoginValue()
    })

    it('Remind pasword', () => {
        Login.checkRemindPasswText()
    })

})


describe('Functionality', () => {


 it('Both fields are empty', () => {
        Login.clickLogin()
     Login.checkErrorBothFieldsEmpty()
     //Correct Good example.
    })

    it('Error message disapears on input in Email field', () => {
        Login.setValueEmailFalse()
        Login.checkErrorMsgDisapears()
    })

    it('Password field is empty', () => {
        Login.clickLogin()
        Login.checkPassFieldEmptyErr()
    })

    it('Error message disapears on input in Password field', () => {
        Login.setValuePassword()
        Login.checkErrorMsgDisapears()
    })
//correct
    it('Error message appears if only Email field is empty and click Login', () => {
        Login.openPage()
        Login.setValuePassword()
        Login.clickLogin()
        Login.checkErrMsgIfEmailEmpty()
    })
//remake
    it('Error message appears if Email is incorrect', () => {
        Login.setValueEmailFalse()
        Login.clickLogin()
        Login.checkErrMsgWrongEmail()
    })

    it('Error message appears if Email is correct, but Password is not', () => {
        Login.setValueEmailTrue()
        Login.clickLogin()
        Login.checkErrMsgEmailCorrectAndPasswNot()
    })

    it('Remind Password redirects to', () => {
        Login.openPage()
        Login.clickRemindPassword()
        Forgot.checkRemindPasswRedirect()
    })

    it('Remind Password page is displayed after the redirect', () => {
        Forgot.checkForgotPageDisplayed()
    })

})