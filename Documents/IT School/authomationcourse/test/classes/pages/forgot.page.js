import Base from '../base.class';

class Forgot extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = { //expected results
            urlForgot: "http://qa.maf.place/forgot",
            emailPlaceholder: 'Email *',
            remindBtnValue: 'Remind Password',
            errMsgEmailEmpty: 'Please specify email',
            correctEmail: 'mafplaceqauser@gmail.com',
            incorrectEmail: 'alacopr@gmail.com',
            errMsgWrongEmail: 'User with this email does not exist',
            successMsg: 'Password reminder sent'

        }
    }

    //element selector getters
    //get page() { return $('#forgot-page') }
    get forgotPage() { return $('#forgot-page') }
    get buttonRemPassword() { return $('#btn-remind') }
    get emailField() { return $('#email') }
    get errorMsgForgot() { return $('#error-text') }
    get logo() { return $('#logo') }


    //methods
    /* page() {
        this.forgotPage.waitForDisplayed();
    } */

    openPage() {
        browser.url(this.exp.urlForgot);
    }

    checkForgotPageDisplayed() {
       expect(this.forgotPage).toBeDisplayed()
    }

    checkLogo() {
        expect(this.logo).toBeDisplayed()
    }

    checkEmailField() {
        expect(this.emailField).toBeDisplayed()
    }

    checkButtonRemPassword() {
        expect(this.buttonRemPassword).toBeDisplayed()
    }

    checkEmailPlaceholder() {
        expect(this.emailField).toHaveAttribute('placeholder', this.exp.emailPlaceholder)
    }
    
    checkButtonRemPasswordValue() {
        expect(this.buttonRemPassword).toHaveText(this.exp.remindBtnValue)
    }

    clickRemindPasswordBtnForgotPage() {
        this.buttonRemPassword.click()
    }
 
    checkErrorEmailFieldEmpty() {
        expect(this.errorMsgForgot).toHaveText(this.exp.errMsgEmailEmpty)
    }
    
    setValueIncorrEmailForgotPage() {
        this.emailField.setValue(this.exp.incorrectEmail)
    }
   
    setValueEmailForgotPage() {
        this.emailField.setValue(this.exp.correctEmail)
    }


    checkErrMsgDisap() {
        this.errorMsgForgot.waitForDisplayed({ reverse: true })
}

    
    checkErrMsgWrongEmail() {
        expect(this.errorMsgForgot).toHaveText(this.exp.errMsgWrongEmail)
    }

    checkPasswSent() {
        expect(this.errorMsgForgot).toHaveText(this.exp.successMsg)

    }

  //forgot page
    checkRemindPasswRedirect() {
        expect(browser).toHaveUrl(this.exp.urlForgot) 
    }

}

export default new Forgot;
