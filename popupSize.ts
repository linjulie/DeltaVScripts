//finds the amount of caracters in the section of a popup
async function popupSize(){
    let sqlArr:string[] = String(qres).split(",");

    let section:string = sqlArr[1];

    Dsp.sectionsize.Label = String(section.length);
}
