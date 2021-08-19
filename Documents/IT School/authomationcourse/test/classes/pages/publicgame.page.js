import Base from '../base.class';

class Publicgame extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = { //expected results
            urlPbGame: "http://qa.maf.place/public-game",
            tabValue1: 'New Game',
            tabValue2: 'Game Search',
            addPlayer: 'Nickname/Name',
            addPlayerBtnValue: 'Add',
            randSeatTxt: 'Random seating numbers',
            gameTabHeader: 'Game',
            gameTabPlcHolder: 'Add players to create a game',
            creGameBtnValue: 'Create Game',
            addPlayer_a: 'a',
            addPlayer_30: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            addPlayer_31: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbba',
        } 
    }

    //element selector getters
    //get page() { return $('#forgot-page') }
    get pubGamePage() { return $('#public-game') }
    get newGameTab() { return $('#new-game-tab') }
    get gameSearchTab() { return $('#search-tab') }
    get addBtn() { return $('#add_player_button') }
    get addPlField() { return $('#add_player_field') }
    get createGameBtn() { return $('#create-game-button') }
    get randomSeatingNumber() { return $('#random-seating-label') }
    get randSeatCheckBox() { return $('#random-seating') }
    get gameHeader() { return $('.thead-light') }
    get addPlayerTable() { return $('#players-table-body') }
    get addPlayerCreatGame() { return $('#players-table-empty') }

    //methods
    openPage() {
        browser.url(this.exp.urlPbGame);
    }

    page() {
        this.pubGamePage.waitForDisplayed();
    }
//elements 
    checkNewGameTab() {
        expect(this.newGameTab).toBeDisplayed()
    }

    checkGameSearchTab() {
        expect(this.gameSearchTab).toBeDisplayed()
    }

    checkAddPlayerField() {
        expect(this.addPlField).toBeDisplayed()
    }

    checkAddPlayerBtn() {
        expect(this.addBtn).toBeDisplayed()
    }

    checkRandSeatNumBox() {
        expect(this.randSeatCheckBox).toBeDisplayed()
    }

    checkCreateGameBtn() {
        expect(this.createGameBtn).toBeDisplayed()
    }

    //values
    checkNewGameTabValue() {
        expect(this.newGameTab).toHaveText(this.exp.tabValue1)
    }

    checkGameSeachTabValue() {
        expect(this.gameSearchTab).toHaveText(this.exp.tabValue2)
    }

    checkAddPlFldPlcHold() {
        expect(this.addPlField).toHaveAttribute('placeholder', this.exp.addPlayer) //Nickname/Name
    }

    checkAddPlayerBtnValue() {
        expect(this.addBtn).toHaveText(this.exp.addPlayerBtnValue) //Add
    }

    checkCreateGameBtnValue() {
        expect(this.createGameBtn).toHaveText(this.exp.creGameBtnValue) // last one
    }

    checkRandSeatChkBoxValue() {
        expect(this.randomSeatingNumber).toHaveTextContaining(this.exp.randSeatTxt) // Random seating num
        // expect($('selector')).toHaveTextContaining('expected-value')
    }

    checkAddPlayersDefaultValue() {
        expect(this.addPlayerCreatGame).toHaveText(this.exp.gameTabPlcHolder) // Add players to creat a game
    }

    checkGameValue() {
        expect(this.gameHeader).toHaveText(this.exp.gameTabHeader)  // Game
    }

    //Functionality 

    clickAddBtn() {
        this.addBtn.click()
    }

    clickCreateGameBtn() {
        this.createGameBtn.click()
    }

    setOneAddPlayerField() {
        this.addPlField.setValue(this.exp.addPlayer_a)
    }

    set30AddPlayerField() {
        this.addPlField.setValue(this.exp.addPlayer_30)
    }

    set31AddPlayerField() {
        this.addPlField.setValue(this.exp.addPlayer_31)
    }

    countRows() {
        let rowcount = 10//browser.$$(this.addPlayerTable);
        console.log('The ROWCOUNT from countRows method: ' + rowcount);
        return rowcount;
    }







/*templates
    checkErrMsgDisap() {
        this.errorMsgForgot.waitForDisplayed({ reverse: true })
    }
    checkPasswSent() {
        expect(this.errorMsgForgot).toHaveText(this.exp.successMsg)
    }
    */

}

export default new Publicgame;
