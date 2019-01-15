class Rectangle{
    data = new Array[2]
    static createRectangle(height, base){
        data[0]= height
        data[1]= base
    }

}

static function getArea(values){
    if(values[0]==null && values[1]==null || values[0]>0 && values[1]>0){
        var area= values[0]*values[1]
        return area
    }else{
        return -1
    }   
    
}