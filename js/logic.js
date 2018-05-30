var data = {
    messages: []
};

new Vue({
    el: '#chat',
    data: data
});

//document.getElementById('send').addEventListener('click', function (e) {
//    var say = document.getElementById('say')
//    send(say.value);
//    say.value = '';
//});

function SigV4Utils(){}

SigV4Utils.sign = function(key, msg) {
    var hash = CryptoJS.HmacSHA256(msg, key);
    return hash.toString(CryptoJS.enc.Hex);
};

SigV4Utils.sha256 = function(msg) {
    var hash = CryptoJS.SHA256(msg);
    return hash.toString(CryptoJS.enc.Hex);
};

SigV4Utils.getSignatureKey = function(key, dateStamp, regionName, serviceName) {
    var kDate = CryptoJS.HmacSHA256(dateStamp, 'AWS4' + key);
    var kRegion = CryptoJS.HmacSHA256(regionName, kDate);
    var kService = CryptoJS.HmacSHA256(serviceName, kRegion);
    var kSigning = CryptoJS.HmacSHA256('aws4_request', kService);
    return kSigning;
};

function createEndpoint(regionName, awsIotEndpoint, accessKey, secretKey) {
    var time = moment.utc();
    var dateStamp = time.format('YYYYMMDD');
    var amzdate = dateStamp + 'T' + time.format('HHmmss') + 'Z';
    var service = 'iotdevicegateway';
    var region = regionName;
    var secretKey = secretKey;
    var accessKey = accessKey;
    var algorithm = 'AWS4-HMAC-SHA256';
    var method = 'GET';
    var canonicalUri = '/mqtt';
    var host = awsIotEndpoint;

    var credentialScope = dateStamp + '/' + region + '/' + service + '/' + 'aws4_request';
    var canonicalQuerystring = 'X-Amz-Algorithm=AWS4-HMAC-SHA256';
    canonicalQuerystring += '&X-Amz-Credential=' + encodeURIComponent(accessKey + '/' + credentialScope);
    canonicalQuerystring += '&X-Amz-Date=' + amzdate;
    canonicalQuerystring += '&X-Amz-SignedHeaders=host';

    var canonicalHeaders = 'host:' + host + '\n';
    var payloadHash = SigV4Utils.sha256('');
    var canonicalRequest = method + '\n' + canonicalUri + '\n' + canonicalQuerystring + '\n' + canonicalHeaders + '\nhost\n' + payloadHash;

    var stringToSign = algorithm + '\n' +  amzdate + '\n' +  credentialScope + '\n' +  SigV4Utils.sha256(canonicalRequest);
    var signingKey = SigV4Utils.getSignatureKey(secretKey, dateStamp, region, service);
    var signature = SigV4Utils.sign(signingKey, stringToSign);

    canonicalQuerystring += '&X-Amz-Signature=' + signature;
    connectionString = 'wss://' + host + canonicalUri + '?' + canonicalQuerystring;
    console.log(connectionString);
    return connectionString;
}

var endpoint = createEndpoint(
    'us-east-1', // Your Region
    'a1y7d41s0oj85v.iot.us-east-1.amazonaws.com', // Require 'lowercamelcase'!!
    // 'A315Z3LPHJMASX.iot.eu-west-1.amazonaws.com', // Require 'lowercamelcase'!!
    'AKIAIVBVKDOAE3AASRHA',
    'Z46irEIjQf4JUF8fqH3n0mhiDGgbqI+LdyFYq6Hk');
var clientId = Math.random().toString(36).substring(7);
var client = new Paho.MQTT.Client(endpoint, clientId);
var connectOptions = {
    useSSL: true,
    timeout: 3,
    mqttVersion: 4,
    onSuccess: subscribe
};
client.connect(connectOptions);
client.onMessageArrived = onMessage;
client.onConnectionLost = function(e) { console.log(e) };

function subscribe() {
    //Freddie Helena
    //Old movement Camera(audio alarm, movement direction)
    client.subscribe("iotap-lab/computer_1/camera/axis_old_camera");

    //Sensmitter (humidity, light level, pressure, temperature)
    client.subscribe("iotap_lab/phone_1/sensmitter/sensmitter_1");
    client.subscribe("iotap_lab/phone_1/sensmitter/sensmitter_2");
    client.subscribe("iotap_lab/phone_1/sensmitter/sensmitter_3");

    //Peter
    //Phone (movement, sound level)
    client.subscribe("iotap_lab/phone_1/phone/phone_1");

    //Roof Mounted Camera (In/Out)
    client.subscribe("iotap_lab/raspberry_pi_1/camera/cameraaccc8e7e6e9f");

    //Eye Contact Camera (detected faces, eye contacts, looking towards camera)
    client.subscribe("iotap_lab/computer_1/camera/eye_contact_1");

    //Filip max
    //Arduino Due (audio alarm, distance, humidity, x level light, movement, sond level, temerature)
    client.subscribe("iotap_lab/raspberry_pi_1/multisensor/arduino_due_1");

    //Philips hue (power state, brightness, hue, saturation)
    client.subscribe("iotap_lab/arduino_1/colored_light/hue_1");

    //Motorized (blinds state)
    client.subscribe("iotap_lab/arduino_2/motorized_blinds/blinds_1");

    //Divs
    //person count(count,  pred accuracy) 
    client.subscribe("iotap-lab/divs/person_count");
    //lab state(silent, convo/meeting, gathering)
    client.subscribe("iotap_lab/divs/lab_state");

    //Combine for the divs?
    client.subscribe("iotap_lab/phone_1/phone/phone_1/user_feedback");
    client.subscribe("iotap_lab/phone_1/phone/phone_1/user_feedback");

    //client.subscribe("IoTaP-lab/Linuxcomputer/Arduino/multiple");
    console.log("subscribed");
}

function send(content) {
    var message = new Paho.MQTT.Message(content);
    message.destinationName = "Test/chat";
    client.send(message);
    console.log("sent");
}

function onMessage(message) {
    data.messages.push(message.payloadString);
    //console.log("message received: " + message.payloadString);

    OrderData(message)
}

function OrderData(message)
{
    var result = JSON.parse(message.payloadString);
    
    //From sortData
    CallFunction(result.uid, result);
}