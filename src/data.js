export const API_KEY = 'AIzaSyDJA6Sb-auSj8hiT6shUzKZUpGsU92xw9U'

 export const value_converter=(value)=>{
if(value>=1000000){
    return Math.floor(value/1000000)+"M";
}
else if(value>=1000){
    return Math.floor(value/1000)+"k";
}
else{
    return value;
}
}
