const express = require('express');

const squaresRoutes = express.Router(); 
var side1
var side2

squaresRoutes.route('/getArea?side1='+side1+'&side2='+side2)
.get(function (req, res) {
    values=createRectangle(side1, side2)
    resulte=getArea(values)
    res.status(200)
    res.json({result:result})
})

module.exports = squaresRoutes;

function createRectangle(height, base){
        var dates = new Array()
        dates[0]= height
        dates[1]= base
        return dates()
}



function getArea(values){
    if(values[0]==null && values[1]==null || values[0]>0 && values[1]>0){
        var area= values[0]*values[1]
        return area
    }else{
        return -1
    }   
    
}