process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        //            process.stdout.write(input);
        var instruction = input.toString().trim();
        switch (instruction) {
            case 'node version':
                process.stdout.write(process.versions.node);
                break;
            case 'operating system':
                process.stdout.write(process.env.OS);
                break;
            case 'computer name':
                process.stdout.write(process.env.COMPUTERNAME);
                break;
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }
    }
})
