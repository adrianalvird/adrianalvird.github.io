// Simple key=value usage
let user = "admin";
let password = "12345";
let token = "abcdef123456";
let redirect = "/dashboard";
let callback_url = "https://example.com/callback";
let lang = "en";
let theme = "dark";

// Deeply nested
const config = {
    auth: {
        client_id: "cli-xyz-456",
        client_secret: "shhh-secret",
        grant_type: "authorization_code"
    },
    settings: {
        mode: "production",
        retry: 3,
        features: {
            logging: true,
            beta: false
        }
    }
};

// Parameters as JSON string
const jsonPayload = '{"userid":"u123","sessionid":"s456","action":"login"}';

// Base64
let encodedData = "dXNlcj1hZG1pbiZwYXNzd29yZD0xMjM="; // user=admin&password=123

// Hex
let hexValue = "68656c6c6f3d776f726c64"; // hello=world

// Encoded characters
let weirdParam = "param%20with%20space=value%26with%26encoded";

// Minified style
var a="x",b="y",c="z",d="123",e="true",f="undefined";

// Array of objects
const users = [
    { name: "alice", role: "admin", id: "1" },
    { name: "bob", role: "editor", id: "2" },
    { name: "charlie", role: "viewer", id: "3" }
];

// Function args as parameters
function trackEvent(event, userId, sessionId) {
    console.log("Tracking", event, userId, sessionId);
}
trackEvent("page_load", "u001", "s001");

// Random key usage
let zxc = {
    fooBar: "something",
    bazQux: "anotherThing",
    clickID: "123abc",
    utm_source: "google",
    utm_medium: "cpc",
    utm_campaign: "summer_sale"
};

// URLs inside strings
const imgUrl = "https://example.com/image.jpg?size=large&quality=90";
const apiCall = "https://api.example.com/v1/getData?user=xyz&apikey=abcd";

// Window.location hacks
window.location.href = "/login?next=/dashboard&msg=expired";

// Data attributes
<div data-userid="1234" data-session="abcd" data-lang="fr"></div>

// Set localStorage
localStorage.setItem("session", "token=abc123;expires=2025");

// Form simulation
let formData = {
    "username": "guest",
    "email": "guest@example.com",
    "phone": "1234567890",
    "subscribe": "true"
};

// Random embedded strings
const fake1 = "debug=1&verbose=true";
const fake2 = "?auth_token=qwerty123&refresh=1";
const fake3 = "next=https://redirect.com/home&source=twitter";

// Headers inside string
const headers = {
    "Authorization": "Bearer abcdef123456",
    "X-CSRF-Token": "token-98765"
};

// Complex nesting
const meta = {
    page: {
        title: "Home",
        id: "home123",
        data: {
            experiment: {
                group: "B",
                variation: "new-header"
            }
        }
    }
};

// Dynamic assignment
let dynamicKey = "feature_flag";
let configObj = {};
configObj[dynamicKey] = true;

// URLSearchParams style
let params = new URLSearchParams({
    client_id: "cid-0001",
    redirect_uri: "https://mysite.com/callback",
    response_type: "code"
});
