export function checkName(name){
    let errors = []
    if(name.length === 0){
        errors.push("Name required")
    }

    if(!name.match(/^[a-z ,.'-]+$/i) && name.length !== 0){
        errors.push("enter a valid name")
    }
    return errors
}

export function checkEmail(email){
    let errors = []
    if(email.length === 0){
        errors.push("Email required")
    }

    if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) && email.length !== 0){
        errors.push("enter a valid email")
    }
    return errors
}

export function checkPhone(phone){
    let errors = []
    if(phone.length === 0){
        errors.push("Phone number required")
    }

    if(!phone.match(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/) && phone.length !== 0){
        errors.push("enter a valid Phone number")
    }
    return errors
}
export function checkCompany(company){
    let errors = []
    if(company.length === 0){
        errors.push("Company required")
    }
    return errors
}