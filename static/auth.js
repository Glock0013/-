const registerForm = document.getElementById('registerform')
registerForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    const {login, password, passwordRepeat} = registerForm
    if(password.value !== passwordRepeat.value) return alert('password !== passwordRepeat')

    const user = JSON.stringify({
        login: login.value,
        password: password.value

    })

    const xhr = new XMLHttpRequest()
    xhr.open('POST', '/register')
    xhr.send(user)
    xhr.onload = ()=>alert(xhr.response)
})  