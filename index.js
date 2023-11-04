export const apiDomain="http://3.88.199.8/api/"

export const apiRoutes = {
    login: apiDomain+"auth/login",//admin users login
    otpveryfy: apiDomain+"auth/otpveryfi",
    costomer_login: apiDomain+"auth/costomer/login",
    product: apiDomain+"product",
    costomer: apiDomain+"costomer",// for costomer crud opration
    costomerreq: apiDomain+"costomerreq", //for costomer register
    costomer_requst: apiDomain+"costomer/aproved/{id}", // for requist approval
    costomer_status: apiDomain+"costomer/status/{id}", //for costomer status change
    costomer_password_reset: apiDomain+"costomer/password/{id}"
}
