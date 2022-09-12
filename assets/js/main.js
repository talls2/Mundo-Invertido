import app from './firebase/app.js' 
import {SubscribeToHellFireClub} from './firebase/hellfire-clube.js'

console.log(app)
const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    const subscriptionId = await SubscribeToHellFireClub(subscription);
    console.log(`Inscrito com sucesso: ${subscriptionId}`)

    alert(`Inscrito com sucesso: ${subscription.name}`)

    txtName.value = '',
    txtEmail.value = '',
    txtLevel.value = '',
    txtCharacter.value = ''
    
})

