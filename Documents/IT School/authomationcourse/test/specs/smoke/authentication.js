import Login from '../../classes/pages/login.page';
import Header from '../../classes/elements/header.elem';
import Forgot from '../../classes/pages/forgot.page';


describe('Authentication', () => {

    before(() => {
        Login.openPage()
    })

    it('Check Successful Login', () => {
        Login.setValueEmailTrue()
        Login.setValueCorrectPassword()
        Login.clickLogin()
        Header.checkLogOutButton()
    })

    it('Logout (and check that a user was really logged out) ', () => {
        Header.clickBackLogin()
        Header.checkUrl()
    })


    it('Password reminder (and check of the expected behavior)', () => {
        Login.openPage()
        Login.clickRemindPassword()
        Forgot.checkRemindPasswRedirect()
    })



})

