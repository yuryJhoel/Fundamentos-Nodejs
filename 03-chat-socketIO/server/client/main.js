const socket = io.connect('http://192.168.0.2:6677',{'forceNew':true}) 
// Para que la conexion se fuerce

socket.on('messages', (data)=>{
    console.log(data)
    render(data)
})

function render(data){
    var html = data.map(function(message, index){
        return(`
            <div class="message">
                <strong>${message.nickname}</strong> dice: 
                <p>${message.text}</p>
            </div>
        `);
    }).join(' ');
    document.querySelector("#messages").innerHTML = html;

}
function addMessage(e){
    var message = {
        nickname:document.querySelector("#nickname").value,
        text:document.querySelector("#text").value
    };
    document.querySelector("#nickname").style.display = "none";
    socket.emit('add-message', message);
    return false;
}