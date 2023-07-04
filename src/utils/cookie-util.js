import Cookies from 'js-cookie';

// Cookie utility object
const CookieUtil = {
  // Set a cookie with the given name, value, and options
  setCookie: function (name, value, options) {
    Cookies.set(name, value, options);
  },

  // Get the value of a cookie with the given name
  getCookie: function (name) {
    return Cookies.get(name);
  },

  // Check if a cookie with the given name exists
  hasCookie: function (name) {
    return Cookies.get(name) !== undefined;
  },

  // Remove a cookie with the given name
  removeCookie: function (name) {
    Cookies.remove(name);
  },
};

export default CookieUtil;
