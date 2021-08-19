import Base from '../base.class';

class Footer extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = { //expected results
            ru: 'RU',
            en: 'EN',
            copirVal: '© The Maf Place',
            versVal: 'Version',
            versVers: '3.5.0',
            devName: 'React Smart Development',
            devUrl: 'https://www.reactsmart.dev/'

        }
    }

    //element selector getters
    get page() { return $('#footer') }
    get langTogRu() { return $('#RU-lang-toggle') }
    get langTogEn() { return $('#EN-lang-toggle') }
    get copyright() { return $('#copyright-text')}
    get versionLbl() { return $('#version-label')}
    get versionVal() { return $('#version-value')}
    get devDisp() { return $('#developer-link')}
    


    //methods
    checkPage() {
        this.page.waitForDisplayed();
    }

    openPage() {
        browser.url('/');
    }

    checkLangTogDisp() {
        expect(this.langTogRu).toBeDisplayed()
    }

    checkCopyrightDisp() {
        expect(this.copyright).toBeDisplayed()
    }

    checkVersionLblDisp() {
        expect(this.versionLbl).toBeDisplayed()
    }


    checkVersionValDisp() {
        expect(this.versionVal).toBeDisplayed()
    }

    checkDevInfDisp() {
        expect(this.devDisp).toBeDisplayed()
    }
    

    checkLangRu() {
        expect(this.langTogRu).toHaveText(this.exp.ru)
    }
  
    checkCopyrightVal() {
        expect(this.copyright).toHaveText(this.exp.copirVal)
    }
  
    checkVersionVal() {
        expect(this.versionLbl).toHaveText(this.exp.versVal)
    }

    checkVersionVers() {
        expect(this.versionVal).toHaveText(this.exp.versVers)
    }

    checkDevInfName() {
        expect(this.devDisp).toHaveText(this.exp.devName)
    }
    

    clickRuLang() {
        this.langTogRu.click()
    }

    checkRuChangeEn() {
        expect(this.langTogEn).toHaveText(this.exp.en)
    }

    clickEnLang() {
        this.langTogEn.click()
    }

    checkEnChangeRu() {
        expect(this.langTogRu).toHaveText(this.exp.ru)
    }


    clickReactSmartDev() {
        this.devDisp.click()
    }

    switchWindow() {
        browser.switchWindow(this.exp.devUrl)
    }

    checkDevUrl() {
        expect(browser).toHaveUrl(this.exp.devUrl);
    }
    
}

export default new Footer;
