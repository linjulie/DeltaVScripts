async function insertObject(header:any, section:any){
    try{
        if(String(header).length == 0 || String(section).length == 0){
            alert("header and/or section is empty")
        }else{
            let qres = await SQL.SQLDatasource1.QueryAsync(GL.Library.S_InsertPopUp, header, section);
            alert("Object addd to database");
        }

    }catch(err){
        alert(err.message);
    }
}
 let headerV = Dsp.INSRT_VALUE_GEM1.Header;
 let sectionV = Dsp.INSRT_VALUE_GEM1.Section;

insertObject(headerV, sectionV);
