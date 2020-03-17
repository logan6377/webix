var navdata = [
{id:"nav-1", value:"Menu 1"}, {id:"nav-2", value:"Menu 2"}, {id:"nav-parent", value:"Parent", data:[{id:"sub-nav-1", value:"Sub Nav 1"}, {id:"sub-nav-2", value:"Sub Nav 2"}]},
{id:"nav-3", value:"Menu 3"}, ]
var user = ["Menu 2", "Sub Nav 1", "Sub Nav 2", "Menu 3"];
var mapdata = function(navdata, user){
    var endData = [];    
    if(user){
        for(var i=0; i<navdata.length; i++){
            for( var j =0; j<user.length; j++){
                //console.log(user[j], navdata[i])
                if(navdata[i].value == user[j]) {endData.push({id:navdata[i].id, value:navdata[i].value})} 
                else{//console.log(navdata[i]["data"])
                    if(navdata[i]["data"]){
                        //var item = {id:navdata[i].id, value:navdata[i].value, data:[]}
                        //console.log(endData.indexOf({id:navdata[i].id, value:navdata[i].value, data:[]}))
                        //console.log(endData.map(function(e) { return e; }).indexOf({id:navdata[i].id, value:navdata[i].value, data:[]}))
                        endData.push({id:navdata[i].id, value:navdata[i].value, data:[]})
                        for(var k=0; k<navdata[i]["data"].length; k++){
                            console.log(navdata[i]["data"][k].value)
                            if(navdata[i]["data"][k].value == user[i]){
                               // endData[j]
                            }
                        }
                    }
                }
            }
        }
    }

    return endData
}

mapdata(navdata, user)
