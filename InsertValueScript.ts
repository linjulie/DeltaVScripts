// wait function 
function wait(ms:any){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms){
        end = new Date().getTime();
    }
}

function clearTxt(header:any, section:any){
    if(String(header).length != 0 && String(section).length != 0){
        //clear text
        header = "";
        section = "";
    } else{
        //do nothing
    }
}

//function that inserts header and section input into database
async function insertObject(header:any, section:any){
    try{
        if(String(header).length == 0 || String(section).length == 0){
            alert("header and/or section is empty")
        }else{
            let qres = await SQL.SQLDatasource1.QueryAsync(GL.Library.S_InsertPopUp, header, section);
            alert("Object added to database");

            console.log("before");
            wait(5000); // waits five seconds before clearing text entries
            console.log("after");
            clearTxt(header, section); //clears text entries
        }

    }catch(err){
        alert(err.message);
    }
}

 let headerV = Dsp.INSRT_VALUE_GEM1.Header;
 let sectionV = Dsp.INSRT_VALUE_GEM1.Section;

insertObject(headerV, sectionV);
