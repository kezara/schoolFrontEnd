import {URL} from "./Constants.js"

export async function login(username, password) {
    try {
        let url = `${URL}/token`
        let tockenPromise = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `grant_type=password&username=${username}&password=${password}`
        })
        let token = await tockenPromise.json();
        let accessData = {
            user: token}
            //token: token.access_token,
            //role: token.role};
        if (accessData) {
            alert(accessData)
            return accessData
        }
        else {
            return "";
        }
    } catch (error) {
        alert("ERROR!!!")
    }

}

export async function fetchProfile(role, userID, token) {
    try {
        let url = `${URL}/api/${role}/${userID}`
        let profilePromise = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
    
        }})
        let userProfile = await profilePromise.json();
        let profile = {
            profile: userProfile}
        if (profile) {
            alert(profile)
            return profile
        }
        else {
            return "";
        }
    } catch (error) {
        alert("ERROR PROFILE!!!")
    }

}


