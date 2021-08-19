import Publicgame from '../../classes/pages/publicgame.page';



describe('Elements-displayed', () => {

    before(() => {
        Publicgame.openPage();
    })

    it('Pablic Game Page Check', () => {
        Publicgame.page()
    })

    it('Check New Game Tab', () => {
        Publicgame.checkNewGameTab()
    })

    it('Game Search Tab', () => {
        Publicgame.checkGameSearchTab()
    })

    it('Add Player Field', () => {
        Publicgame.checkAddPlayerField()
    })

    it('Add Player Btn', () => {
        Publicgame.checkAddPlayerBtn()
    })

    it('Rand Seat Num Box', () => {
        Publicgame.checkRandSeatNumBox()
    })

    it('Create Game Btn', () => {
        Publicgame.checkCreateGameBtn()
    })

})

describe('Values', () => {

    it('Create Game Btn Value', () => {
        Publicgame.checkCreateGameBtnValue()
    })

    it('Add Player Field Placeholder', () => {
        Publicgame.checkAddPlFldPlcHold()
    })

    //Value
    it('Add Player Btn Value', () => {
        Publicgame.checkAddPlayerBtnValue()
    })

    it('New Game Tab Value', () => {
        Publicgame.checkNewGameTabValue()
    })

    it('Game Search Tab Value', () => {
        Publicgame.checkGameSeachTabValue()
    })

    it('Random Seating Num Value', () => {
        Publicgame.checkRandSeatChkBoxValue()
    })

    it('Game Header Value', () => {
        Publicgame.checkGameValue()
    })

    it('Add Players Default Tab Value', () => {
        Publicgame.checkAddPlayersDefaultValue()
    })
})

describe('Functionality', () => {
//Functionality
    it('Click Add Button Adds a Table Row', () => {
        let rowCount = Publicgame.countRows()
        console.log('Rowcount = ' + rowCount );
        Publicgame.setOneAddPlayerField()
        Publicgame.clickAddBtn()
        let rowCount1 = Publicgame.countRows()
        console.log('Rowcount1 = ' + rowCount1);
        return rowCount1 > rowCount;
    })
    


})




//examples
/*
describe('Functionality', () => {

    it('Error message appears if only Email field is empty and click Remind Password', () => {
        //browser.url('/forgot');
        Forgot.openPage()
        Forgot.clickRemindPasswordBtnForgotPage()
        Forgot.checkErrorEmailFieldEmpty()
    })
})

*/
