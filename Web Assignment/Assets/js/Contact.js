
const cheersMessage =(e) =>{
    const firstName = document.getElementById('First Name').value
    const lastName = document.getElementById('Last Name').value

    window.alert(`Thank You ${firstName} ${lastName} for your message!`)
}

document.getElementById('Submit-Button').addEventListener('click', cheersMessage)
