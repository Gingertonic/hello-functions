exports.handler = function(event, context, callback){
    const theMessage = event.body
    console.log(event.body)
    const angryMessage = theMessage.toUpperCase() 

    callback(null, {
        statusCode: 200,
        body: JSON.stringify(angryMessage)
    })
}