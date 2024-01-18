let browserInstance = []
onconnect = (e) => {
    const port = e.ports[0];
    browserInstance.push(port)
    // console.log('--on connect method of the worker js--', port)    
    port.onmessage = ({data}) => {
        // debugger
        // console.log('---inside the worker js file onmessage---', data)
        switch(data.mutation) {
            case 'RESTART':
                postMessage(data)
                break
            default:
                postMessage({mutation: 'STOP', value: 1})
        }
       
    };
};

function postMessage({mutation, value}) {
    // console.log('---inside the post message fun or worker js file')
    browserInstance.map(instance => {
        instance.postMessage({mutation, value})
    })
}