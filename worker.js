
let browserInstance = []
let counter = 0

onconnect = (e) => {
    debugger
    const port = e.ports[0];
    browserInstance.push(port)
    console.log('--on connect method of the worker js--', port)
    console.log('--worker js onmessage outside clicked--: ')

    port.onmessage = ({data}) => {
        console.log('---inside the worker js file---', data)
        // switch(data.mutation) {
        //     case mutations.ADD:
        //         console.log('--inside the worker js switch ADD --', data)
        //         port.postMessage({ mutation: 'RESTART', value: data.value });
        //         data.value
        //         break
        //     default:
        //         data.value

        // }
        console.log('--worker js onmessage clicked--: ')
        // postMessage({ ...data })
       
    };
};

function postMessage(data) {
    console.log('---inside the post message fun or worker js file')
    browserInstance.map(instance => {
        instance.postMessage(data)
    })
}