import Footer from '../../classes/elements/footer.elem';

describe('Elements', () => {

    before(() => {
        Footer.openPage()
    })

    it('Footer is displayed', () => {
        Footer.checkPage()
    })

    it('Language toggle is displayed.', () => {
        Footer.checkLangTogDisp() 
    })

    it('Copyright is displayed.', () => {
        Footer.checkCopyrightDisp()
    })

    it('Version is displayed_label', () => {
        Footer.checkVersionLblDisp()
    })

    it('Version is displayed_value', () => {
        Footer.checkVersionValDisp()
    })

    it('Developer info is displayed', () => {
        Footer.checkDevInfDisp()
    })

}) 

describe('Values', () => {

    it('Language toggle value is RU', () => {
        Footer.checkLangRu()
    })

    it('The copyright is © The Maf Place', () => {
        Footer.checkCopyrightVal()
    })

    it('Version contains the word Version', () => {
        Footer.checkVersionVal()
    })

    it('Version contains the word Version', () => {
        Footer.checkVersionVers()
    })

    it('Developer info is Website by React Smart Development', () => {
        Footer.checkDevInfName()
    })

})

describe('Functionality', () => {

    it('Clicking RU changes the toggle to EN', () => {
        Footer.clickRuLang()
        Footer.checkRuChangeEn()
    })
    
    it('Clicking EN changes the toggle to RU', () => {
        Footer.clickEnLang()
        Footer.checkEnChangeRu()
    })

    it('Clicking React Smart Development redirects to https://www.reactsmart.dev/', () => {
        Footer.clickReactSmartDev()
        Footer.switchWindow()
        Footer.checkDevUrl()
    })

})





