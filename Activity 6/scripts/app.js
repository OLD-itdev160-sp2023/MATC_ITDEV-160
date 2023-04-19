console.log("app.js loaded");

//Array to store messages
let messages = [];

let messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
}

//Message Constructor
function Message(type, user, message)
{
    this.type = type;
    this.user = user;
    this.message = message;
}

//Function to create and return message element for supplied message
function CreateMessageElement(message)
{
    let messageText = document.createTextNode(
        `${message.user}: ${message.message}`
    );

    let messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    messageEl.className = message.type;

    return messageEl;
}

//Button click event-handler to add a new message
function AddMessageHandler(event)
{
    let user, type;
    let messageInput = document.getElementById('message-input');
    let messageContainerEl = document.getElementById('message-container');

    //Determine message type and act acordingly
    switch(event.target.id)
    {
        case 'send-button':
            user = 'You';
            type = messageType.out;
            break;
        
        case 'reply-button':
            user = 'Bob';
            type = messageType.in;
            break;
        
        default:
            user = 'unkown';
            type = messageType.unknown;
            break;
    }

    //Crreate a new message
    if(messageInput.value != '')
    {
        //Construct a message and add it to the array
        let message = new Message(type, user, messageInput.value);
        messages.push(message);

        //Create a message element
        let m_El = CreateMessageElement(message);

        //Add message element to DOM
        messageContainerEl.appendChild(m_El);

        //Reset input
        messageInput.value = '';
    }
}

let Init = function()
{
    //Wire event handlers
    document.getElementById('send-button').onclick = AddMessageHandler;
    document.getElementById('reply-button').onclick = AddMessageHandler;
}

Init();