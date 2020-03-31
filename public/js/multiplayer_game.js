
//socket.on('message', function (data) {
  //  console.log(data);
//});

let movement = {
    up: false,
    down: false,
    left: false,
    right: false
}

document.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
        case 65: // A
            movement.left = true;
            break;
        case 87: // W
            movement.up = true;
            break;
        case 68: // D
            movement.right = true;
            break;
        case 83: // S
            movement.down = true;
            break;
    }
});
document.addEventListener('keyup', function (event) {
    switch (event.keyCode) {
        case 65: // A
            movement.left = false;
            break;
        case 87: // W
            movement.up = false;
            break;
        case 68: // D
            movement.right = false;
            break;
        case 83: // S
            movement.down = false;
            break;
    }
});

socket.emit('New player');
setInterval(() => {
    socket.emit('movement', movement);
}, 1000 / 60)

/*
function message() {
    document.getElementById('aForm').submit(function (e) {
        e.preventDefault(); // prevents page reloading
        socket.emit('chat message', document.getElementById('m').val());
        document.getElementById('m').val('');
        return false;
    });
};*/