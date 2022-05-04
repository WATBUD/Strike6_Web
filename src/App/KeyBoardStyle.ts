import { Injectable } from '@angular/core'
import { identity } from 'lodash'
import { KB61Prohibit } from './KeyBoardData'
let AllFunctionMapping = window['System']._nodeRequire('./backend/others/SupportData').AllFunctionMapping
@Injectable()
export class KeyBoardStyle {
    nowTargetIndex = 0
    nowTargetKey='';
    //BGImage:'url(./image/Share/KB1KeyerEffects.png)',

    keyBoardList = {
        'MK63': {
            ItemCss: [
                "",
                "margin-left: 6%;",
                "margin-left: 11.9%;",
                "margin-left: 17.9%;",
                "margin-left: 23.8%;",
                "margin-left: 29.6%;",
                "margin-left: 35.5%;",
                "margin-left: 41.4%;",
                "margin-left: 47.3%;",
                "margin-left: 53.2%;",
                "margin-left: 59.1%;",
                "margin-left: 65.2%;",
                "margin-left: 70.9%;",
                "margin-left: 76.9%;width: 11.5%;",
                "margin-left: 88.7%;",
                "margin-top: 8.7%; margin-left: 11.6%;",
                "margin-top: 8.7%; margin-left: 18.2%;",
                "margin-top: 8.7%; margin-left: 24.4%;",
                "margin-top: 8.7%; margin-left: 31%;",
                "margin-top: 8.7%; margin-left: 37.3%;",
                "margin-top: 8.7%; margin-left: 43.7%;",
                "margin-top: 8.7%; margin-left: 50.1%;",
                "margin-top: 8.7%; margin-left: 56.6%;",
                "margin-top: 8.7%; margin-left: 63%;",
                "margin-top: 8.7%; margin-left: 69.5%;",
                "margin-top: 8.7%; margin-left: 75.8%;",
                "margin-top: 8.7%; margin-left: 82.4%;",
                "width: 5.6vw; margin-top: 8.7%; margin-left: 88.8%;",
                "width: 11.3%; margin-top: 15.7%; margin-left: 2%;",
                "margin-top: 15.7%; margin-left: 13.1%;",
                "margin-top: 15.7%; margin-left: 19.6%;",
                "margin-top: 15.7%; margin-left: 26.1%;",
                "margin-top: 15.7%; margin-left: 32.5%;",
                "margin-top: 15.7%; margin-left: 38.9%;",
                "margin-top: 15.7%; margin-left: 45.1%;",
                "margin-top: 15.7%; margin-left: 51.5%;",
                "margin-top: 15.7%; margin-left: 58.1%;",
                "margin-top: 15.7%; margin-left: 64.5%;",
                "margin-top: 15.7%; margin-left: 71.1%;",
                "margin-top: 15.7%; margin-left: 77.6%;",
                "width: 14.6%; margin-top: 15.7%; margin-left: 84.1%;",
                "width: 14.6%; margin-top: 22.6%; margin-left: 2%;",
                "margin-top: 22.6%; margin-left: 16.5%;",
                "margin-top: 22.6%; margin-left: 22.9%;",
                "margin-top: 22.6%; margin-left: 29.3%;",
                "margin-top: 22.6%; margin-left: 35.6%;",
                "margin-top: 22.6%; margin-left: 42%;",
                "margin-top: 22.6%; margin-left: 48.4%;",
                "margin-top: 22.6%; margin-left: 54.9%;",
                "margin-top: 22.6%; margin-left: 61.3%;",
                "margin-top: 22.6%; margin-left: 67.8%;",
                "margin-top: 22.6%; margin-left: 74.3%;",
                "width: 18%; margin-top: 22.6%; margin-left: 80.9%;",
                "width: 8.3%; margin-top: 29.8%; margin-left: 2%;",
                "width: 7.7%; margin-top: 29.8%; margin-left: 10.3%;",
                "width: 8%; margin-top: 29.8%; margin-left: 18.2%;",
                "width: 41%; margin-top: 30%; margin-left: 25.5%;",
                "width: 7.8%; margin-top: 29.8%; margin-left: 66.6%;",
                "width: 7.8%; margin-top: 29.8%; margin-left: 74.7%;",
                "width: 8.2%; margin-top: 29.8%; margin-left: 82.6%;",
                "width: 7.8%; margin-top: 29.8%; margin-left: 90.8%;",
                "width: 7.8%; margin-top: 29.8%; margin-left: 90.8%;",
                "width: 7.8%; margin-top: 29.8%; margin-left: 90.8%;",
            ],
            keyMapping: ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "ShiftRight", "ArrowUp", "Slash", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "Custom_Fnkey", "ArrowLeft", "ArrowDown", "ArrowRight"],
            cssText: 'position: absolute;height: 100%;width: 100%;pointer-events: none;',
            BGImage: "url(./image/Share/MK63.png)",
            BGImageKeyerEffects: "url(./image/Share/KB1White.png)",
            qigong_Step1_Range: [0, 9, 24, 37, 49, 61],
            qigong_Step2_Range: [20, 21, 31, 49, 50, 35],
            centerBlockPoint: 36,
            KeyTableArray: [[0, 14], [15, 29], [30, 44], [45, 58], [59, 72], [73, 81]],
            Retro_snakeArray: [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
                ,14,15,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 
                38, 37, 36, 35, 34, 33, 32, 31, 30,29, 28,
                39, 40, 41,42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
                60, 59, 58, 57, 56, 55, 54, 53],

            imageMaxWidth: 765,
            imageMaxHeight: 308,
            SelectDeviceBG:"./image/Share/MK63SelectDeviceBG.jpg",
        },
        'Strike6': {
            ItemCss: [
                "width: 47px;margin-left: 1px;",
                " margin-left: 51px;  width: 47px;",
                "margin-left: 102px;wid: 47px;width: 47px;",
                " margin-left: 153px;  width: 47px;",
                " margin-left: 203px;  width: 48px;",
                "margin-left: 254px;width: 47px;",
                "margin-left: 305px;width: 46px;",
                "margin-left: 355px;width: 48px;width: 47px;",
                "margin-left: 406px;width: 47px;",
                "margin-left: 457px;width: 47px;",
                "margin-left: 507px;wid: 47px;width: 47px;",
                " margin-left: 558px;  width: 47px;",
                " margin-left: 609px;  width: 47px;",
                " margin-left: 660px;  width: 95px;",
                " margin-top: 52px; width: 72px; margin-left: 1px;",
                " margin-top: 52px; width: 47px; margin-left: 77px;",
                "margin-top: 52px;width: 47px;margin-left: 128px;",
                " margin-top: 52px; width: 47px; margin-left: 178px;",
                " margin-top: 52px; width: 47px; margin-left: 229px;",
                " margin-top: 52px; width: 47px; margin-left: 279px;",
                " margin-top: 52px; width: 48px; margin-left: 330px;",
                " margin-top: 52px; width: 48px; margin-left: 380px;",
                " margin-top: 52px; width: 48px; margin-left: 431px;",
                " margin-top: 52px; width: 47px; margin-left: 482px;",
                "margin-top: 52px;width: 47px;margin-left: 533px;",
                "margin-top: 52px;width: 47px;margin-left: 583px;",
                " margin-top: 52px; width: 47px; margin-left: 634px;",
                " margin-top: 52px; width: 73px; margin-left: 684px;",
                " margin-top: 103px; width: 83px;margin-left: 2px;",
                " margin-top: 103px; margin-left: 91px;",
                " margin-top: 103px; margin-left: 142px;",
                " margin-top: 103px; margin-left: 193px;",
                " margin-top: 103px; margin-left: 243px;",
                " margin-top: 103px; margin-left: 295px;",
                " margin-top: 103px; margin-left: 345px;",
                " margin-top: 103px; margin-left: 395px;",
                " margin-top: 103px; margin-left: 445px;",
                " margin-top: 103px; margin-left: 495px;",
                " margin-top: 103px; margin-left: 546px;",
                " margin-top: 103px; margin-left: 596px;",
                " margin-top: 103px; width: 111px; margin-left: 646px;",
                " margin-top: 153px; width: 109px; margin-left: 2px;",
                " margin-top: 153px; width: 47px; margin-left: 115px;",
                " margin-top: 153px; width: 47px; margin-left: 166px;",
                " margin-top: 153px; width: 47px; margin-left: 216px;",
                " margin-top: 153px; width: 46px; margin-left: 268px;",
                " margin-top: 153px; width: 47px; margin-left: 318px;",
                " margin-top: 153px; width: 47px; margin-left: 368px;",
                " margin-top: 153px; width: 47px; margin-left: 418px;",
                " margin-top: 153px; width: 47px; margin-left: 469px;",
                " margin-top: 153px; width: 46px; margin-left: 521px;",
                " margin-top: 153px; width: 47px; margin-left: 571px;",
                " margin-top: 153px; width: 134px; margin-left: 623px;",
                "margin-top: 204px;width: 60px;margin-left: 1px;",
                "margin-top: 204px;width: 60px;margin-left: 65px;",
                "margin-top: 204px;width: 60px;margin-left: 128px;",
                " margin-top: 203px; width: 311px; margin-left: 192px;",
                " margin-top: 203px; width: 59px; margin-left: 507px;",
                " margin-top: 203px; width: 60px; margin-left: 570px;",
                " margin-top: 203px; width: 61px; margin-left: 633px;",
                " margin-top: 203px; width: 61px; margin-left: 696px;",
            ],
            keyMapping: ["Escape", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "Space", "ArrowLeft", "ArrowDown", "ArrowRight", "Custom_Fnkey"],
            cssText: 'position: absolute;height: 100%;width: 100%;pointer-events: none;',
            BGImage: "url(./image/Share/Strike6.png)",
            BGImageKeyerEffects: "url(./image/Share/KB1White.png)",
            qigong_Step1_Range: [0, 14, 28, 40, 52, 60],
            qigong_Step2_Range: [20, 21, 33, 35, 46, 47],
            centerBlockPoint: 34,
            KeyTableArray: [[0, 14], [15, 28], [29, 41], [42, 52], [53, 60]],
            MAD_CATZArray: [
                [52],
                [52, 51],
                [52, 51, 50],
                [52, 51, 50, 49],
                [52, 51, 50, 49, 48],
                [52, 51, 50, 49, 48, 47],
                [52, 51, 50, 49, 48, 47, 46],
                [52, 51, 50, 49, 48, 47, 46, 45],
                [52, 51, 50, 49, 48, 47, 46, 45, 44],
                [52, 51, 50, 49, 48, 47, 46, 45, 44, 43],
                [52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42],
                [52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41],
                [52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40],
                [52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 27],
                [51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 39, 26, 13, 27],
                [50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 26, 38, 25, 40, 12],
                [49, 48, 47, 46, 45, 44, 43, 42, 41, 37, 24, 11, 25, 39, 52],
                [49, 48, 47, 46, 45, 44, 43, 42, 41, 37, 24, 11, 25, 39, 52, 40],
                [49, 48, 47, 46, 45, 44, 43, 42, 41, 37, 24, 11, 25, 39, 52, 40, 27],
                [48, 47, 46, 45, 44, 43, 42, 41, 36, 23, 10, 24, 38, 51, 39, 26, 13],
                [48, 47, 46, 45, 44, 43, 42, 41, 36, 23, 10, 24, 38, 51, 39, 26, 13, 27],
                [47, 46, 45, 44, 43, 42, 41, 9, 22, 35, 23, 37, 50, 38, 25, 12, 40, 26],
                [46, 45, 44, 43, 42, 41, 37, 25, 52, 39, 24, 11, 49, 8, 21, 34, 22, 36],
                [45, 44, 43, 42, 41, 7, 20, 33, 21, 35, 48, 36, 23, 10, 24, 38, 51],
                [44, 43, 42, 41, 20, 23, 52, 50, 37, 9, 22, 47, 34, 6, 19, 32, 35],
                [44, 43, 42, 41, 20, 23, 52, 50, 37, 9, 22, 47, 34, 6, 19, 32, 35, 40],
                [44, 43, 42, 41, 20, 23, 52, 50, 37, 9, 22, 47, 34, 6, 19, 32, 35, 40, 27],
                [43, 42, 41, 22, 26, 39, 51, 13, 27, 49, 36, 8, 21, 46, 31, 18, 5, 33, 19, 34],
                [42, 41, 50, 38, 25, 12, 26, 40, 30, 17, 4, 18, 32, 45, 33, 20, 7, 21, 35, 48],
                [42, 41, 50, 38, 25, 12, 26, 40, 30, 17, 4, 18, 32, 45, 33, 20, 7, 21, 35, 48, 52],
                [41, 25, 20, 52, 29, 16, 3, 17, 31, 44, 32, 19, 6, 34, 47, 37, 49, 24, 11, 39, 51],
                [13, 50, 15, 14, 1, 29, 42, 30, 17, 4, 18, 32, 45, 47, 35, 22, 9, 23, 37, 49, 12, 40, 26, 52],
                [14, 29, 17, 49, 52, 0, 28, 41, 16, 3, 31, 44, 34, 46, 21, 8, 22, 36, 48, 51, 39, 25, 11, 12, 13],
                [52, 28, 41, 16, 51, 11, 12, 13, 15, 30, 43, 2, 45, 33, 20, 7, 21, 35, 47, 48, 10, 24, 38, 50, 27],
                [52, 51, 11, 12, 15, 47, 10, 50, 14, 1, 29, 42, 44, 32, 19, 6, 20, 34, 46, 49, 37, 23, 9, 26, 40],
                [51, 11, 10, 50, 14, 19, 46, 49, 9, 0, 28, 41, 43, 31, 18, 5, 33, 45, 8, 22, 36, 48, 25, 39, 27],
                [10, 50, 49, 9, 45, 8, 48, 38, 24, 26, 42, 30, 17, 4, 18, 32, 44, 47, 35, 21, 7, 40],
                [10, 50, 49, 9, 45, 8, 48, 38, 24, 26, 42, 30, 17, 4, 18, 32, 44, 47, 35, 21, 7, 40, 13],
                [49, 9, 8, 48, 17, 44, 47, 7, 41, 29, 16, 3, 31, 43, 46, 34, 20, 6, 23, 37, 39, 52, 25, 12, 13],
                [47, 7, 46, 6, 52, 12, 15, 42, 45, 11, 5, 23, 37, 10, 50, 51, 21, 35, 4, 18, 32, 44, 29, 1, 14, 41],
                [46, 6, 45, 11, 5, 10, 50, 51, 4, 44, 14, 41, 0, 28, 17, 31, 3, 43, 20, 34, 22, 36, 9, 49],
                [45, 5, 10, 50, 4, 44, 3, 43, 9, 49, 16, 30, 42, 2, 19, 33, 21, 35, 48, 8, 52, 40, 27],
                [4, 44, 3, 43, 9, 49, 42, 48, 8, 41, 29, 15, 1, 2, 18, 32, 20, 34, 7, 47, 51, 39, 26, 13],
                [4, 44, 3, 43, 9, 49, 42, 48, 8, 41, 29, 15, 1, 2, 18, 32, 20, 34, 7, 47, 51, 39, 26, 13, 27],
                [3, 43, 42, 48, 8, 41, 1, 2, 7, 47, 26, 14, 28, 0, 17, 31, 19, 33, 6, 46, 50, 38, 25, 12, 40, 52],
                [42, 41, 1, 2, 7, 47, 0, 6, 46, 25, 37, 49, 24, 11, 39, 51, 52, 45, 32, 18, 5, 16, 30],
                [41, 0, 45, 5, 4, 44, 23, 50, 13, 14, 28, 16, 30, 3, 43, 47, 35, 22, 9, 37, 49, 12, 27],
                [4, 44, 13, 3, 43, 22, 49, 12, 2, 15, 29, 42, 46, 34, 21, 8, 36, 48, 40, 26, 11],
                [13, 3, 43, 2, 42, 48, 11, 14, 28, 41, 1, 45, 33, 20, 7, 35, 47, 21, 10, 25, 39, 12, 52],
                [2, 42, 11, 41, 1, 20, 47, 10, 12, 0, 44, 32, 19, 6, 34, 9, 24, 38, 51, 46],
                [41, 1, 10, 0, 19, 9, 46, 31, 43, 18, 5, 33, 45, 8, 23, 37, 50, 11],
                [10, 0, 9, 18, 45, 8, 30, 17, 4, 42, 32, 44, 7, 22, 49, 36, 13, 52],
                [9, 8, 44, 7, 13, 52, 41, 29, 16, 3, 31, 43, 17, 21, 35, 48, 51, 40, 27, 12, 6],
                [8, 7, 13, 52, 16, 43, 51, 27, 12, 6, 28, 42, 30, 15, 2, 5, 20, 34, 47, 11, 26, 39, 50],
                [7, 13, 52, 12, 6, 42, 15, 5, 11, 26, 50, 14, 41, 29, 1, 4, 19, 33, 46, 10, 25, 38, 51, 49],
                [13, 52, 12, 6, 5, 11, 50, 14, 41, 4, 10, 25, 51, 49, 0, 28, 3, 18, 32, 45, 9, 24, 37, 48],
                [52, 12, 11, 50, 4, 10, 51, 49, 3, 9, 48, 17, 31, 44, 2, 5, 8, 23, 24, 36, 47],
                [52, 11, 50, 10, 51, 49, 3, 9, 48, 2, 8, 47, 1, 4, 16, 30, 43, 7, 22, 35, 46, 23],
                [52, 50, 10, 51, 49, 3, 9, 48, 2, 8, 47, 1, 7, 22, 46, 0, 15, 29, 42, 6, 21, 34, 45],
                [52, 50, 51, 49, 9, 48, 2, 8, 47, 1, 7, 46, 0, 6, 21, 45, 14, 28, 41, 5, 20, 33, 44],
                [52, 50, 51, 49, 48, 8, 47, 1, 7, 46, 0, 6, 45, 5, 20, 44, 4, 19, 32, 43],
                [52, 50, 51, 49, 48, 47, 7, 46, 0, 6, 45, 5, 44, 4, 43, 42, 31, 18, 19, 3],
                [52, 50, 51, 49, 48, 47, 46, 6, 45, 5, 44, 4, 43, 42, 18, 3, 41, 30, 17, 2],
                [52, 50, 51, 49, 48, 47, 46, 45, 5, 44, 4, 43, 42, 3, 41, 17, 2, 1, 16, 29],
                [52, 50, 51, 49, 48, 47, 46, 45, 5, 44, 4, 43, 42, 3, 41, 2, 1, 16, 29, 0, 15, 28],
                [4, 3, 2, 1, 0, 41, 28, 15, 16, 42, 44, 43, 47, 45, 49, 48, 46, 50, 52, 51],
                [3, 2, 1, 0, 41, 15, 42, 44, 43, 47, 45, 49, 48, 46, 50, 52, 51, 14],
                [2, 1, 0, 41, 42, 44, 43, 47, 45, 49, 48, 46, 50, 52, 51, 14],
                [1, 0, 41, 42, 44, 43, 47, 45, 49, 48, 46, 50, 52, 51],
                [0, 41, 42, 44, 43, 47, 45, 49, 48, 46, 50, 52, 51],
                [41, 42, 44, 43, 47, 45, 49, 48, 46, 50, 52, 51],
                [41, 42, 44, 43, 47, 45, 49, 48, 46, 50, 51],
                [41, 42, 44, 43, 47, 45, 49, 48, 46, 50],
                [41, 42, 44, 43, 47, 45, 49, 48, 46],
                [41, 42, 44, 43, 47, 45, 48, 46],
                [41, 42, 44, 43, 47, 45, 46],
                [41, 42, 44, 43, 45, 46],
                [41, 42, 44, 43, 45],
                [41, 42, 44, 43],
                [41, 42, 43],
                [41, 42],
                [41],
                [],
            ],
            Retro_snakeArray: [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
                , 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
                40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28,
                41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
                60, 59, 58, 57, 56, 55, 54, 53],
            imageMaxWidth: 765,
            imageMaxHeight: 308,
            SelectDeviceBG: "./image/Share/Strike6SelectDeviceBG.png",
        },
        'MK68M': {
            ItemCss: [
            "margin-left: 2px;width: 44px;",
            "margin-left: 48px;width: 44px;",
            "margin-left: 96px;width: 44px;",
            "margin-left: 143px;width: 44px;",
            "margin-left: 190px;width: 44px;",
            "margin-left: 237px;width: 44px;",
            "margin-left: 284px;width: 44px;",
            "margin-left: 332px;width: 44px;",
            "margin-left: 380px;width: 44px;",
            "margin-left: 427px;width: 44px;",
            "margin-left: 475px;width: 44px;",
            "margin-left: 523px;width: 44px;",
            "margin-left: 571px;width: 44px;",
            "margin-left: 618px;width: 93px;",
            "margin-left: 712px;width: 44px;",
            "margin-top: 47px;margin-left: 3px;width: 67px;",
            "margin-top: 47px;margin-left: 72px;width: 45px;",
            "margin-top: 47px;margin-left: 118px;width: 45px;",
            "margin-top: 47px;margin-left: 167px;width: 44px;",
            "margin-top: 47px;margin-left: 214px;width: 44px;",
            "margin-top: 47px;margin-left: 262px;width: 44px;",
            "margin-top: 47px;margin-left: 309px;width: 44px;",
            "margin-top: 47px;margin-left: 356px;width: 44px;",
            "margin-top: 47px;margin-left: 405px;width: 44px;",
            "margin-top: 47px;margin-left: 452px;width: 44px;",
            "margin-top: 47px;margin-left: 499px;width: 44px;",
            "margin-top: 47px;margin-left: 546px;width: 44px;",
            "margin-top: 47px;margin-left: 593px;width: 44px;",
            "margin-top: 47px;margin-left: 641px;width: 69px;",
            "margin-top: 47px;margin-left: 711px;width: 46px;",
            "margin-top: 94px;margin-left: 2px;width: 78px;",
            "margin-top: 94px;margin-left: 82px;width: 47px;",
            "margin-top: 94px;margin-left: 131px;width: 47px;",
            "margin-top: 94px;margin-left: 178px;width: 47px;",
            "margin-top: 94px;margin-left: 226px;width: 47px;",
            "margin-top: 94px;margin-left: 273px;width: 47px;",
            "margin-top: 94px;margin-left: 320px;width: 47px;",
            "margin-top: 94px;margin-left: 368px;width: 47px;",
            "margin-top: 94px;margin-left: 416px;width: 47px;",
            "margin-top: 94px;margin-left: 462px;width: 47px;",
            "margin-top: 94px;margin-left: 510px;width: 47px;",
            "margin-top: 94px;margin-left: 557px;width: 47px;",
            "margin-top: 94px;margin-left: 605px;width: 105px;",
            "margin-top: 94px;margin-left: 710px;width: 45px;",
            "margin-top: 143px;margin-left: 1px;width: 105px;",
            "margin-top: 143px;margin-left: 107px;width: 45px;",
            "margin-top: 143px;margin-left: 154px;width: 45px;",
            "margin-top: 143px;margin-left: 202px;width: 45px;",
            "margin-top: 143px;margin-left: 249px;width: 45px;",
            "margin-top: 143px;margin-left: 297px;width: 45px;",
            "margin-top: 143px;margin-left: 345px;width: 45px;",
            "margin-top: 143px;margin-left: 392px;width: 45px;",
            "margin-top: 143px;margin-left: 438px;width: 45px;",
            "margin-top: 143px;margin-left: 486px;width: 45px;",
            "margin-top: 143px;margin-left: 534px;width: 45px;",
            "margin-top: 143px;margin-left: 581px;width: 82px;",
            "margin-top: 143px;margin-left: 664px;width: 47px;",
            "margin-top: 143px;margin-left: 710px;width: 47px;",
            "margin-top: 191px; margin-left: 2px; width: 58px;",
            "margin-top: 191px; margin-left: 59px; width: 58px;",
            "margin-top: 191px; margin-left: 120px; width: 58px;",
            "margin-top: 191px; margin-left: 179px; width: 293px;",
            "margin-top: 191px;margin-left: 475px;width: 47px;",
            "margin-top: 191px;margin-left: 523px;width: 47px;",
            "margin-top: 191px;margin-left: 570px;width: 47px;",
            "margin-top: 191px;margin-left: 617px;width: 47px;",
            "margin-top: 191px;margin-left: 665px;width: 47px;",
            "margin-top: 191px;margin-left: 710px;width: 47px;",
            ],
            keyMapping: ["Escape", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Pause", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "PageUp", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight", "ArrowUp", "PageDown", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "Custom_Fnkey", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight"],
            cssText: 'position: absolute;height: 100%;width: 100%;pointer-events: none;',
            BGImage: "url(./image/Share/MK68M.png)",
            BGImageKeyerEffects: "url(./image/Share/KB1White.png)",
            qigong_Step1_Range: [0, 15, 30, 43, 57, 67],
            qigong_Step2_Range: [21, 22, 37, 49, 50, 35],
            centerBlockPoint: 36,
            KeyTableArray: [[0, 14], [15, 29], [30, 44], [45, 58], [59, 72], [73, 81]],
            imageMaxWidth: 765,
            imageMaxHeight: 308,
            SelectDeviceBG:"./image/Share/MK68MSelectDeviceBG.jpg",
        },

    }

