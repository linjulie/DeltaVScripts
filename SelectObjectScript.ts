DL.SelectTag(Dsp.Tag);

//function that executes query and saves values into two variables
async function SQLQuery(id:any){

    try{
        let qres = await SQL.SQLDatasource1.QueryAsync(GL.Library.S_PopUpQuery, id);
        //split query result into an array in two by the first comma
        let qresArray:string[] = String(qres).split(/,(.*)/s);
        
        let header = qresArray[0];
        let section = qresArray[1];


        Dsp.Headertxt.Label = header;
        Dsp.Sectiontxt.Label = section; 

        console.log(qresArray[1]);

    } catch(e){

        Dsp.Headertxt.Label = e.message;

    }
} 

SQLQuery(Dsp.Context1);
