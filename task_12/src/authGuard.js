
export const authGuard = (params) => {
    console.log('false login');
    return Promise.resolve({success: false, redirect: "/login"})
}