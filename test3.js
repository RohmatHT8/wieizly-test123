const s = '12:05:45PM'

const secondToTime = (seconds) => {
    let hh = Math.floor(seconds / 3600)
    let mm = Math.floor((seconds - (hh * 3600)) / 60)
    let ss = (seconds - (hh * 3600) - (mm * 60))

    hh = String(hh).length < 2 ? '0' + hh : hh
    mm = String(mm).length < 2 ? '0' + mm : mm
    ss = String(ss).length < 2 ? '0' + ss : ss

    console.log(hh + ':' + mm + ':' + ss)
} 

const timeConversion = (s) => {
    let format = s[8] + s[9]
    let time = s.replace(format,'')
    var seconds = new Date('1970-01-01T' + time + 'Z').getTime() / 1000;
    
    if(format === 'AM') {
        if(Math.floor(seconds / 3600) === 12) {
            seconds -= 43200
        }
    }else {
        if(Math.floor(seconds / 3600) !== 12) {
            seconds += 43200
        }
    }
    
    secondToTime(seconds)

}

timeConversion(s)