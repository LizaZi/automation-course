import Base from '../base.class';

class Login extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = { //expected results
            url: 'http://qa.maf.place/',
            errorBothFieldsEmpty: 'Please specify email and password',
            pageTitle: 'The Maf Place',
            emailPlaceholder: 'Email *',
            passwordPlaceholder: 'Password *',
            loginBtnValue: 'Login',
            remindPasswordText: 'Remind Password',
            errMsgWrongEmail: 'User with this email does not exist',
            correctEmail: 'mafplaceqauser@gmail.com',
            incorrectEmail: 'alacopr@gmail.com',
            errIncorrectPassw: 'Password is incorrect',
            correctPassw: 'mafplace2021'
        }
    }

    //element selector getters
    get page() { return $('#login-page') }
    get logo() { return $('#logo') }
    get password() { return $('#pass') }
    get emailField() { return $('#username') }
    get loginBtn() { return $('#btn-login') }
    get errorMsg() { return $('#error-text')}
    get forgotBtn() { return $('#btn-forgot') }
    

    
    
    //methods
    checkPage() {
        this.page.waitForDisplayed();
    }

    openPage() {
        browser.url(this.exp.url);
    }

    checkTitle() {
        expect(browser).toHaveTitle(this.exp.pageTitle)
    }

    checkUrl() {
        expect(browser).toHaveUrl(this.exp.url);
    }

    checkLogo() {
        expect(this.logo).toBeDisplayed()
    }

    checkEmailField() {
        expect(this.emailField).toBeDisplayed()
    }

    checkPassword() {
        expect(this.password).toBeDisplayed()
    }

    checkLoginBtn() {
        expect(this.loginBtn).toBeDisplayed()
    }

    checkForgotBtn() {
        expect(this.forgotBtn).toBeDisplayed()
    }

    checkBtnLoginValue() {
        expect(this.loginBtn).toHaveText(this.exp.loginBtnValue)
    }

    checkRemindPasswText() {
        expect(this.forgotBtn).toHaveText(this.exp.remindPasswordText)

    }

    clickLogin() {
        this.loginBtn.click()
    }

    clickRemindPassword() {
        this.forgotBtn.click()
    }

    checkEmailPlaceholder() {
        expect(this.emailField).toHaveAttribute('placeholder', this.exp.emailPlaceholder)
    }

    checkPasswordPlaceholder() {
        expect(this.password).toHaveAttribute('placeholder', this.exp.passwordPlaceholder)
    }
    
    checkErrorBothFieldsEmpty() {
        expect(this.errorMsg).toHaveText(this.exp.errorBothFieldsEmpty)
    }
    
    checkErrorEmailFieldEmpty() {
        expect(this.errorMsg).toHaveText(this.exp.errorBothFieldsEmpty)
    }

    checkErrorPasswordFieldEmpty() {
        expect(this.errorMsg).toHaveText(this.exp.errorBothFieldsEmpty)
    }
    
    setValueEmailFalse() {
        this.emailField.setValue(this.exp.incorrectEmail)
    }

    setValueEmailTrue() {
        this.emailField.setValue(this.exp.correctEmail)
    }

    setValuePassword() {
        this.password.setValue('a')
    }

    setValueCorrectPassword() {
        this.password.setValue(this.exp.correctPassw)
    }
    

    checkErrorMsgDisapears() {
       this.errorMsg.waitForDisplayed({ reverse: true })
    }

    checkPassFieldEmptyErr() {  
        expect(this.errorMsg).toHaveText(this.exp.errorBothFieldsEmpty)
    }  
//good exp
    checkErrMsgIfEmailEmpty() {
         expect(this.errorMsg).toHaveText(this.exp.errorBothFieldsEmpty)
    }
   
    checkErrMsgWrongEmail() {
        expect(this.errorMsg).toHaveText(this.exp.errMsgWrongEmail) 
    }
    checkErrMsgEmailCorrectAndPasswNot() {
       expect(this.errorMsg).toHaveText(this.exp.errIncorrectPassw)
}
    

  

}

export default new Login;


