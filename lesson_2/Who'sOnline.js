const whosOnline = (friends) => {
    let result = {}
    for (key in friends) {
      if( friends[key].status == 'online' && friends[key].lastActivity <= 10 ) {
        result.online = [ friends[key].username ]
      } else if ( friends[key].status == 'offline' ) {
        result.offline = [ friends[key].username ]
      } else {
        result.away = [ friends[key].username]
      }
    }  
    return result
}