exports.handler = function(event, context, callback){
    const theMessage = event.body
    console.log(event.body)
    const angryMessage = theMessage.toUppercase() 

    callback(null, {
        statusCode: 200,
        body: JSON.stringify(angryMessage)
    })
}