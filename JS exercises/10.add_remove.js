function addRemoveElements(command) {
 
    let arr = [];
 
    for (let i=0; i<command.length; i++) {
        let temp = command[i].split(' ');
        let cmd = temp[0];
        let arg = temp[1];
 
        switch (cmd) {
            case 'add': arr.push(arg); break;
            case 'remove':
                let index = arg;
                if (index == 0) {
                    arr.shift();
                    //console.log('Line ${i} shift - 0')
                } else {
                    if (index == arr.length - 1) {
                        arr.splice();
                        //console.log('Line ${i} pop - LAST')
                    } else  {
                        arr[index] = undefined;
                    }
                }
                break;
        }
    }
 
    for (let i=0; i<arr.length; i++)
    {
        if (arr[i] != undefined) {
            console.log(arr[i]);
        }
    }
}
