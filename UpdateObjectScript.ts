async function returnPopUpArryy(id:any){
    let qres = await SQL.SQLDatasource1.QueryAsync(GL.Library.S_PopUpQuery, id);
    let qresArry:string[] = String(qres).split(",");
    return qresArry;
 
}

async function updateObject(id:any, header:any, section:any){
    let popUpBefore = await returnPopUpArryy(id);
    let headerBefore = popUpBefore[0];
    let sectionBefore = popUpBefore[1];

    try{
        if(header == headerBefore && section == sectionBefore){
            alert("nothing new has changed")
        }else{
            let qres = SQL.SQLDatasource1.QueryAsync(GL.Library.S_UpdatePopUp, header, section, id);
            alert("Object with id:" + id + " has been updated");
            console.log("hellu")
        }
        
    }catch(e){
        alert(e.message);
    }
}

let idValue = Dsp.UPDATE_VALUE_GEM1.ID;
let headerValue = Dsp.UPDATE_VALUE_GEM1.Header;
let sectionValue = Dsp.UPDATE_VALUE_GEM1.Section;

updateObject(idValue, headerValue, sectionValue);
