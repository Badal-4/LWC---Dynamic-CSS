import { LightningElement } from 'lwc';
 
export default class DynamicCSSExample extends LightningElement {
    //Since spring release @track is no longer required unless using object or array
    //https://releasenotes.docs.salesforce.com/en-us/spring20/release-notes/rn_lwc_track.htm
 
    //Default to false
    buttonClicked;
 
    //Initialize with light color 
    divColor = 'light-color';
 
    //Toggle CSS class
    toggleColor(){
        //Set to true if false, if true set to false
        this.buttonClicked = !this.buttonClicked;
        //If button clicked is true use blue color - otherwise use standard light color css class
        this.divColor = this.buttonClicked ? 'blue-color' : 'light-color';
 
    }
}
