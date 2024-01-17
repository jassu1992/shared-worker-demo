
let browserInstance = []

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
        //         console.log('--inside the worker js switch ADD --', data)
        //         postMessage({ mutation: 'RESTART', value: data.value });
        //         break
        //     default:
        //         console.log('---inside the default switch case of worker js--')
        // }
        // port.postMessage(data)
       
    };
};

function postMessage(data) {
    console.log('---inside the post message fun or worker js file')
    browserInstance.map(instance => {
        instance.postMessage({data})
    })
}