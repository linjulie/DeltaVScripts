// faceplate automated code
Dsp.IsAutoTagDeselectionEnabled = false;
GL.Library.F_SetHistoryTag(Dsp.Tag);

//function that executes query and saves values into two variables
async function SQLQuery(PopUp: any){
    let result;

    try{
        let qres = await SQL.SQLDatasource1.QueryAsync(GL.Library.S_PopUpQuery, PopUp);
        let qresArray:string[] = String(qres).split(",");
     
        let header = qresArray[0];
        let section = qresArray[1];

        console.log(qresArray[1]);

        Dsp.HeaderTxt.Label = header;
        Dsp.SectionTxt.Label = section; 
       // Dsp.testTxt.Label = qres;

    } catch(e){
        result = e.message;

        Dsp.HeaderTxt.Label = result;

    }
} 

SQLQuery(88);

