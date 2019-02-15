/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { IPalette, ISemanticColors } from 'office-ui-fabric-react/lib/Styling';
import {ICseoSemanticColors } from './ICseoSemanticColors'

/*
* CSEO's Color Palette - Uncomment as needed.
*/

/* Blue */
const blue_base = '#0078d4';
const blue__darker01 = '#106ebe';
const blue_darker02 = '#005A9E';

/* Gray */
const white = '#ffffff';
const gray_base = '#fafafa';
const gray_01 = '#f4f4f4';
const gray_02 = '#f3f3f3';
const gray_03 = '#f2f2f2';
const gray_04 = '#e5e5e5';
const gray_06 = '#a6a6a6';
const gray_07 = '#605e5c';
const gray_08 = '#666666';
const gray_09 = '#333333';
const gray_10 = '#323130';


/* Others */
const red_01 = '#ffe6e8'; 
const red_02 = '#fed9cc';
const red_03 = '#d73b02';
const red_04 = '#a80000';
const yellow_01 = '#fff4ce';
const green_01= '#007f00';
const green_02= '#dff6dd';



export const cseoSemanticColors: Partial<ICseoSemanticColors> = {
    //extended
    statusErrorBackground: red_04,
    statusErrorText: gray_10,
    statusErrorIcon: red_04,
    statusInformationBackground: gray_01,
    statusInformationText: RED_A80000,
    statusInformationIcon: RED_A80000,
    statusSuccessBackground: RED_A80000,
    statusSuccessText: gr,
    statusSuccessIcon: gray_07,
    statusWarningBackground: yellow_01,
    statusWarningText: gray_10,
    statusWarningIcon: gray_07,    
}


/*
 * Used globally by Fabric
 */
export const palette: Partial<IPalette> = {
 // themeDarker: bay,
//  themeDark: river,
//  themeDarkAlt: newBlue,
  themePrimary: white,
  themeSecondary: GRAY_FAFAFA,
  themeTertiary: GRAY_F2F2F2,
 //neutralDark: indieRock,
 // neutralPrimary: blackMetal,
 // neutralPrimaryAlt: deathMetal,
 // neutralSecondary: heavyMetal,
//  neutralTertiary: indieRock,
//  neutralTertiaryAlt: punkRock,
 // neutralLight: altRock,
// neutralLighter: popRock,
//  redDark: dracula,
};

/*
 * Used globally by Fabric
 */
export const semanticColors: Partial<ISemanticColors> = {
    bodyText: palette.neutralPrimary,
    disabledBodyText: palette.neutralTertiaryAlt,
    bodySubtext: palette.neutralSecondary,
    buttonText: palette.neutralPrimaryAlt,
    errorText: palette.red,
    link: palette.themeDark,
  };