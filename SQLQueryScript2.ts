// faceplate automated code
Dsp.IsAutoTagDeselectionEnabled = false;
GL.Library.F_SetHistoryTag(Dsp.Tag);



//function that executes query and saves values into two variables
async function SQLQuery(id:any){
    let result;

    try{
        let qres = await SQL.SQLDatasource1.QueryAsync(GL.Library.S_PopUpQuery, id);
        let qresArray:string[] = String(qres).split(",");
     
        let header = qresArray[0];
        let section = qresArray[1];

        console.log(qresArray[1]);

        Dsp.HeaderTxt.Label = header;
        Dsp.SectionTxt.Label = section; 

    } catch(e){
        result = e.message;

        Dsp.HeaderTxt.Label = result;

    }
} 

//Dsp.Context1 refers to the PopUpId value decided in the display when configurating the open popup GEM
SQLQuery(Dsp.Context1);
