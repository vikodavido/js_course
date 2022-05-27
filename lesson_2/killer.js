function killer(suspectInfo, dead) {
    let killer;
        for(key in suspectInfo) {
            suspectInfo[key].map(item => item == dead[0] || item == dead[1] ? killer = key : '')
            if(killer) break
        }
    return killer
}