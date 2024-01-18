
let browserInstance = []
let counter = 0
onconnect = (e) => {
    const port = e.ports[0];
    browserInstance.push(port)
    // console.log('--on connect method of the worker js--', port)
    // console.log('--worker js onmessage outside clicked--: ')
    
    port.onmessage = ({data}) => {
        // debugger
        console.log('---inside the worker js file onmessage---', data)
        // switch(data.mutation) {
        //     case 'RESTART':
        //         // resetIdleTimeout(false)
        //         console.log('---restart called--')
        //         break
        //     default:
        //         console.log('---restart called--')
        //         // resetIdleTimeout(false)
        // }
        counter++;
        browserInstance.map(instance => {
            instance.postMessage(`my counter is ${counter}`)
        })
        // port.postMessage(`my counter is ${counter}`)
       
    };
};

// const resetIdleTimeout = (isCallPostMessage = true) => {
//     // console.log('---inside the reset idle timerout func')
//     if (isCallPostMessage) {
//         // console.log('--post message called from the reset idle timer func--')
//         postMessage('RESTART', idleDurationSec)
//     }
//     let idleDurationVar = idleDurationSec
//     if (idleTimeout) {
//         clearInterval(idleTimeout)
//     }
//     idleTimeout = setInterval(() => {
//         let min = Math.floor(idleDurationVar / 60)
//         let sec = idleDurationVar % 60
//         document.querySelector('#result').innerHTML = `${min < 10 ? '0': ''}${min} : ${sec < 10 ? '0': ''}${sec}`
//         if (--idleDurationVar < 0) {
//             alert('--session timeout--')
//             clearInterval(idleTimeout)
//         }
//     }, 1000)
// }

// function postMessage(mutation, value) {
//     console.log('---inside the post message fun or worker js file')
//     browserInstance.map(instance => {
//         instance.postMessage({mutation, value})
//     })
// }