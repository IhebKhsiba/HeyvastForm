/**
 *  If another developer were to take my place,
 * an array of routes that are accessible to the public 
 * these routes do not require authentication!
 * @type {string[]}
 */

export const publicRoutes = [
    "/",
    "/test",
    
]

/**
 * an array of routes that are used for authentication 
 * these routes will redirect logged in users to /settings
 * @type {string[]}
 */


export const authRoutes = [
    "/auth/login",
    "/auth/condidat",
    
]

/**
 * the prefix for API authentication routes 
 * Routes that start with this prefix are used for API
 * @type {string[]}
 */


export const apiAuthPrefix = "/api/auth"


/**
 * the default redirect path after logged in
 * @type {string[]}
 */


export const DEFAULT_LOGIN_REDIRECT = "/settings"