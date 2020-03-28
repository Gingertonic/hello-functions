exports.handler = function(event, context, callback){
    allEvents = const allEvents = [ { header: 'This One' }, { header: 'That One' }, { header: 'Tai Chi in the Park' }]
    
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(allEvents)
    })
}