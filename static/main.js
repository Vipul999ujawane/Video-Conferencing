var peer = new Peer({
    path: '/peerjs',
    host: '0.0.0.0',
    port: 80
});

   function Call(call) {
        call.on('stream', function (remoteStream) {
            console.log('set thier');
            //$('#call').hide();
            //$('#oppvideo').show();
            $('#oppvideo').prop('src', URL.createObjectURL(remoteStream));
            console.log('yolo');
        });
    }


peer.on('open', function(id){
  console.log('My peer ID is: ' + id);
    $('#uid').text(id);
          ;});



var constraints = {audio: true,  video: true};
navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
                window.localStream = stream;
                $('#mevideo').prop('src', URL.createObjectURL(stream));
                peer.on('call', function (call) {
                    call.answer(stream); // Answer the call with an A/V stream.
                    Call(call);
                });});

                function myFunction2() {
                var x = document.getElementById("myText2").value;
                to=x;

                var call=peer.call(to,window.localStream);
                Call(call);
                }
