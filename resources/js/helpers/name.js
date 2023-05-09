export function generateFullName(firstName, middleName, lastName = '') {
    return firstName + ' ' + middleName + (lastName ? ' ' + lastName : '')
}
