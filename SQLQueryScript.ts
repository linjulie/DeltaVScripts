Dsp.IsAutoTagDeselectionEnabled = false;
GL.Library.F_SetHistoryTag(Dsp.Tag);

//function taking inn a parameter ...
// th parametr is the popup id...
async function SQLQuery(PopUp: any){
    try{
        let qres = await SQL.SQLDatasource1.QueryAsync(GL.Library.S_PopUpQuery, PopUp);

        let qresArray:string[] = String(qres).split(",");
 

        let header = qresArray[0];
        let section = qresArray[1];

        Dsp.HeaderTxt.Label = header;
        Dsp.SectionTxt.Label = section; 

    } catch(e){
        console.log(e.message);
    }
} 

SQLQuery(15);
