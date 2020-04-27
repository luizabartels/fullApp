if(process.env.NODE_ENV == "production")
{
    module.exports = {mongoURI: "mongodb+srv://blogappuser:Cb25032013@luizacluster-fv806.mongodb.net/test?retryWrites=true&w=majority"}
}else{
    module.exports = {mongoURI: 'mongodb://localhost/blogApp'}
}

