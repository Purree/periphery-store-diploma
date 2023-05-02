import RolesEnum from '@/helpers/enums/RolesEnum'

export function isUserHasRole(user, role) {
    return getUserRoles(user).includes(role) || isUserAdministrator(user)
}

export function isUserHasPermission(user, permission) {
    return getUserPermissions(user).includes(permission) || isUserAdministrator(user)
}

export function isUserHasRoles(user, ...roles) {
    return roles.every(function(role) {
        return isUserHasRole(user, role)
    })
}

export function isUserHasPermissions(user, ...permissions) {
    return permissions.every(function(permission) {
        return isUserHasPermission(user, permission)
    })
}

export function isUserHasAnyPermission(user, ...permissions) {
    return permissions.some(function(permission) {
        return isUserHasPermission(user, permission)
    })
}

export function isUserAdministrator(user) {
    return getUserRoles(user).includes(RolesEnum.admin)
}

export function getUserRoles(user) {
    try {
        return Object.values(user.roles)
    } catch (e) {
        console.log(e)
        return []
    }
}

export function getUserPermissions(user) {
    try {
        return Object.values(user.permissions)
    } catch (e) {
        console.log(e)
        return []
    }
}
