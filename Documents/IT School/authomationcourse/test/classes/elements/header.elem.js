import Base from '../base.class';

class Header extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = { //expected results
            url: 'http://qa.maf.place/',
            urlUsers: 'http://qa.maf.place/users',
            urlPubGame: 'http://qa.maf.place/public-game',
            urlForgot: 'http://qa.maf.place/forgot'
        }
    }

    //element selector getters
    get page() { return $('#header') }
    get raitingBut() { return $('#btn-all') }
    get publicGameBut() { return $('#btn-game') }
    get backLogin() { return $('#header #btn-login') }
    get publicGamePage() { return $('#public-game') }
    get forgotBtn() { return $('#btn-forgot') }
    get logOutBtn() { return $('#btn-logout') }

    //methods
    openPage() {
        browser.url(this.exp.url);
    }

    openForgotPage() {
        browser.url(this.exp.urlForgot);
    }

    checkPage() {
        this.page.waitForDisplayed();
    }

    checkRaitingButton() {
        expect(this.raitingBut).toBeDisplayed()
    }

    checkLogOutButton() {
        expect(this.logOutBtn).toBeDisplayed()
    }
  

    checkPablicGameButton() {
            expect(this.publicGameBut).toBeDisplayed()
    }

    checkBackLoginNotDisp() {
        this.backLogin.waitForDisplayed({ reverse: true })
    }

    clickRatingBut() {
        this.raitingBut.click()
    }

    checkRatingButRedirect() {
        expect(browser).toHaveUrl(this.exp.urlUsers)
    }
    
    clickButGame() {
        this.publicGameBut.click()
    }

    checkPubGameRedirect() {
        expect(browser).toHaveUrl(this.exp.urlPubGame)
    }
   
    checkPubGamePage() {
        expect(this.publicGamePage).toBeDisplayed()
    }
  
    checkLoginBtnDispForgotPage() {
        expect(this.backLogin).toBeDisplayed()
    }

    clickBackLogin() {
        this.backLogin.click()
    }

    checkUrl() {
        expect(browser).toHaveUrl(this.exp.url)
    }

}

export default new Header;