    constructor() { }
    getAssignTarget(name) {
        //console.log("keyBoardList",this.keyBoardList,this.nowTargetKey);
        return this.keyBoardList[name]
    }
    getTarget() {
        //console.log("keyBoardList",this.keyBoardList,this.nowTargetKey);
        return this.keyBoardList[this.nowTargetKey]
    }



    getTargetDefaultKeyArray() {
        return this.getTarget().keyMapping;
    }
    findKeyMappingIndex(code = "") {
        let targetIndex = this.getTargetDefaultKeyArray().findIndex((x) => x == code)
        if (targetIndex == -1) {
            //console.error('this.nowMacroSelect.m_Identifier', this.nowMacroSelect.m_Identifier);
            alert('findKeyMappingIndex=lost' + code);
            console.log('findKeyMappingIndex', targetIndex);
        }
        else{
            return targetIndex;
        }

    }
    applyStyles(target) {
        //this.getTargetKeyBoradUIcss('RGBKeyBoardUITransparent')
        //console.log("applyStyles", this.getTarget().ItemCss,target);
        this.getTarget().ItemCss.forEach((element, index) => {
            //console.log("applyStyles_element", element);
            if(target[index]){
                target[index].style.cssText += element;
                //console.log("applyStyles_ItemCss", index);
            }
            else{
              console.log("applyStyles_ItemCss.forEach_Err",target[index],index);
            }
        });
        this.getTarget().keyMapping.forEach((element, index) => {
            if(target[index]){
                target[index].setAttribute('keyMapping', element);
                //console.log("applyStyles_keyMapping", index);
            }
            else{
              console.log("applyStyles_keyMapping.forEach_Err","color:red",target[index],index);
            }
            //element.setAttribute('keyMapping', index);

        });
        // for (const [key, value] of Object.entries(this.getTarget().ItemCss)) {
        //     //element.style.width = '100px'
        //     //if(key!=="target" &&key!=="cssText"){
        //     target[key].style.cssText += value
        //     //target[key].style.width = value;
        //     //console.log(key, value);
        //     //}
        // }
    }
}
