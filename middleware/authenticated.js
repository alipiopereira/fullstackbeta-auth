const authenticated = ({ $auth, redirect }) => {
    let loggedIn = $auth.loggedIn
    if (loggedIn) {
    } else {
        redirect('/login')
    }
}

export default authenticated