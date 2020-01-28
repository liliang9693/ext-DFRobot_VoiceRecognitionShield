
//% color="#AA278D" iconWidth=50 iconHeight=40
namespace DFRobot_DFR0177_VoiceRecognitionShield {
    //% block="Voice Init" blockType="command"
    export function voiceInit(){
        Generator.addInclude("voiceInclude","#include <VoiceRecognition.h>");
        Generator.addObject("voiceObject","VoiceRecognition","DFR0177_Voice;");
        Generator.addSetup("voiceInit","DFR0177_Voice.init();");
        
    }

    //% block="Voice Start" blockType="command"
    export function voiceStart(){
        Generator.addSetup("voiceStart","DFR0177_Voice.start();");
        
    }
    //% block="Voice add Command [CMD][NUM]" blockType="command"
    //% CMD.shadow="String" CMD.defl="ni hao"
    //% NUM.shadow="range" NUM.params.min=0    NUM.params.max=49  NUM.defl="0"
    export function voiceAddCommand(parameter:any){
        let cmd=parameter.CMD.code;
        let num=parameter.NUM.code;
        Generator.addSetup("voiceAddCommand",`DFR0177_Voice.addCommand(${cmd},${num});`);
        
    }
    //% block="Voice read" blockType="reporter"
    export function voiceRead(){
        Generator.addCode("DFR0177_Voice.read()");
        
    }
   
}
