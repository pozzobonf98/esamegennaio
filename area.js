const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const areaRoutes = express.Router(); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
	res.send('Hello! The application is running');
});


app.get('/getArea', (req,res) =>{
    const height= parseInt(req.query.side1)
    const base = parseInt(req.query.side2)
    var values = createRectangle(height, base)
    var result = getArea(values)
    res.json({result: result})
})

function createRectangle(height, base){
        var dates = new Array()
        dates[0]= height
        dates[1]= base
        return dates
}



function getArea(values){
    if(values[0]==0 && values[1]==0 || values[0]>0 && values[1]>0){
        var area= values[0]*values[1]
        return area
    }else{
        return -1
    }   
}

module.exports = app