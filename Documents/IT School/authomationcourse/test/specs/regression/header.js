import Header from '../../classes/elements/header.elem';
import Forgot from '../../classes/pages/forgot.page';


describe('Elements-displayed', () => {

    before(() => {
        Header.openPage()
    })
    
    it('Header is displayed', () => {
        Header.checkPage()
    })

    it('Rating button is diaplayed', () => {
        Header.checkRaitingButton()
    })

    it('Public Game button is diaplayed', () => {
        Header.checkPablicGameButton()
    })

    it('Back to Login button is NOT displayed in Header on Login/Landing page', () => {
        Header.checkBackLoginNotDisp()
    })

    it('Logout button is Displayed', () => {
        Header.checkLogOutButton() 
    })

    
})





describe('Functionality', () => {

    it('Clicking Rating button redirects to ', () => {
        Header.clickRatingBut()
        Header.checkRatingButRedirect()
    })

    it('Rating page is displayed after the redirect', () => {
        Header.clickRatingBut()
        Header.checkRatingButRedirect()
    })

    it('Clicking Public Game redirects to ', () => {
        Header.clickButGame()
        Header.checkPubGameRedirect()
    })

    it('Public game page is displayed after the redirect', () => {
        Header.checkPubGamePage()
    })

    it('If navigate to http://qa.maf.place/forgot, Back to Login button is displayed in Header.', () => {
        Header.openForgotPage()
        Header.checkLoginBtnDispForgotPage()
    })

    it('Clicking Back to Login button redirects to ', () => {
        Header.clickBackLogin()
        Header.checkUrl()
    })

    it('Login page is displayed after the redirect.', () => {
        Header.checkPage()
    })
  
})