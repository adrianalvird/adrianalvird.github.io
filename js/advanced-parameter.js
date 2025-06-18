// test.js — Advanced Parameter Embedding Test for `miner`

// ✅ Simple key-value pairs
let username = "admin";
let password = "pass123";
let apiKey = "API-123-XYZ";

// ✅ Nested objects
const settings = {
  auth: {
    token: "abcdefg12345",
    refreshToken: "r12345",
  },
  preferences: {
    theme: "dark",
    language: "en"
  }
};

// ✅ Array of objects
const users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "user" }
];

// ✅ JSON string with parameters
const payload = '{"userid":"u001","session":"s001","debug":"true"}';

// ✅ URL with query parameters
const redirectUrl = "https://example.com/login?user=guest&next=/dashboard";

// ✅ Base64 encoded string
const base64Data = "dXNlcj1yb290JnBhc3M9MTIzNA=="; // user=root&pass=1234

// ✅ Hex encoded string
const hexPayload = "757365723d61646d696e"; // user=admin

// ✅ Encoded URI component
const encodedParam = "email%40example.com%3Fsubject%3Dtest";

// ✅ Function args as params
function logEvent(eventName, userId, token) {
  console.log(eventName, userId, token);
}
logEvent("click", "u001", "tok_abc123");

// ✅ URLSearchParams object
let params = new URLSearchParams({
  client_id: "cid001",
  redirect_uri: "https://mysite.com/callback",
  response_type: "code"
});

// ✅ Dynamic key access
let keyName = "secret";
let data = {};
data[keyName] = "value123";

// ✅ Eval usage
let code = 'var evalKey = "evalValue"';
eval(code);

// ✅ Obfuscated/minified vars
var a="id",b="val",c={};c[a]=b;

// ✅ Regex-extracted value
let queryStr = "token=abc123&mode=debug";
let match = queryStr.match(/token=(\w+)/);
if (match) {
  let extractedToken = match[1];
}

// ✅ Deep nesting via loop
let deepObj = {};
let path = ["one", "two", "three", "token"];
let temp = deepObj;
for (let i = 0; i < path.length - 1; i++) {
  temp[path[i]] = {};
  temp = temp[path[i]];
}
temp[path[path.length - 1]] = "deep_token_val";

// ✅ Hashed (pretend) value
let hash = "5f4dcc3b5aa765d61d8327deb882cf99"; // md5('password')

// ✅ Embedded config in global/window
window.__CONFIG__ = {
  session: "xyz789",
  locale: "en-US",
  featureFlag: true
};

// ✅ Framework-style
const ReactComponent = (props) => {
  const userID = props.userID || "defaultUser";
  return `<div data-id="${userID}"></div>`;
};

// ✅ Template string
let apiUrl = `https://api.com/data?key=${apiKey}&user=${username}`;

// ✅ Multiple encoding layers
let deepEncoded = btoa(JSON.stringify({ key: "secret", val: "hidden" }));

// ✅ localStorage and cookies
localStorage.setItem("sessionID", "sess-5555");
document.cookie = "uid=12345; path=/;";

// ✅ Spread usage
let common = { user: "guest" };
let config = { ...common, debug: true };

// ✅ DOM mutation
const el = document.createElement("div");
el.setAttribute("data-token", "tok123");
document.body.appendChild(el);

// ✅ Nested API usage
const client = {
  getConfig: function () {
    return {
      user: {
        id: "u567",
        access: {
          level: "admin",
          token: "nestedToken987"
        }
      }
    };
  }
};
let userConfig = client.getConfig().user.access.token;

// ✅ Inline comments with param-looking values
// config: user_id=dev42, env=prod

// ✅ Chained function return values
function getUser() {
  return {
    profile: function () {
      return {
        id: "profile123",
        key: "chainKey"
      };
    }
  };
}
let chained = getUser().profile().key;

// ✅ Spread across files (simulated)
importedParams = {
  key1: "value1",
  key2: "value2"
};
