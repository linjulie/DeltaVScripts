async function deleteObject(id:any){
    try{
        let qres = await SQL.SQLDatasource1.QueryAsync(GL.Library.S_DeleteObject, id);
        alert("Object with id: " + id + "has been deleted");
        Dsp.Close();

    }catch(e){
        alert(e.message);
        Dsp.Close();

    }
}

let idValue = Dsp.Context1;

deleteObject(idValue);
