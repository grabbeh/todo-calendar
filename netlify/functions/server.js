"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// app/routes/algolia.tsx
var require_algolia = __commonJS({
  "app/routes/algolia.tsx"() {
    "use strict";
  }
});

// app/routes/search.tsx
var require_search = __commonJS({
  "app/routes/search.tsx"() {
    "use strict";
  }
});

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(server_exports);
var import_remix_adapter = require("@netlify/remix-adapter");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 13,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/app.css
var app_default = "/build/_assets/app-ZOTQKY5G.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), meta = () => [{ title: "Todo app" }];
function links() {
  return [
    {
      rel: "preload",
      as: "font",
      href: "/fonts/inter-v8-latin-500.woff2",
      type: "font/woff2",
      crossOrigin: "anonymous"
    },
    { rel: "stylesheet", href: app_default }
  ];
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 35,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { style: { fontFamily: "Inter" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 48
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 41,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react2.useRouteError)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: "System Error" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 56,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "p-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-xl mx-auto bg-red-50 p-6 rounded-lg border border-red-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-2xl font-bold text-red-800 mb-4", children: (0, import_react2.isRouteErrorResponse)(error) ? `${error.status} ${error.statusText}` : "Application Error" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 63,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-red-700 mb-4", children: (0, import_react2.isRouteErrorResponse)(error) ? error.data : error instanceof Error ? error.message : "An unexpected error occurred." }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 68,
          columnNumber: 6
        }, this),
        error instanceof Error && error.stack && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("pre", { className: "bg-red-100 p-4 rounded text-sm overflow-auto text-red-900", children: error.stack }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 81,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 61,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

// app/routes/create-account.tsx
var create_account_exports = {};
__export(create_account_exports, {
  action: () => action,
  default: () => CreateAccount
});
var import_node2 = require("@remix-run/node"), import_react3 = require("@remix-run/react"), import_react4 = require("react");

// app/db/session.server.tsx
var import_bcryptjs = __toESM(require("bcryptjs"), 1), import_node = require("@remix-run/node");

// app/db/table.server.ts
var import_dynamodb_toolbox = require("dynamodb-toolbox"), import_aws_sdk = __toESM(require("aws-sdk"), 1), _DocumentClient, _ShopTable, _User, _Todo;
try {
  process.env.AWS_KEY && process.env.AWS_SECRET && import_aws_sdk.default.config.update({
    region: "eu-west-1",
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET
  }), _DocumentClient = new import_aws_sdk.default.DynamoDB.DocumentClient(), _ShopTable = new import_dynamodb_toolbox.Table({
    name: "shop",
    partitionKey: "pk",
    sortKey: "sk",
    indexes: {
      GSI1: { partitionKey: "GSI1pk", sortKey: "GSI1sk" }
    },
    DocumentClient: _DocumentClient
  }), _User = new import_dynamodb_toolbox.Entity({
    name: "User",
    attributes: {
      email: { partitionKey: !0, prefix: "USER#" },
      sk: { sortKey: !0, prefix: "USER#" },
      passwordHash: { type: "string" }
    },
    table: _ShopTable
  }), _Todo = new import_dynamodb_toolbox.Entity({
    name: "Todo",
    attributes: {
      user: { partitionKey: !0, prefix: "USER#" },
      sk: { sortKey: !0, prefix: "TODO#" },
      text: { type: "string" },
      status: { type: "string", default: "OUTSTANDING" },
      editable: { type: "string" },
      notes: { type: "string" },
      id: ["sk", 0],
      userName: { type: "string" },
      date: { type: "string" },
      GSI1pk: { type: "string" },
      GSI1sk: { type: "string" }
    },
    table: _ShopTable
  });
} catch (error) {
  console.error("Failed to initialize DynamoDB connection:", error);
}
var ShopTable = new Proxy({}, {
  get(target, prop) {
    if (!_ShopTable)
      throw new Error("DynamoDB ShopTable is not initialized. Check your AWS credentials.");
    return _ShopTable[prop];
  }
}), User = new Proxy({}, {
  get(target, prop) {
    if (!_User)
      throw new Error("DynamoDB User entity is not initialized. Check your AWS credentials.");
    return _User[prop];
  }
}), Todo = new Proxy({}, {
  get(target, prop) {
    if (!_Todo)
      throw new Error("DynamoDB Todo entity is not initialized. Check your AWS credentials.");
    return _Todo[prop];
  }
});

// app/db/index.server.ts
var import_ksuid = __toESM(require("ksuid"), 1), import_lodash = __toESM(require("lodash"), 1), addTodo = async (todo) => {
  let { text, year, month, day, user } = todo, date = new Date(year, month - 1, day), id = (await import_ksuid.default.random()).string;
  return await Todo.put({
    text,
    id,
    user,
    userName: user,
    date,
    GSI1pk: `USER#${user}`,
    GSI1sk: `YEAR${year}#MONTH${month}#DAY${day}#TODO${id}`
  });
}, updateTodo = async (todo) => {
  let { user, id, ...values } = todo, existingTodo = await getTodo(user, id);
  return await Todo.update({
    ...existingTodo,
    ...values,
    user
  });
}, moveToToday = async (todo) => {
  let { user, id, ...values } = todo, today = /* @__PURE__ */ new Date(), day = today.getDate(), month = today.getMonth() + 1, year = today.getFullYear();
  return await Todo.update({
    id,
    ...values,
    date: today,
    GSI1sk: `YEAR${year}#MONTH${month}#DAY${day}#TODO${id}`,
    user
  });
}, moveToDate = async ({ id, year, month, day, user }) => {
  let date = new Date(year, month - 1, day);
  return await Todo.update({
    id,
    date,
    GSI1sk: `YEAR${year}#MONTH${month}#DAY${day}#TODO${id}`,
    user
  });
}, deleteTodo = async (id, user) => Todo.delete({ id, user });
var getTodo = async (user, id) => (await Todo.get({ user, sk: id })).Item, getTodosByDate = async (user, year, month, day) => {
  let date;
  return day ? date = `YEAR${year}#MONTH${month}#DAY${day}#` : date = `YEAR${year}#MONTH${month}#`, (await ShopTable.query(`USER#${user}`, {
    index: "GSI1",
    beginsWith: date
  })).Items;
}, getOutstandingTodosByDate = async (user, year, month, day) => {
  let date = `YEAR${year}#MONTH${month}#DAY${day}#`;
  return (await ShopTable.query(`USER#${user}`, {
    index: "GSI1",
    beginsWith: date
  })).Items.filter((i) => (console.log(i), i.status === "OUTSTANDING"));
};
var addUser = async (user) => {
  let { email, passwordHash } = user;
  return await User.put({
    email,
    sk: email,
    passwordHash
  });
}, fetchUser = async (email) => (await User.get({
  email,
  sk: email
})).Item;

// app/db/session.server.tsx
async function register({ email, password }) {
  if (await fetchUser(email))
    throw new Error("Existing user");
  {
    let passwordHash = await import_bcryptjs.default.hash(password, 10);
    return { email: (await addUser({ email, passwordHash })).email };
  }
}
async function login({ email, password }) {
  let user = await fetchUser(email);
  return !user || !await import_bcryptjs.default.compare(password, user.passwordHash) ? null : { email };
}
var storage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "RJ_session",
    // normally you want this to be `secure: true`
    // but that doesn't work on localhost for Safari
    // https://web.dev/when-to-use-local-https/
    secure: !1,
    secrets: [process.env.SESSION_SECRET || "temporary_secret_for_boot"],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: !0
  }
});
function checkSessionSecret() {
  process.env.SESSION_SECRET || console.warn(
    "SESSION_SECRET environment variable is not set! Using fallback secret."
  );
}
async function getUserSession(request) {
  return checkSessionSecret(), storage.getSession(request.headers.get("Cookie"));
}
async function getUserEmail(request) {
  let email = (await getUserSession(request)).get("email");
  return !email || typeof email != "string" ? null : email;
}
async function requireUserEmail(request, redirectTo = new URL(request.url).pathname) {
  let email = (await getUserSession(request)).get("email");
  if (!email || typeof email != "string") {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node.redirect)(`/login?${searchParams}`);
  }
  return email;
}
async function getUser(request) {
  let email = await getUserEmail(request);
  if (typeof email != "string")
    return null;
  try {
    return await fetchUser(email);
  } catch {
    throw logout(request);
  }
}
async function logout(request) {
  let session = await getUserSession(request);
  return (0, import_node.redirect)("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}
async function createUserSession(email, redirectTo) {
  checkSessionSecret();
  let session = await storage.getSession();
  return session.set("email", email), (0, import_node.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}

// app/routes/create-account.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), action = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), errors = {};
  if (email || (errors.emailError = "Please provide email!"), password || (errors.passwordError = "Please provide password!"), password?.length < 7 && (errors.passwordLength = "Password a bit too short there"), Object.keys(errors).length > 0)
    return (0, import_node2.json)({ errors }, { status: 422 });
  try {
    await register({ email, password }), (0, import_node2.redirect)("/login");
  } catch (e) {
    return console.log(e.message), { serverError: e.message };
  }
  return (0, import_node2.redirect)("/login");
};
function CreateAccount() {
  let fetcher = (0, import_react3.useFetcher)(), navigation = (0, import_react3.useNavigation)(), isAdding = navigation?.state === "submitting" && navigation.formData?.get("_action") === "add", formRef = (0, import_react4.useRef)(), serverFailure = fetcher.data?.serverError;
  return (0, import_react4.useEffect)(() => {
    isAdding || formRef.current?.reset();
  }, [isAdding]), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-center h-screen items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mb-3 font-bold text-2xl", children: "Create account" }, void 0, !1, {
      fileName: "app/routes/create-account.tsx",
      lineNumber: 67,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(fetcher.Form, { ref: formRef, method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "font-bold text-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { children: "Email" }, void 0, !1, {
          fileName: "app/routes/create-account.tsx",
          lineNumber: 71,
          columnNumber: 8
        }, this) }, void 0, !1, {
          fileName: "app/routes/create-account.tsx",
          lineNumber: 70,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "input",
          {
            className: "focus:border-b-2 focus:outline-none focus:border-blue-500 text-lg md:text-2xl appearance-none border-b-2 border-gray-200",
            type: "text",
            name: "email"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/create-account.tsx",
            lineNumber: 73,
            columnNumber: 7
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/create-account.tsx",
        lineNumber: 69,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-3 font-bold text-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { children: "Password" }, void 0, !1, {
          fileName: "app/routes/create-account.tsx",
          lineNumber: 81,
          columnNumber: 8
        }, this) }, void 0, !1, {
          fileName: "app/routes/create-account.tsx",
          lineNumber: 80,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "input",
          {
            className: "focus:border-b-2 focus:outline-none focus:border-blue-500 text-lg md:text-2xl appearance-none border-b-2 border-gray-200",
            type: "password",
            name: "password"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/create-account.tsx",
            lineNumber: 83,
            columnNumber: 7
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/create-account.tsx",
        lineNumber: 79,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-3 flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "button",
        {
          className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
          type: "submit",
          name: "_action",
          value: "add",
          children: "CREATE"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/create-account.tsx",
          lineNumber: 90,
          columnNumber: 7
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/create-account.tsx",
        lineNumber: 89,
        columnNumber: 6
      }, this),
      serverFailure || "",
      fetcher.data?.errors && Object.values(fetcher.data?.errors).map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: item }, void 0, !1, {
        fileName: "app/routes/create-account.tsx",
        lineNumber: 102,
        columnNumber: 8
      }, this))
    ] }, void 0, !0, {
      fileName: "app/routes/create-account.tsx",
      lineNumber: 68,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/create-account.tsx",
    lineNumber: 66,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/create-account.tsx",
    lineNumber: 65,
    columnNumber: 3
  }, this);
}

// server-entry-module:@remix-run/dev/server-build
var route2 = __toESM(require_algolia());

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action2,
  loader: () => loader
});
var import_node3 = require("@remix-run/node");
var action2 = async ({ request }) => logout(request), loader = async () => (0, import_node3.redirect)("/");

// server-entry-module:@remix-run/dev/server-build
var route4 = __toESM(require_search());

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => Index,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node"), import_react5 = require("@remix-run/react");
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => {
  if (await getUserEmail(request)) {
    let now = /* @__PURE__ */ new Date(), year = now.getFullYear(), month = now.getMonth() + 1, day = now.getDate();
    return (0, import_node4.redirect)(
      `/todos/calendar?year=${year}&month=${month}&day=${day}`
    );
  }
  return null;
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-pink-500 text-3xl flex justify-center h-screen pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "font-bold", children: "TODO APP" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 24,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Link, { to: "/login", children: "Login" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 26,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 25,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Link, { to: "/create-account", children: "Register" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 29,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 28,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 23,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 22,
    columnNumber: 3
  }, this);
}
function ErrorBoundary2() {
  let error = (0, import_react5.useRouteError)();
  return (0, import_react5.isRouteErrorResponse)(error) ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: [
      error.status,
      " ",
      error.statusText
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 42,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: error.data }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 45,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 41,
    columnNumber: 4
  }, this) : error instanceof Error ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "Error" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 51,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: error.message }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 52,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("pre", { children: error.stack }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 53,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 50,
    columnNumber: 4
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "Unknown Error" }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action3,
  default: () => Login
});
var import_node5 = require("@remix-run/node"), import_react6 = require("@remix-run/react"), import_react7 = require("react");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), action3 = async ({ request }) => {
  let formData = await request.formData(), { _action } = Object.fromEntries(formData), email = formData.get("email"), password = formData.get("password"), errors = {};
  if (_action === "login") {
    if (formData.get("email") || (errors.email = "Please provide email!"), formData.get("password") || (errors.password = "Please provide password!"), Object.keys(errors).length > 0)
      return (0, import_node5.json)({ errors }, { status: 422 });
    let user = await login({ email, password });
    return user ? createUserSession(user.email, "/todos") : (console.log("No user"), null);
  }
};
function Login() {
  let fetcher = (0, import_react6.useFetcher)(), formRef = (0, import_react7.useRef)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex justify-center h-screen items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mb-3 font-bold text-2xl", children: "Login" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 53,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(fetcher.Form, { ref: formRef, method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { children: "Email" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 57,
          columnNumber: 8
        }, this) }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 56,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "input",
          {
            className: "focus:border-b-2 focus:outline-none focus:border-blue-500 text-lg md:text-2xl appearance-none border-b-2 border-gray-200",
            type: "text",
            name: "email"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 59,
            columnNumber: 7
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 55,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-3 text-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { children: "Password" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 67,
          columnNumber: 8
        }, this) }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 66,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "input",
          {
            className: "focus:border-b-2 focus:outline-none focus:border-blue-500 text-lg md:text-2xl appearance-none border-b-2 border-gray-200",
            type: "password",
            name: "password"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 69,
            columnNumber: 7
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 65,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-3 flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "button",
        {
          className: "bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded",
          type: "submit",
          name: "_action",
          value: "login",
          children: "LOGIN"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 76,
          columnNumber: 7
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 75,
        columnNumber: 6
      }, this),
      fetcher.data?.errors && Object.values(fetcher.data?.errors).map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: item }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 87,
        columnNumber: 8
      }, this))
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 54,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 52,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 51,
    columnNumber: 3
  }, this);
}

// app/routes/todos.tsx
var todos_exports = {};
__export(todos_exports, {
  action: () => action4,
  default: () => Todos,
  loader: () => loader3
});

// node_modules/react-dnd/dist/core/DndContext.js
var import_react8 = require("react"), DndContext = (0, import_react8.createContext)({
  dragDropManager: void 0
});

// node_modules/react-dnd/dist/core/DndProvider.js
var import_jsx_runtime = require("react/jsx-runtime");

// node_modules/dnd-core/dist/createDragDropManager.js
var import_redux = require("redux");

// node_modules/@react-dnd/invariant/dist/index.js
function invariant(condition, format, ...args) {
  if (isProduction() && format === void 0)
    throw new Error("invariant requires an error message argument");
  if (!condition) {
    let error;
    if (format === void 0)
      error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      let argIndex = 0;
      error = new Error(format.replace(/%s/g, function() {
        return args[argIndex++];
      })), error.name = "Invariant Violation";
    }
    throw error.framesToPop = 1, error;
  }
}
function isProduction() {
  return typeof process < "u" && !1;
}

// node_modules/dnd-core/dist/utils/js_utils.js
function get(obj, path, defaultValue) {
  return path.split(".").reduce(
    (a, c) => a && a[c] ? a[c] : defaultValue || null,
    obj
  );
}
function without(items, item) {
  return items.filter(
    (i) => i !== item
  );
}
function isObject(input) {
  return typeof input == "object";
}
function xor(itemsA, itemsB) {
  let map = /* @__PURE__ */ new Map(), insertItem = (item) => {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  };
  itemsA.forEach(insertItem), itemsB.forEach(insertItem);
  let result = [];
  return map.forEach((count, key) => {
    count === 1 && result.push(key);
  }), result;
}
function intersection(itemsA, itemsB) {
  return itemsA.filter(
    (t) => itemsB.indexOf(t) > -1
  );
}

// node_modules/dnd-core/dist/actions/dragDrop/types.js
var INIT_COORDS = "dnd-core/INIT_COORDS", BEGIN_DRAG = "dnd-core/BEGIN_DRAG", PUBLISH_DRAG_SOURCE = "dnd-core/PUBLISH_DRAG_SOURCE", HOVER = "dnd-core/HOVER", DROP = "dnd-core/DROP", END_DRAG = "dnd-core/END_DRAG";

// node_modules/dnd-core/dist/actions/dragDrop/local/setClientOffset.js
function setClientOffset(clientOffset, sourceClientOffset) {
  return {
    type: INIT_COORDS,
    payload: {
      sourceClientOffset: sourceClientOffset || null,
      clientOffset: clientOffset || null
    }
  };
}

// node_modules/dnd-core/dist/actions/dragDrop/beginDrag.js
var ResetCoordinatesAction = {
  type: INIT_COORDS,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function createBeginDrag(manager) {
  return function(sourceIds = [], options = {
    publishSource: !0
  }) {
    let { publishSource = !0, clientOffset, getSourceClientOffset: getSourceClientOffset2 } = options, monitor = manager.getMonitor(), registry = manager.getRegistry();
    manager.dispatch(setClientOffset(clientOffset)), verifyInvariants(sourceIds, monitor, registry);
    let sourceId = getDraggableSource(sourceIds, monitor);
    if (sourceId == null) {
      manager.dispatch(ResetCoordinatesAction);
      return;
    }
    let sourceClientOffset = null;
    if (clientOffset) {
      if (!getSourceClientOffset2)
        throw new Error("getSourceClientOffset must be defined");
      verifyGetSourceClientOffsetIsFunction(getSourceClientOffset2), sourceClientOffset = getSourceClientOffset2(sourceId);
    }
    manager.dispatch(setClientOffset(clientOffset, sourceClientOffset));
    let item = registry.getSource(sourceId).beginDrag(monitor, sourceId);
    if (item == null)
      return;
    verifyItemIsObject(item), registry.pinSource(sourceId);
    let itemType = registry.getSourceType(sourceId);
    return {
      type: BEGIN_DRAG,
      payload: {
        itemType,
        item,
        sourceId,
        clientOffset: clientOffset || null,
        sourceClientOffset: sourceClientOffset || null,
        isSourcePublic: !!publishSource
      }
    };
  };
}
function verifyInvariants(sourceIds, monitor, registry) {
  invariant(!monitor.isDragging(), "Cannot call beginDrag while dragging."), sourceIds.forEach(function(sourceId) {
    invariant(registry.getSource(sourceId), "Expected sourceIds to be registered.");
  });
}
function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset2) {
  invariant(typeof getSourceClientOffset2 == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function verifyItemIsObject(item) {
  invariant(isObject(item), "Item must be an object.");
}
function getDraggableSource(sourceIds, monitor) {
  let sourceId = null;
  for (let i = sourceIds.length - 1; i >= 0; i--)
    if (monitor.canDragSource(sourceIds[i])) {
      sourceId = sourceIds[i];
      break;
    }
  return sourceId;
}

// node_modules/dnd-core/dist/actions/dragDrop/drop.js
function _defineProperty(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}, ownKeys = Object.keys(source);
    typeof Object.getOwnPropertySymbols == "function" && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
      return Object.getOwnPropertyDescriptor(source, sym).enumerable;
    }))), ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}
function createDrop(manager) {
  return function(options = {}) {
    let monitor = manager.getMonitor(), registry = manager.getRegistry();
    verifyInvariants2(monitor), getDroppableTargets(monitor).forEach((targetId, index) => {
      let dropResult = determineDropResult(targetId, index, registry, monitor), action5 = {
        type: DROP,
        payload: {
          dropResult: _objectSpread({}, options, dropResult)
        }
      };
      manager.dispatch(action5);
    });
  };
}
function verifyInvariants2(monitor) {
  invariant(monitor.isDragging(), "Cannot call drop while not dragging."), invariant(!monitor.didDrop(), "Cannot call drop twice during one drag operation.");
}
function determineDropResult(targetId, index, registry, monitor) {
  let target = registry.getTarget(targetId), dropResult = target ? target.drop(monitor, targetId) : void 0;
  return verifyDropResultType(dropResult), typeof dropResult > "u" && (dropResult = index === 0 ? {} : monitor.getDropResult()), dropResult;
}
function verifyDropResultType(dropResult) {
  invariant(typeof dropResult > "u" || isObject(dropResult), "Drop result must either be an object or undefined.");
}
function getDroppableTargets(monitor) {
  let targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
  return targetIds.reverse(), targetIds;
}

// node_modules/dnd-core/dist/actions/dragDrop/endDrag.js
function createEndDrag(manager) {
  return function() {
    let monitor = manager.getMonitor(), registry = manager.getRegistry();
    verifyIsDragging(monitor);
    let sourceId = monitor.getSourceId();
    return sourceId != null && (registry.getSource(sourceId, !0).endDrag(monitor, sourceId), registry.unpinSource()), {
      type: END_DRAG
    };
  };
}
function verifyIsDragging(monitor) {
  invariant(monitor.isDragging(), "Cannot call endDrag while not dragging.");
}

// node_modules/dnd-core/dist/utils/matchesType.js
function matchesType(targetType, draggedItemType) {
  return draggedItemType === null ? targetType === null : Array.isArray(targetType) ? targetType.some(
    (t) => t === draggedItemType
  ) : targetType === draggedItemType;
}

// node_modules/dnd-core/dist/actions/dragDrop/hover.js
function createHover(manager) {
  return function(targetIdsArg, { clientOffset } = {}) {
    verifyTargetIdsIsArray(targetIdsArg);
    let targetIds = targetIdsArg.slice(0), monitor = manager.getMonitor(), registry = manager.getRegistry(), draggedItemType = monitor.getItemType();
    return removeNonMatchingTargetIds(targetIds, registry, draggedItemType), checkInvariants(targetIds, monitor, registry), hoverAllTargets(targetIds, monitor, registry), {
      type: HOVER,
      payload: {
        targetIds,
        clientOffset: clientOffset || null
      }
    };
  };
}
function verifyTargetIdsIsArray(targetIdsArg) {
  invariant(Array.isArray(targetIdsArg), "Expected targetIds to be an array.");
}
function checkInvariants(targetIds, monitor, registry) {
  invariant(monitor.isDragging(), "Cannot call hover while not dragging."), invariant(!monitor.didDrop(), "Cannot call hover after drop.");
  for (let i = 0; i < targetIds.length; i++) {
    let targetId = targetIds[i];
    invariant(targetIds.lastIndexOf(targetId) === i, "Expected targetIds to be unique in the passed array.");
    let target = registry.getTarget(targetId);
    invariant(target, "Expected targetIds to be registered.");
  }
}
function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
  for (let i = targetIds.length - 1; i >= 0; i--) {
    let targetId = targetIds[i], targetType = registry.getTargetType(targetId);
    matchesType(targetType, draggedItemType) || targetIds.splice(i, 1);
  }
}
function hoverAllTargets(targetIds, monitor, registry) {
  targetIds.forEach(function(targetId) {
    registry.getTarget(targetId).hover(monitor, targetId);
  });
}

// node_modules/dnd-core/dist/actions/dragDrop/publishDragSource.js
function createPublishDragSource(manager) {
  return function() {
    if (manager.getMonitor().isDragging())
      return {
        type: PUBLISH_DRAG_SOURCE
      };
  };
}

// node_modules/dnd-core/dist/actions/dragDrop/index.js
function createDragDropActions(manager) {
  return {
    beginDrag: createBeginDrag(manager),
    publishDragSource: createPublishDragSource(manager),
    hover: createHover(manager),
    drop: createDrop(manager),
    endDrag: createEndDrag(manager)
  };
}

// node_modules/dnd-core/dist/classes/DragDropManagerImpl.js
var DragDropManagerImpl = class {
  receiveBackend(backend) {
    this.backend = backend;
  }
  getMonitor() {
    return this.monitor;
  }
  getBackend() {
    return this.backend;
  }
  getRegistry() {
    return this.monitor.registry;
  }
  getActions() {
    let manager = this, { dispatch } = this.store;
    function bindActionCreator(actionCreator) {
      return (...args) => {
        let action5 = actionCreator.apply(manager, args);
        typeof action5 < "u" && dispatch(action5);
      };
    }
    let actions = createDragDropActions(this);
    return Object.keys(actions).reduce((boundActions, key) => {
      let action5 = actions[key];
      return boundActions[key] = bindActionCreator(action5), boundActions;
    }, {});
  }
  dispatch(action5) {
    this.store.dispatch(action5);
  }
  constructor(store, monitor) {
    this.isSetUp = !1, this.handleRefCountChange = () => {
      let shouldSetUp = this.store.getState().refCount > 0;
      this.backend && (shouldSetUp && !this.isSetUp ? (this.backend.setup(), this.isSetUp = !0) : !shouldSetUp && this.isSetUp && (this.backend.teardown(), this.isSetUp = !1));
    }, this.store = store, this.monitor = monitor, store.subscribe(this.handleRefCountChange);
  }
};

// node_modules/dnd-core/dist/utils/coords.js
function add(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  };
}
function subtract(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
function getSourceClientOffset(state) {
  let { clientOffset, initialClientOffset, initialSourceClientOffset } = state;
  return !clientOffset || !initialClientOffset || !initialSourceClientOffset ? null : subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
function getDifferenceFromInitialOffset(state) {
  let { clientOffset, initialClientOffset } = state;
  return !clientOffset || !initialClientOffset ? null : subtract(clientOffset, initialClientOffset);
}

// node_modules/dnd-core/dist/utils/dirtiness.js
var NONE = [], ALL = [];
NONE.__IS_NONE__ = !0;
ALL.__IS_ALL__ = !0;
function areDirty(dirtyIds, handlerIds) {
  return dirtyIds === NONE ? !1 : dirtyIds === ALL || typeof handlerIds > "u" ? !0 : intersection(handlerIds, dirtyIds).length > 0;
}

// node_modules/dnd-core/dist/classes/DragDropMonitorImpl.js
var DragDropMonitorImpl = class {
  subscribeToStateChange(listener, options = {}) {
    let { handlerIds } = options;
    invariant(typeof listener == "function", "listener must be a function."), invariant(typeof handlerIds > "u" || Array.isArray(handlerIds), "handlerIds, when specified, must be an array of strings.");
    let prevStateId = this.store.getState().stateId, handleChange = () => {
      let state = this.store.getState(), currentStateId = state.stateId;
      try {
        currentStateId === prevStateId || currentStateId === prevStateId + 1 && !areDirty(state.dirtyHandlerIds, handlerIds) || listener();
      } finally {
        prevStateId = currentStateId;
      }
    };
    return this.store.subscribe(handleChange);
  }
  subscribeToOffsetChange(listener) {
    invariant(typeof listener == "function", "listener must be a function.");
    let previousState = this.store.getState().dragOffset, handleChange = () => {
      let nextState = this.store.getState().dragOffset;
      nextState !== previousState && (previousState = nextState, listener());
    };
    return this.store.subscribe(handleChange);
  }
  canDragSource(sourceId) {
    if (!sourceId)
      return !1;
    let source = this.registry.getSource(sourceId);
    return invariant(source, `Expected to find a valid source. sourceId=${sourceId}`), this.isDragging() ? !1 : source.canDrag(this, sourceId);
  }
  canDropOnTarget(targetId) {
    if (!targetId)
      return !1;
    let target = this.registry.getTarget(targetId);
    if (invariant(target, `Expected to find a valid target. targetId=${targetId}`), !this.isDragging() || this.didDrop())
      return !1;
    let targetType = this.registry.getTargetType(targetId), draggedItemType = this.getItemType();
    return matchesType(targetType, draggedItemType) && target.canDrop(this, targetId);
  }
  isDragging() {
    return Boolean(this.getItemType());
  }
  isDraggingSource(sourceId) {
    if (!sourceId)
      return !1;
    let source = this.registry.getSource(sourceId, !0);
    if (invariant(source, `Expected to find a valid source. sourceId=${sourceId}`), !this.isDragging() || !this.isSourcePublic())
      return !1;
    let sourceType = this.registry.getSourceType(sourceId), draggedItemType = this.getItemType();
    return sourceType !== draggedItemType ? !1 : source.isDragging(this, sourceId);
  }
  isOverTarget(targetId, options = {
    shallow: !1
  }) {
    if (!targetId)
      return !1;
    let { shallow } = options;
    if (!this.isDragging())
      return !1;
    let targetType = this.registry.getTargetType(targetId), draggedItemType = this.getItemType();
    if (draggedItemType && !matchesType(targetType, draggedItemType))
      return !1;
    let targetIds = this.getTargetIds();
    if (!targetIds.length)
      return !1;
    let index = targetIds.indexOf(targetId);
    return shallow ? index === targetIds.length - 1 : index > -1;
  }
  getItemType() {
    return this.store.getState().dragOperation.itemType;
  }
  getItem() {
    return this.store.getState().dragOperation.item;
  }
  getSourceId() {
    return this.store.getState().dragOperation.sourceId;
  }
  getTargetIds() {
    return this.store.getState().dragOperation.targetIds;
  }
  getDropResult() {
    return this.store.getState().dragOperation.dropResult;
  }
  didDrop() {
    return this.store.getState().dragOperation.didDrop;
  }
  isSourcePublic() {
    return Boolean(this.store.getState().dragOperation.isSourcePublic);
  }
  getInitialClientOffset() {
    return this.store.getState().dragOffset.initialClientOffset;
  }
  getInitialSourceClientOffset() {
    return this.store.getState().dragOffset.initialSourceClientOffset;
  }
  getClientOffset() {
    return this.store.getState().dragOffset.clientOffset;
  }
  getSourceClientOffset() {
    return getSourceClientOffset(this.store.getState().dragOffset);
  }
  getDifferenceFromInitialOffset() {
    return getDifferenceFromInitialOffset(this.store.getState().dragOffset);
  }
  constructor(store, registry) {
    this.store = store, this.registry = registry;
  }
};

// node_modules/@react-dnd/asap/dist/makeRequestCall.js
var scope = typeof global < "u" ? global : self, BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
function makeRequestCallFromTimer(callback) {
  return function() {
    let timeoutHandle = setTimeout(handleTimer, 0), intervalHandle = setInterval(handleTimer, 50);
    function handleTimer() {
      clearTimeout(timeoutHandle), clearInterval(intervalHandle), callback();
    }
  };
}
function makeRequestCallFromMutationObserver(callback) {
  let toggle = 1, observer = new BrowserMutationObserver(callback), node = document.createTextNode("");
  return observer.observe(node, {
    characterData: !0
  }), function() {
    toggle = -toggle, node.data = toggle;
  };
}
var makeRequestCall = typeof BrowserMutationObserver == "function" ? (
  // reliably everywhere they are implemented.
  // They are implemented in all modern browsers.
  //
  // - Android 4-4.3
  // - Chrome 26-34
  // - Firefox 14-29
  // - Internet Explorer 11
  // - iPad Safari 6-7.1
  // - iPhone Safari 7-7.1
  // - Safari 6-7
  makeRequestCallFromMutationObserver
) : (
  // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
  // 11-12, and in web workers in many engines.
  // Although message channels yield to any queued rendering and IO tasks, they
  // would be better than imposing the 4ms delay of timers.
  // However, they do not work reliably in Internet Explorer or Safari.
  // Internet Explorer 10 is the only browser that has setImmediate but does
  // not have MutationObservers.
  // Although setImmediate yields to the browser's renderer, it would be
  // preferrable to falling back to setTimeout since it does not have
  // the minimum 4ms penalty.
  // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
  // Desktop to a lesser extent) that renders both setImmediate and
  // MessageChannel useless for the purposes of ASAP.
  // https://github.com/kriskowal/q/issues/396
  // Timers are implemented universally.
  // We fall back to timers in workers in most engines, and in foreground
  // contexts in the following browsers.
  // However, note that even this simple case requires nuances to operate in a
  // broad spectrum of browsers.
  //
  // - Firefox 3-13
  // - Internet Explorer 6-9
  // - iPad Safari 4.3
  // - Lynx 2.8.7
  makeRequestCallFromTimer
);

// node_modules/@react-dnd/asap/dist/AsapQueue.js
var AsapQueue = class {
  // Use the fastest means possible to execute a task in its own turn, with
  // priority over other events including IO, animation, reflow, and redraw
  // events in browsers.
  //
  // An exception thrown by a task will permanently interrupt the processing of
  // subsequent tasks. The higher level `asap` function ensures that if an
  // exception is thrown by a task, that the task queue will continue flushing as
  // soon as possible, but if you use `rawAsap` directly, you are responsible to
  // either ensure that no exceptions are thrown from your task, or to manually
  // call `rawAsap.requestFlush` if an exception is thrown.
  enqueueTask(task) {
    let { queue: q, requestFlush } = this;
    q.length || (requestFlush(), this.flushing = !0), q[q.length] = task;
  }
  constructor() {
    this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
      let { queue: q } = this;
      for (; this.index < q.length; ) {
        let currentIndex = this.index;
        if (this.index++, q[currentIndex].call(), this.index > this.capacity) {
          for (let scan = 0, newLength = q.length - this.index; scan < newLength; scan++)
            q[scan] = q[scan + this.index];
          q.length -= this.index, this.index = 0;
        }
      }
      q.length = 0, this.index = 0, this.flushing = !1;
    }, this.registerPendingError = (err) => {
      this.pendingErrors.push(err), this.requestErrorThrow();
    }, this.requestFlush = makeRequestCall(this.flush), this.requestErrorThrow = makeRequestCallFromTimer(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
};

// node_modules/@react-dnd/asap/dist/RawTask.js
var RawTask = class {
  call() {
    try {
      this.task && this.task();
    } catch (error) {
      this.onError(error);
    } finally {
      this.task = null, this.release(this);
    }
  }
  constructor(onError, release) {
    this.onError = onError, this.release = release, this.task = null;
  }
};

// node_modules/@react-dnd/asap/dist/TaskFactory.js
var TaskFactory = class {
  create(task) {
    let tasks = this.freeTasks, t1 = tasks.length ? tasks.pop() : new RawTask(
      this.onError,
      (t) => tasks[tasks.length] = t
    );
    return t1.task = task, t1;
  }
  constructor(onError) {
    this.onError = onError, this.freeTasks = [];
  }
};

// node_modules/@react-dnd/asap/dist/asap.js
var asapQueue = new AsapQueue(), taskFactory = new TaskFactory(asapQueue.registerPendingError);
function asap(task) {
  asapQueue.enqueueTask(taskFactory.create(task));
}

// node_modules/dnd-core/dist/actions/registry.js
var ADD_SOURCE = "dnd-core/ADD_SOURCE", ADD_TARGET = "dnd-core/ADD_TARGET", REMOVE_SOURCE = "dnd-core/REMOVE_SOURCE", REMOVE_TARGET = "dnd-core/REMOVE_TARGET";
function addSource(sourceId) {
  return {
    type: ADD_SOURCE,
    payload: {
      sourceId
    }
  };
}
function addTarget(targetId) {
  return {
    type: ADD_TARGET,
    payload: {
      targetId
    }
  };
}
function removeSource(sourceId) {
  return {
    type: REMOVE_SOURCE,
    payload: {
      sourceId
    }
  };
}
function removeTarget(targetId) {
  return {
    type: REMOVE_TARGET,
    payload: {
      targetId
    }
  };
}

// node_modules/dnd-core/dist/contracts.js
function validateSourceContract(source) {
  invariant(typeof source.canDrag == "function", "Expected canDrag to be a function."), invariant(typeof source.beginDrag == "function", "Expected beginDrag to be a function."), invariant(typeof source.endDrag == "function", "Expected endDrag to be a function.");
}
function validateTargetContract(target) {
  invariant(typeof target.canDrop == "function", "Expected canDrop to be a function."), invariant(typeof target.hover == "function", "Expected hover to be a function."), invariant(typeof target.drop == "function", "Expected beginDrag to be a function.");
}
function validateType(type, allowArray) {
  if (allowArray && Array.isArray(type)) {
    type.forEach(
      (t) => validateType(t, !1)
    );
    return;
  }
  invariant(typeof type == "string" || typeof type == "symbol", allowArray ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}

// node_modules/dnd-core/dist/interfaces.js
var HandlerRole;
(function(HandlerRole2) {
  HandlerRole2.SOURCE = "SOURCE", HandlerRole2.TARGET = "TARGET";
})(HandlerRole || (HandlerRole = {}));

// node_modules/dnd-core/dist/utils/getNextUniqueId.js
var nextUniqueId = 0;
function getNextUniqueId() {
  return nextUniqueId++;
}

// node_modules/dnd-core/dist/classes/HandlerRegistryImpl.js
function getNextHandlerId(role) {
  let id = getNextUniqueId().toString();
  switch (role) {
    case HandlerRole.SOURCE:
      return `S${id}`;
    case HandlerRole.TARGET:
      return `T${id}`;
    default:
      throw new Error(`Unknown Handler Role: ${role}`);
  }
}
function parseRoleFromHandlerId(handlerId) {
  switch (handlerId[0]) {
    case "S":
      return HandlerRole.SOURCE;
    case "T":
      return HandlerRole.TARGET;
    default:
      throw new Error(`Cannot parse handler ID: ${handlerId}`);
  }
}
function mapContainsValue(map, searchValue) {
  let entries = map.entries(), isDone = !1;
  do {
    let { done, value: [, value] } = entries.next();
    if (value === searchValue)
      return !0;
    isDone = !!done;
  } while (!isDone);
  return !1;
}
var HandlerRegistryImpl = class {
  addSource(type, source) {
    validateType(type), validateSourceContract(source);
    let sourceId = this.addHandler(HandlerRole.SOURCE, type, source);
    return this.store.dispatch(addSource(sourceId)), sourceId;
  }
  addTarget(type, target) {
    validateType(type, !0), validateTargetContract(target);
    let targetId = this.addHandler(HandlerRole.TARGET, type, target);
    return this.store.dispatch(addTarget(targetId)), targetId;
  }
  containsHandler(handler2) {
    return mapContainsValue(this.dragSources, handler2) || mapContainsValue(this.dropTargets, handler2);
  }
  getSource(sourceId, includePinned = !1) {
    return invariant(this.isSourceId(sourceId), "Expected a valid source ID."), includePinned && sourceId === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(sourceId);
  }
  getTarget(targetId) {
    return invariant(this.isTargetId(targetId), "Expected a valid target ID."), this.dropTargets.get(targetId);
  }
  getSourceType(sourceId) {
    return invariant(this.isSourceId(sourceId), "Expected a valid source ID."), this.types.get(sourceId);
  }
  getTargetType(targetId) {
    return invariant(this.isTargetId(targetId), "Expected a valid target ID."), this.types.get(targetId);
  }
  isSourceId(handlerId) {
    return parseRoleFromHandlerId(handlerId) === HandlerRole.SOURCE;
  }
  isTargetId(handlerId) {
    return parseRoleFromHandlerId(handlerId) === HandlerRole.TARGET;
  }
  removeSource(sourceId) {
    invariant(this.getSource(sourceId), "Expected an existing source."), this.store.dispatch(removeSource(sourceId)), asap(() => {
      this.dragSources.delete(sourceId), this.types.delete(sourceId);
    });
  }
  removeTarget(targetId) {
    invariant(this.getTarget(targetId), "Expected an existing target."), this.store.dispatch(removeTarget(targetId)), this.dropTargets.delete(targetId), this.types.delete(targetId);
  }
  pinSource(sourceId) {
    let source = this.getSource(sourceId);
    invariant(source, "Expected an existing source."), this.pinnedSourceId = sourceId, this.pinnedSource = source;
  }
  unpinSource() {
    invariant(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
  }
  addHandler(role, type, handler2) {
    let id = getNextHandlerId(role);
    return this.types.set(id, type), role === HandlerRole.SOURCE ? this.dragSources.set(id, handler2) : role === HandlerRole.TARGET && this.dropTargets.set(id, handler2), id;
  }
  constructor(store) {
    this.types = /* @__PURE__ */ new Map(), this.dragSources = /* @__PURE__ */ new Map(), this.dropTargets = /* @__PURE__ */ new Map(), this.pinnedSourceId = null, this.pinnedSource = null, this.store = store;
  }
};

// node_modules/dnd-core/dist/utils/equality.js
var strictEquality = (a, b) => a === b;
function areCoordsEqual(offsetA, offsetB) {
  return !offsetA && !offsetB ? !0 : !offsetA || !offsetB ? !1 : offsetA.x === offsetB.x && offsetA.y === offsetB.y;
}
function areArraysEqual(a, b, isEqual = strictEquality) {
  if (a.length !== b.length)
    return !1;
  for (let i = 0; i < a.length; ++i)
    if (!isEqual(a[i], b[i]))
      return !1;
  return !0;
}

// node_modules/dnd-core/dist/reducers/dirtyHandlerIds.js
function reduce(_state = NONE, action5) {
  switch (action5.type) {
    case HOVER:
      break;
    case ADD_SOURCE:
    case ADD_TARGET:
    case REMOVE_TARGET:
    case REMOVE_SOURCE:
      return NONE;
    case BEGIN_DRAG:
    case PUBLISH_DRAG_SOURCE:
    case END_DRAG:
    case DROP:
    default:
      return ALL;
  }
  let { targetIds = [], prevTargetIds = [] } = action5.payload, result = xor(targetIds, prevTargetIds);
  if (!(result.length > 0 || !areArraysEqual(targetIds, prevTargetIds)))
    return NONE;
  let prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1], innermostTargetId = targetIds[targetIds.length - 1];
  return prevInnermostTargetId !== innermostTargetId && (prevInnermostTargetId && result.push(prevInnermostTargetId), innermostTargetId && result.push(innermostTargetId)), result;
}

// node_modules/dnd-core/dist/reducers/dragOffset.js
function _defineProperty2(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}, ownKeys = Object.keys(source);
    typeof Object.getOwnPropertySymbols == "function" && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
      return Object.getOwnPropertyDescriptor(source, sym).enumerable;
    }))), ownKeys.forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    });
  }
  return target;
}
var initialState = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function reduce2(state = initialState, action5) {
  let { payload } = action5;
  switch (action5.type) {
    case INIT_COORDS:
    case BEGIN_DRAG:
      return {
        initialSourceClientOffset: payload.sourceClientOffset,
        initialClientOffset: payload.clientOffset,
        clientOffset: payload.clientOffset
      };
    case HOVER:
      return areCoordsEqual(state.clientOffset, payload.clientOffset) ? state : _objectSpread2({}, state, {
        clientOffset: payload.clientOffset
      });
    case END_DRAG:
    case DROP:
      return initialState;
    default:
      return state;
  }
}

// node_modules/dnd-core/dist/reducers/dragOperation.js
function _defineProperty3(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _objectSpread3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}, ownKeys = Object.keys(source);
    typeof Object.getOwnPropertySymbols == "function" && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
      return Object.getOwnPropertyDescriptor(source, sym).enumerable;
    }))), ownKeys.forEach(function(key) {
      _defineProperty3(target, key, source[key]);
    });
  }
  return target;
}
var initialState2 = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function reduce3(state = initialState2, action5) {
  let { payload } = action5;
  switch (action5.type) {
    case BEGIN_DRAG:
      return _objectSpread3({}, state, {
        itemType: payload.itemType,
        item: payload.item,
        sourceId: payload.sourceId,
        isSourcePublic: payload.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case PUBLISH_DRAG_SOURCE:
      return _objectSpread3({}, state, {
        isSourcePublic: !0
      });
    case HOVER:
      return _objectSpread3({}, state, {
        targetIds: payload.targetIds
      });
    case REMOVE_TARGET:
      return state.targetIds.indexOf(payload.targetId) === -1 ? state : _objectSpread3({}, state, {
        targetIds: without(state.targetIds, payload.targetId)
      });
    case DROP:
      return _objectSpread3({}, state, {
        dropResult: payload.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case END_DRAG:
      return _objectSpread3({}, state, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return state;
  }
}

// node_modules/dnd-core/dist/reducers/refCount.js
function reduce4(state = 0, action5) {
  switch (action5.type) {
    case ADD_SOURCE:
    case ADD_TARGET:
      return state + 1;
    case REMOVE_SOURCE:
    case REMOVE_TARGET:
      return state - 1;
    default:
      return state;
  }
}

// node_modules/dnd-core/dist/reducers/stateId.js
function reduce5(state = 0) {
  return state + 1;
}

// node_modules/dnd-core/dist/reducers/index.js
function _defineProperty4(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _objectSpread4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}, ownKeys = Object.keys(source);
    typeof Object.getOwnPropertySymbols == "function" && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
      return Object.getOwnPropertyDescriptor(source, sym).enumerable;
    }))), ownKeys.forEach(function(key) {
      _defineProperty4(target, key, source[key]);
    });
  }
  return target;
}
function reduce6(state = {}, action5) {
  return {
    dirtyHandlerIds: reduce(state.dirtyHandlerIds, {
      type: action5.type,
      payload: _objectSpread4({}, action5.payload, {
        prevTargetIds: get(state, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: reduce2(state.dragOffset, action5),
    refCount: reduce4(state.refCount, action5),
    dragOperation: reduce3(state.dragOperation, action5),
    stateId: reduce5(state.stateId)
  };
}

// node_modules/dnd-core/dist/createDragDropManager.js
function createDragDropManager(backendFactory, globalContext = void 0, backendOptions = {}, debugMode = !1) {
  let store = makeStoreInstance(debugMode), monitor = new DragDropMonitorImpl(store, new HandlerRegistryImpl(store)), manager = new DragDropManagerImpl(store, monitor), backend = backendFactory(manager, globalContext, backendOptions);
  return manager.receiveBackend(backend), manager;
}
function makeStoreInstance(debugMode) {
  let reduxDevTools = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return (0, import_redux.createStore)(reduce6, debugMode && reduxDevTools && reduxDevTools({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}

// node_modules/react-dnd/dist/core/DndProvider.js
var import_react9 = require("react");
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded), key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++)
      key = sourceSymbolKeys[i], !(excluded.indexOf(key) >= 0) && Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]);
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {}, sourceKeys = Object.keys(source), key, i;
  for (i = 0; i < sourceKeys.length; i++)
    key = sourceKeys[i], !(excluded.indexOf(key) >= 0) && (target[key] = source[key]);
  return target;
}
var refCount = 0, INSTANCE_SYM = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"), DndProvider = /* @__PURE__ */ (0, import_react9.memo)(function(_param) {
  var { children } = _param, props = _objectWithoutProperties(_param, [
    "children"
  ]);
  let [manager, isGlobalInstance] = getDndContextValue(props);
  return (0, import_react9.useEffect)(() => {
    if (isGlobalInstance) {
      let context = getGlobalContext();
      return ++refCount, () => {
        --refCount === 0 && (context[INSTANCE_SYM] = null);
      };
    }
  }, []), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DndContext.Provider, {
    value: manager,
    children
  });
});
function getDndContextValue(props) {
  if ("manager" in props)
    return [
      {
        dragDropManager: props.manager
      },
      !1
    ];
  let manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode), isGlobalInstance = !props.context;
  return [
    manager,
    isGlobalInstance
  ];
}
function createSingletonDndContext(backend, context = getGlobalContext(), options, debugMode) {
  let ctx = context;
  return ctx[INSTANCE_SYM] || (ctx[INSTANCE_SYM] = {
    dragDropManager: createDragDropManager(backend, context, options, debugMode)
  }), ctx[INSTANCE_SYM];
}
function getGlobalContext() {
  return typeof global < "u" ? global : window;
}

// node_modules/react-dnd/dist/hooks/useCollector.js
var import_fast_deep_equal = __toESM(require("fast-deep-equal"), 1), import_react11 = require("react");

// node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js
var import_react10 = require("react"), useIsomorphicLayoutEffect = typeof window < "u" ? import_react10.useLayoutEffect : import_react10.useEffect;

// node_modules/react-dnd/dist/hooks/useCollector.js
function useCollector(monitor, collect, onUpdate) {
  let [collected, setCollected] = (0, import_react11.useState)(
    () => collect(monitor)
  ), updateCollected = (0, import_react11.useCallback)(() => {
    let nextValue = collect(monitor);
    (0, import_fast_deep_equal.default)(collected, nextValue) || (setCollected(nextValue), onUpdate && onUpdate());
  }, [
    collected,
    monitor,
    onUpdate
  ]);
  return useIsomorphicLayoutEffect(updateCollected), [
    collected,
    updateCollected
  ];
}

// node_modules/react-dnd/dist/hooks/useMonitorOutput.js
function useMonitorOutput(monitor, collect, onCollect) {
  let [collected, updateCollected] = useCollector(monitor, collect, onCollect);
  return useIsomorphicLayoutEffect(function() {
    let handlerId = monitor.getHandlerId();
    if (handlerId != null)
      return monitor.subscribeToStateChange(updateCollected, {
        handlerIds: [
          handlerId
        ]
      });
  }, [
    monitor,
    updateCollected
  ]), collected;
}

// node_modules/react-dnd/dist/hooks/useCollectedProps.js
function useCollectedProps(collector, monitor, connector) {
  return useMonitorOutput(
    monitor,
    collector || (() => ({})),
    () => connector.reconnect()
  );
}

// node_modules/react-dnd/dist/hooks/useOptionalFactory.js
var import_react12 = require("react");
function useOptionalFactory(arg, deps) {
  let memoDeps = [
    ...deps || []
  ];
  return deps == null && typeof arg != "function" && memoDeps.push(arg), (0, import_react12.useMemo)(() => typeof arg == "function" ? arg() : arg, memoDeps);
}

// node_modules/react-dnd/dist/hooks/useDrag/connectors.js
var import_react13 = require("react");
function useConnectDragSource(connector) {
  return (0, import_react13.useMemo)(
    () => connector.hooks.dragSource(),
    [
      connector
    ]
  );
}
function useConnectDragPreview(connector) {
  return (0, import_react13.useMemo)(
    () => connector.hooks.dragPreview(),
    [
      connector
    ]
  );
}

// node_modules/react-dnd/dist/hooks/useDrag/useDragSourceConnector.js
var import_react16 = require("react");

// node_modules/react-dnd/dist/internals/DragSourceMonitorImpl.js
var isCallingCanDrag = !1, isCallingIsDragging = !1, DragSourceMonitorImpl = class {
  receiveHandlerId(sourceId) {
    this.sourceId = sourceId;
  }
  getHandlerId() {
    return this.sourceId;
  }
  canDrag() {
    invariant(!isCallingCanDrag, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      return isCallingCanDrag = !0, this.internalMonitor.canDragSource(this.sourceId);
    } finally {
      isCallingCanDrag = !1;
    }
  }
  isDragging() {
    if (!this.sourceId)
      return !1;
    invariant(!isCallingIsDragging, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      return isCallingIsDragging = !0, this.internalMonitor.isDraggingSource(this.sourceId);
    } finally {
      isCallingIsDragging = !1;
    }
  }
  subscribeToStateChange(listener, options) {
    return this.internalMonitor.subscribeToStateChange(listener, options);
  }
  isDraggingSource(sourceId) {
    return this.internalMonitor.isDraggingSource(sourceId);
  }
  isOverTarget(targetId, options) {
    return this.internalMonitor.isOverTarget(targetId, options);
  }
  getTargetIds() {
    return this.internalMonitor.getTargetIds();
  }
  isSourcePublic() {
    return this.internalMonitor.isSourcePublic();
  }
  getSourceId() {
    return this.internalMonitor.getSourceId();
  }
  subscribeToOffsetChange(listener) {
    return this.internalMonitor.subscribeToOffsetChange(listener);
  }
  canDragSource(sourceId) {
    return this.internalMonitor.canDragSource(sourceId);
  }
  canDropOnTarget(targetId) {
    return this.internalMonitor.canDropOnTarget(targetId);
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(manager) {
    this.sourceId = null, this.internalMonitor = manager.getMonitor();
  }
};

// node_modules/react-dnd/dist/internals/DropTargetMonitorImpl.js
var isCallingCanDrop = !1, DropTargetMonitorImpl = class {
  receiveHandlerId(targetId) {
    this.targetId = targetId;
  }
  getHandlerId() {
    return this.targetId;
  }
  subscribeToStateChange(listener, options) {
    return this.internalMonitor.subscribeToStateChange(listener, options);
  }
  canDrop() {
    if (!this.targetId)
      return !1;
    invariant(!isCallingCanDrop, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
    try {
      return isCallingCanDrop = !0, this.internalMonitor.canDropOnTarget(this.targetId);
    } finally {
      isCallingCanDrop = !1;
    }
  }
  isOver(options) {
    return this.targetId ? this.internalMonitor.isOverTarget(this.targetId, options) : !1;
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(manager) {
    this.targetId = null, this.internalMonitor = manager.getMonitor();
  }
};

// node_modules/react-dnd/dist/internals/registration.js
function registerTarget(type, target, manager) {
  let registry = manager.getRegistry(), targetId = registry.addTarget(type, target);
  return [
    targetId,
    () => registry.removeTarget(targetId)
  ];
}
function registerSource(type, source, manager) {
  let registry = manager.getRegistry(), sourceId = registry.addSource(type, source);
  return [
    sourceId,
    () => registry.removeSource(sourceId)
  ];
}

// node_modules/@react-dnd/shallowequal/dist/index.js
function shallowEqual(objA, objB, compare, compareContext) {
  let compareResult = compare ? compare.call(compareContext, objA, objB) : void 0;
  if (compareResult !== void 0)
    return !!compareResult;
  if (objA === objB)
    return !0;
  if (typeof objA != "object" || !objA || typeof objB != "object" || !objB)
    return !1;
  let keysA = Object.keys(objA), keysB = Object.keys(objB);
  if (keysA.length !== keysB.length)
    return !1;
  let bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (let idx = 0; idx < keysA.length; idx++) {
    let key = keysA[idx];
    if (!bHasOwnProperty(key))
      return !1;
    let valueA = objA[key], valueB = objB[key];
    if (compareResult = compare ? compare.call(compareContext, valueA, valueB, key) : void 0, compareResult === !1 || compareResult === void 0 && valueA !== valueB)
      return !1;
  }
  return !0;
}

// node_modules/react-dnd/dist/internals/isRef.js
function isRef(obj) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    obj !== null && typeof obj == "object" && Object.prototype.hasOwnProperty.call(obj, "current")
  );
}

// node_modules/react-dnd/dist/internals/wrapConnectorHooks.js
var import_react14 = require("react");
function throwIfCompositeComponentElement(element) {
  if (typeof element.type == "string")
    return;
  let displayName = element.type.displayName || element.type.name || "the component";
  throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${displayName} into a <div>, or turn it into a drag source or a drop target itself.`);
}
function wrapHookToRecognizeElement(hook) {
  return (elementOrNode = null, options = null) => {
    if (!(0, import_react14.isValidElement)(elementOrNode)) {
      let node = elementOrNode;
      return hook(node, options), node;
    }
    let element = elementOrNode;
    return throwIfCompositeComponentElement(element), cloneWithRef(element, options ? (node) => hook(node, options) : hook);
  };
}
function wrapConnectorHooks(hooks) {
  let wrappedHooks = {};
  return Object.keys(hooks).forEach((key) => {
    let hook = hooks[key];
    if (key.endsWith("Ref"))
      wrappedHooks[key] = hooks[key];
    else {
      let wrappedHook = wrapHookToRecognizeElement(hook);
      wrappedHooks[key] = () => wrappedHook;
    }
  }), wrappedHooks;
}
function setRef(ref, node) {
  typeof ref == "function" ? ref(node) : ref.current = node;
}
function cloneWithRef(element, newRef) {
  let previousRef = element.ref;
  return invariant(typeof previousRef != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), previousRef ? (0, import_react14.cloneElement)(element, {
    ref: (node) => {
      setRef(previousRef, node), setRef(newRef, node);
    }
  }) : (0, import_react14.cloneElement)(element, {
    ref: newRef
  });
}

// node_modules/react-dnd/dist/internals/SourceConnector.js
var SourceConnector = class {
  receiveHandlerId(newHandlerId) {
    this.handlerId !== newHandlerId && (this.handlerId = newHandlerId, this.reconnect());
  }
  get connectTarget() {
    return this.dragSource;
  }
  get dragSourceOptions() {
    return this.dragSourceOptionsInternal;
  }
  set dragSourceOptions(options) {
    this.dragSourceOptionsInternal = options;
  }
  get dragPreviewOptions() {
    return this.dragPreviewOptionsInternal;
  }
  set dragPreviewOptions(options) {
    this.dragPreviewOptionsInternal = options;
  }
  reconnect() {
    let didChange = this.reconnectDragSource();
    this.reconnectDragPreview(didChange);
  }
  reconnectDragSource() {
    let dragSource = this.dragSource, didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
    return didChange && this.disconnectDragSource(), this.handlerId ? dragSource ? (didChange && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = dragSource, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions)), didChange) : (this.lastConnectedDragSource = dragSource, didChange) : didChange;
  }
  reconnectDragPreview(forceDidChange = !1) {
    let dragPreview = this.dragPreview, didChange = forceDidChange || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
    if (didChange && this.disconnectDragPreview(), !!this.handlerId) {
      if (!dragPreview) {
        this.lastConnectedDragPreview = dragPreview;
        return;
      }
      didChange && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = dragPreview, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions));
    }
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didConnectedDragSourceChange() {
    return this.lastConnectedDragSource !== this.dragSource;
  }
  didConnectedDragPreviewChange() {
    return this.lastConnectedDragPreview !== this.dragPreview;
  }
  didDragSourceOptionsChange() {
    return !shallowEqual(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
  }
  didDragPreviewOptionsChange() {
    return !shallowEqual(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
  }
  disconnectDragSource() {
    this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), this.dragSourceUnsubscribe = void 0);
  }
  disconnectDragPreview() {
    this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null);
  }
  get dragSource() {
    return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
  }
  get dragPreview() {
    return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
  }
  clearDragSource() {
    this.dragSourceNode = null, this.dragSourceRef = null;
  }
  clearDragPreview() {
    this.dragPreviewNode = null, this.dragPreviewRef = null;
  }
  constructor(backend) {
    this.hooks = wrapConnectorHooks({
      dragSource: (node, options) => {
        this.clearDragSource(), this.dragSourceOptions = options || null, isRef(node) ? this.dragSourceRef = node : this.dragSourceNode = node, this.reconnectDragSource();
      },
      dragPreview: (node, options) => {
        this.clearDragPreview(), this.dragPreviewOptions = options || null, isRef(node) ? this.dragPreviewRef = node : this.dragPreviewNode = node, this.reconnectDragPreview();
      }
    }), this.handlerId = null, this.dragSourceRef = null, this.dragSourceOptionsInternal = null, this.dragPreviewRef = null, this.dragPreviewOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDragSource = null, this.lastConnectedDragSourceOptions = null, this.lastConnectedDragPreview = null, this.lastConnectedDragPreviewOptions = null, this.backend = backend;
  }
};

// node_modules/react-dnd/dist/internals/TargetConnector.js
var TargetConnector = class {
  get connectTarget() {
    return this.dropTarget;
  }
  reconnect() {
    let didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
    didChange && this.disconnectDropTarget();
    let dropTarget = this.dropTarget;
    if (this.handlerId) {
      if (!dropTarget) {
        this.lastConnectedDropTarget = dropTarget;
        return;
      }
      didChange && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = dropTarget, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions));
    }
  }
  receiveHandlerId(newHandlerId) {
    newHandlerId !== this.handlerId && (this.handlerId = newHandlerId, this.reconnect());
  }
  get dropTargetOptions() {
    return this.dropTargetOptionsInternal;
  }
  set dropTargetOptions(options) {
    this.dropTargetOptionsInternal = options;
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didDropTargetChange() {
    return this.lastConnectedDropTarget !== this.dropTarget;
  }
  didOptionsChange() {
    return !shallowEqual(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
  }
  disconnectDropTarget() {
    this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), this.unsubscribeDropTarget = void 0);
  }
  get dropTarget() {
    return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
  }
  clearDropTarget() {
    this.dropTargetRef = null, this.dropTargetNode = null;
  }
  constructor(backend) {
    this.hooks = wrapConnectorHooks({
      dropTarget: (node, options) => {
        this.clearDropTarget(), this.dropTargetOptions = options, isRef(node) ? this.dropTargetRef = node : this.dropTargetNode = node, this.reconnect();
      }
    }), this.handlerId = null, this.dropTargetRef = null, this.dropTargetOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDropTarget = null, this.lastConnectedDropTargetOptions = null, this.backend = backend;
  }
};

// node_modules/react-dnd/dist/hooks/useDragDropManager.js
var import_react15 = require("react");
function useDragDropManager() {
  let { dragDropManager } = (0, import_react15.useContext)(DndContext);
  return invariant(dragDropManager != null, "Expected drag drop context"), dragDropManager;
}

// node_modules/react-dnd/dist/hooks/useDrag/useDragSourceConnector.js
function useDragSourceConnector(dragSourceOptions, dragPreviewOptions) {
  let manager = useDragDropManager(), connector = (0, import_react16.useMemo)(
    () => new SourceConnector(manager.getBackend()),
    [
      manager
    ]
  );
  return useIsomorphicLayoutEffect(() => (connector.dragSourceOptions = dragSourceOptions || null, connector.reconnect(), () => connector.disconnectDragSource()), [
    connector,
    dragSourceOptions
  ]), useIsomorphicLayoutEffect(() => (connector.dragPreviewOptions = dragPreviewOptions || null, connector.reconnect(), () => connector.disconnectDragPreview()), [
    connector,
    dragPreviewOptions
  ]), connector;
}

// node_modules/react-dnd/dist/hooks/useDrag/useDragSourceMonitor.js
var import_react17 = require("react");
function useDragSourceMonitor() {
  let manager = useDragDropManager();
  return (0, import_react17.useMemo)(
    () => new DragSourceMonitorImpl(manager),
    [
      manager
    ]
  );
}

// node_modules/react-dnd/dist/hooks/useDrag/useDragSource.js
var import_react18 = require("react");

// node_modules/react-dnd/dist/hooks/useDrag/DragSourceImpl.js
var DragSourceImpl = class {
  beginDrag() {
    let spec = this.spec, monitor = this.monitor, result = null;
    return typeof spec.item == "object" ? result = spec.item : typeof spec.item == "function" ? result = spec.item(monitor) : result = {}, result ?? null;
  }
  canDrag() {
    let spec = this.spec, monitor = this.monitor;
    return typeof spec.canDrag == "boolean" ? spec.canDrag : typeof spec.canDrag == "function" ? spec.canDrag(monitor) : !0;
  }
  isDragging(globalMonitor, target) {
    let spec = this.spec, monitor = this.monitor, { isDragging } = spec;
    return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
  }
  endDrag() {
    let spec = this.spec, monitor = this.monitor, connector = this.connector, { end } = spec;
    end && end(monitor.getItem(), monitor), connector.reconnect();
  }
  constructor(spec, monitor, connector) {
    this.spec = spec, this.monitor = monitor, this.connector = connector;
  }
};

// node_modules/react-dnd/dist/hooks/useDrag/useDragSource.js
function useDragSource(spec, monitor, connector) {
  let handler2 = (0, import_react18.useMemo)(
    () => new DragSourceImpl(spec, monitor, connector),
    [
      monitor,
      connector
    ]
  );
  return (0, import_react18.useEffect)(() => {
    handler2.spec = spec;
  }, [
    spec
  ]), handler2;
}

// node_modules/react-dnd/dist/hooks/useDrag/useDragType.js
var import_react19 = require("react");
function useDragType(spec) {
  return (0, import_react19.useMemo)(() => {
    let result = spec.type;
    return invariant(result != null, "spec.type must be defined"), result;
  }, [
    spec
  ]);
}

// node_modules/react-dnd/dist/hooks/useDrag/useRegisteredDragSource.js
function useRegisteredDragSource(spec, monitor, connector) {
  let manager = useDragDropManager(), handler2 = useDragSource(spec, monitor, connector), itemType = useDragType(spec);
  useIsomorphicLayoutEffect(function() {
    if (itemType != null) {
      let [handlerId, unregister] = registerSource(itemType, handler2, manager);
      return monitor.receiveHandlerId(handlerId), connector.receiveHandlerId(handlerId), unregister;
    }
  }, [
    manager,
    monitor,
    connector,
    handler2,
    itemType
  ]);
}

// node_modules/react-dnd/dist/hooks/useDrag/useDrag.js
function useDrag(specArg, deps) {
  let spec = useOptionalFactory(specArg, deps);
  invariant(!spec.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  let monitor = useDragSourceMonitor(), connector = useDragSourceConnector(spec.options, spec.previewOptions);
  return useRegisteredDragSource(spec, monitor, connector), [
    useCollectedProps(spec.collect, monitor, connector),
    useConnectDragSource(connector),
    useConnectDragPreview(connector)
  ];
}

// node_modules/react-dnd/dist/hooks/useDrop/connectors.js
var import_react20 = require("react");
function useConnectDropTarget(connector) {
  return (0, import_react20.useMemo)(
    () => connector.hooks.dropTarget(),
    [
      connector
    ]
  );
}

// node_modules/react-dnd/dist/hooks/useDrop/useDropTargetConnector.js
var import_react21 = require("react");
function useDropTargetConnector(options) {
  let manager = useDragDropManager(), connector = (0, import_react21.useMemo)(
    () => new TargetConnector(manager.getBackend()),
    [
      manager
    ]
  );
  return useIsomorphicLayoutEffect(() => (connector.dropTargetOptions = options || null, connector.reconnect(), () => connector.disconnectDropTarget()), [
    options
  ]), connector;
}

// node_modules/react-dnd/dist/hooks/useDrop/useDropTargetMonitor.js
var import_react22 = require("react");
function useDropTargetMonitor() {
  let manager = useDragDropManager();
  return (0, import_react22.useMemo)(
    () => new DropTargetMonitorImpl(manager),
    [
      manager
    ]
  );
}

// node_modules/react-dnd/dist/hooks/useDrop/useAccept.js
var import_react23 = require("react");
function useAccept(spec) {
  let { accept } = spec;
  return (0, import_react23.useMemo)(() => (invariant(spec.accept != null, "accept must be defined"), Array.isArray(accept) ? accept : [
    accept
  ]), [
    accept
  ]);
}

// node_modules/react-dnd/dist/hooks/useDrop/useDropTarget.js
var import_react24 = require("react");

// node_modules/react-dnd/dist/hooks/useDrop/DropTargetImpl.js
var DropTargetImpl = class {
  canDrop() {
    let spec = this.spec, monitor = this.monitor;
    return spec.canDrop ? spec.canDrop(monitor.getItem(), monitor) : !0;
  }
  hover() {
    let spec = this.spec, monitor = this.monitor;
    spec.hover && spec.hover(monitor.getItem(), monitor);
  }
  drop() {
    let spec = this.spec, monitor = this.monitor;
    if (spec.drop)
      return spec.drop(monitor.getItem(), monitor);
  }
  constructor(spec, monitor) {
    this.spec = spec, this.monitor = monitor;
  }
};

// node_modules/react-dnd/dist/hooks/useDrop/useDropTarget.js
function useDropTarget(spec, monitor) {
  let dropTarget = (0, import_react24.useMemo)(
    () => new DropTargetImpl(spec, monitor),
    [
      monitor
    ]
  );
  return (0, import_react24.useEffect)(() => {
    dropTarget.spec = spec;
  }, [
    spec
  ]), dropTarget;
}

// node_modules/react-dnd/dist/hooks/useDrop/useRegisteredDropTarget.js
function useRegisteredDropTarget(spec, monitor, connector) {
  let manager = useDragDropManager(), dropTarget = useDropTarget(spec, monitor), accept = useAccept(spec);
  useIsomorphicLayoutEffect(function() {
    let [handlerId, unregister] = registerTarget(accept, dropTarget, manager);
    return monitor.receiveHandlerId(handlerId), connector.receiveHandlerId(handlerId), unregister;
  }, [
    manager,
    monitor,
    dropTarget,
    connector,
    accept.map(
      (a) => a.toString()
    ).join("|")
  ]);
}

// node_modules/react-dnd/dist/hooks/useDrop/useDrop.js
function useDrop(specArg, deps) {
  let spec = useOptionalFactory(specArg, deps), monitor = useDropTargetMonitor(), connector = useDropTargetConnector(spec.options);
  return useRegisteredDropTarget(spec, monitor, connector), [
    useCollectedProps(spec.collect, monitor, connector),
    useConnectDropTarget(connector)
  ];
}

// node_modules/react-dnd-html5-backend/dist/utils/js_utils.js
function memoize(fn) {
  let result = null;
  return () => (result == null && (result = fn()), result);
}
function without2(items, item) {
  return items.filter(
    (i) => i !== item
  );
}
function union(itemsA, itemsB) {
  let set = /* @__PURE__ */ new Set(), insertItem = (item) => set.add(item);
  itemsA.forEach(insertItem), itemsB.forEach(insertItem);
  let result = [];
  return set.forEach(
    (key) => result.push(key)
  ), result;
}

// node_modules/react-dnd-html5-backend/dist/EnterLeaveCounter.js
var EnterLeaveCounter = class {
  enter(enteringNode) {
    let previousLength = this.entered.length, isNodeEntered = (node) => this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode));
    return this.entered = union(this.entered.filter(isNodeEntered), [
      enteringNode
    ]), previousLength === 0 && this.entered.length > 0;
  }
  leave(leavingNode) {
    let previousLength = this.entered.length;
    return this.entered = without2(this.entered.filter(this.isNodeInDocument), leavingNode), previousLength > 0 && this.entered.length === 0;
  }
  reset() {
    this.entered = [];
  }
  constructor(isNodeInDocument) {
    this.entered = [], this.isNodeInDocument = isNodeInDocument;
  }
};

// node_modules/react-dnd-html5-backend/dist/NativeDragSources/NativeDragSource.js
var NativeDragSource = class {
  initializeExposedProperties() {
    Object.keys(this.config.exposeProperties).forEach((property) => {
      Object.defineProperty(this.item, property, {
        configurable: !0,
        enumerable: !0,
        get() {
          return console.warn(`Browser doesn't allow reading "${property}" until the drop event.`), null;
        }
      });
    });
  }
  loadDataTransfer(dataTransfer) {
    if (dataTransfer) {
      let newProperties = {};
      Object.keys(this.config.exposeProperties).forEach((property) => {
        let propertyFn = this.config.exposeProperties[property];
        propertyFn != null && (newProperties[property] = {
          value: propertyFn(dataTransfer, this.config.matchesTypes),
          configurable: !0,
          enumerable: !0
        });
      }), Object.defineProperties(this.item, newProperties);
    }
  }
  canDrag() {
    return !0;
  }
  beginDrag() {
    return this.item;
  }
  isDragging(monitor, handle) {
    return handle === monitor.getSourceId();
  }
  endDrag() {
  }
  constructor(config) {
    this.config = config, this.item = {}, this.initializeExposedProperties();
  }
};

// node_modules/react-dnd-html5-backend/dist/NativeTypes.js
var NativeTypes_exports = {};
__export(NativeTypes_exports, {
  FILE: () => FILE,
  HTML: () => HTML,
  TEXT: () => TEXT,
  URL: () => URL2
});
var FILE = "__NATIVE_FILE__", URL2 = "__NATIVE_URL__", TEXT = "__NATIVE_TEXT__", HTML = "__NATIVE_HTML__";

// node_modules/react-dnd-html5-backend/dist/NativeDragSources/getDataFromDataTransfer.js
function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
  let result = typesToTry.reduce(
    (resultSoFar, typeToTry) => resultSoFar || dataTransfer.getData(typeToTry),
    ""
  );
  return result ?? defaultValue;
}

// node_modules/react-dnd-html5-backend/dist/NativeDragSources/nativeTypesConfig.js
var nativeTypesConfig = {
  [FILE]: {
    exposeProperties: {
      files: (dataTransfer) => Array.prototype.slice.call(dataTransfer.files),
      items: (dataTransfer) => dataTransfer.items,
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Files"
    ]
  },
  [HTML]: {
    exposeProperties: {
      html: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, ""),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Html",
      "text/html"
    ]
  },
  [URL2]: {
    exposeProperties: {
      urls: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, "").split(`
`),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Url",
      "text/uri-list"
    ]
  },
  [TEXT]: {
    exposeProperties: {
      text: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, ""),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Text",
      "text/plain"
    ]
  }
};

// node_modules/react-dnd-html5-backend/dist/NativeDragSources/index.js
function createNativeDragSource(type, dataTransfer) {
  let config = nativeTypesConfig[type];
  if (!config)
    throw new Error(`native type ${type} has no configuration`);
  let result = new NativeDragSource(config);
  return result.loadDataTransfer(dataTransfer), result;
}
function matchNativeItemType(dataTransfer) {
  if (!dataTransfer)
    return null;
  let dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
  return Object.keys(nativeTypesConfig).filter((nativeItemType) => {
    let typeConfig = nativeTypesConfig[nativeItemType];
    return typeConfig?.matchesTypes ? typeConfig.matchesTypes.some(
      (t) => dataTransferTypes.indexOf(t) > -1
    ) : !1;
  })[0] || null;
}

// node_modules/react-dnd-html5-backend/dist/BrowserDetector.js
var isFirefox = memoize(
  () => /firefox/i.test(navigator.userAgent)
), isSafari = memoize(
  () => Boolean(window.safari)
);

// node_modules/react-dnd-html5-backend/dist/MonotonicInterpolant.js
var MonotonicInterpolant = class {
  interpolate(x) {
    let { xs, ys, c1s, c2s, c3s } = this, i = xs.length - 1;
    if (x === xs[i])
      return ys[i];
    let low = 0, high = c3s.length - 1, mid;
    for (; low <= high; ) {
      mid = Math.floor(0.5 * (low + high));
      let xHere = xs[mid];
      if (xHere < x)
        low = mid + 1;
      else if (xHere > x)
        high = mid - 1;
      else
        return ys[mid];
    }
    i = Math.max(0, high);
    let diff = x - xs[i], diffSq = diff * diff;
    return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
  }
  constructor(xs, ys) {
    let { length } = xs, indexes = [];
    for (let i = 0; i < length; i++)
      indexes.push(i);
    indexes.sort(
      (a, b) => xs[a] < xs[b] ? -1 : 1
    );
    let dys = [], dxs = [], ms = [], dx, dy;
    for (let i1 = 0; i1 < length - 1; i1++)
      dx = xs[i1 + 1] - xs[i1], dy = ys[i1 + 1] - ys[i1], dxs.push(dx), dys.push(dy), ms.push(dy / dx);
    let c1s = [
      ms[0]
    ];
    for (let i2 = 0; i2 < dxs.length - 1; i2++) {
      let m2 = ms[i2], mNext = ms[i2 + 1];
      if (m2 * mNext <= 0)
        c1s.push(0);
      else {
        dx = dxs[i2];
        let dxNext = dxs[i2 + 1], common = dx + dxNext;
        c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
      }
    }
    c1s.push(ms[ms.length - 1]);
    let c2s = [], c3s = [], m;
    for (let i3 = 0; i3 < c1s.length - 1; i3++) {
      m = ms[i3];
      let c1 = c1s[i3], invDx = 1 / dxs[i3], common = c1 + c1s[i3 + 1] - m - m;
      c2s.push((m - c1 - common) * invDx), c3s.push(common * invDx * invDx);
    }
    this.xs = xs, this.ys = ys, this.c1s = c1s, this.c2s = c2s, this.c3s = c3s;
  }
};

// node_modules/react-dnd-html5-backend/dist/OffsetUtils.js
var ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
  let el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
  if (!el)
    return null;
  let { top, left } = el.getBoundingClientRect();
  return {
    x: left,
    y: top
  };
}
function getEventClientOffset(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function isImageNode(node) {
  var ref;
  return node.nodeName === "IMG" && (isFirefox() || !(!((ref = document.documentElement) === null || ref === void 0) && ref.contains(node)));
}
function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
  let dragPreviewWidth = isImage ? dragPreview.width : sourceWidth, dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
  return isSafari() && isImage && (dragPreviewHeight /= window.devicePixelRatio, dragPreviewWidth /= window.devicePixelRatio), {
    dragPreviewWidth,
    dragPreviewHeight
  };
}
function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
  let isImage = isImageNode(dragPreview), dragPreviewNodeOffsetFromClient = getNodeClientOffset(isImage ? sourceNode : dragPreview), offsetFromDragPreview = {
    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
  }, { offsetWidth: sourceWidth, offsetHeight: sourceHeight } = sourceNode, { anchorX, anchorY } = anchorPoint, { dragPreviewWidth, dragPreviewHeight } = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight), calculateYOffset = () => {
    let y = new MonotonicInterpolant([
      0,
      0.5,
      1
    ], [
      // Dock to the top
      offsetFromDragPreview.y,
      // Align at the center
      offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
      // Dock to the bottom
      offsetFromDragPreview.y + dragPreviewHeight - sourceHeight
    ]).interpolate(anchorY);
    return isSafari() && isImage && (y += (window.devicePixelRatio - 1) * dragPreviewHeight), y;
  }, calculateXOffset = () => new MonotonicInterpolant([
    0,
    0.5,
    1
  ], [
    // Dock to the left
    offsetFromDragPreview.x,
    // Align at the center
    offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
    // Dock to the right
    offsetFromDragPreview.x + dragPreviewWidth - sourceWidth
  ]).interpolate(anchorX), { offsetX, offsetY } = offsetPoint, isManualOffsetX = offsetX === 0 || offsetX, isManualOffsetY = offsetY === 0 || offsetY;
  return {
    x: isManualOffsetX ? offsetX : calculateXOffset(),
    y: isManualOffsetY ? offsetY : calculateYOffset()
  };
}

// node_modules/react-dnd-html5-backend/dist/OptionsReader.js
var OptionsReader = class {
  get window() {
    if (this.globalContext)
      return this.globalContext;
    if (typeof window < "u")
      return window;
  }
  get document() {
    var ref;
    return !((ref = this.globalContext) === null || ref === void 0) && ref.document ? this.globalContext.document : this.window ? this.window.document : void 0;
  }
  get rootElement() {
    var ref;
    return ((ref = this.optionsArgs) === null || ref === void 0 ? void 0 : ref.rootElement) || this.window;
  }
  constructor(globalContext, options) {
    this.ownerDocument = null, this.globalContext = globalContext, this.optionsArgs = options;
  }
};

// node_modules/react-dnd-html5-backend/dist/HTML5BackendImpl.js
function _defineProperty5(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _objectSpread5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}, ownKeys = Object.keys(source);
    typeof Object.getOwnPropertySymbols == "function" && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
      return Object.getOwnPropertyDescriptor(source, sym).enumerable;
    }))), ownKeys.forEach(function(key) {
      _defineProperty5(target, key, source[key]);
    });
  }
  return target;
}
var HTML5BackendImpl = class {
  /**
  * Generate profiling statistics for the HTML5Backend.
  */
  profile() {
    var ref, ref1;
    return {
      sourcePreviewNodes: this.sourcePreviewNodes.size,
      sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
      sourceNodeOptions: this.sourceNodeOptions.size,
      sourceNodes: this.sourceNodes.size,
      dragStartSourceIds: ((ref = this.dragStartSourceIds) === null || ref === void 0 ? void 0 : ref.length) || 0,
      dropTargetIds: this.dropTargetIds.length,
      dragEnterTargetIds: this.dragEnterTargetIds.length,
      dragOverTargetIds: ((ref1 = this.dragOverTargetIds) === null || ref1 === void 0 ? void 0 : ref1.length) || 0
    };
  }
  // public for test
  get window() {
    return this.options.window;
  }
  get document() {
    return this.options.document;
  }
  /**
  * Get the root element to use for event subscriptions
  */
  get rootElement() {
    return this.options.rootElement;
  }
  setup() {
    let root = this.rootElement;
    if (root !== void 0) {
      if (root.__isReactDndBackendSetUp)
        throw new Error("Cannot have two HTML5 backends at the same time.");
      root.__isReactDndBackendSetUp = !0, this.addEventListeners(root);
    }
  }
  teardown() {
    let root = this.rootElement;
    if (root !== void 0 && (root.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId)) {
      var ref;
      (ref = this.window) === null || ref === void 0 || ref.cancelAnimationFrame(this.asyncEndDragFrameId);
    }
  }
  connectDragPreview(sourceId, node, options) {
    return this.sourcePreviewNodeOptions.set(sourceId, options), this.sourcePreviewNodes.set(sourceId, node), () => {
      this.sourcePreviewNodes.delete(sourceId), this.sourcePreviewNodeOptions.delete(sourceId);
    };
  }
  connectDragSource(sourceId, node, options) {
    this.sourceNodes.set(sourceId, node), this.sourceNodeOptions.set(sourceId, options);
    let handleDragStart = (e) => this.handleDragStart(e, sourceId), handleSelectStart = (e) => this.handleSelectStart(e);
    return node.setAttribute("draggable", "true"), node.addEventListener("dragstart", handleDragStart), node.addEventListener("selectstart", handleSelectStart), () => {
      this.sourceNodes.delete(sourceId), this.sourceNodeOptions.delete(sourceId), node.removeEventListener("dragstart", handleDragStart), node.removeEventListener("selectstart", handleSelectStart), node.setAttribute("draggable", "false");
    };
  }
  connectDropTarget(targetId, node) {
    let handleDragEnter = (e) => this.handleDragEnter(e, targetId), handleDragOver = (e) => this.handleDragOver(e, targetId), handleDrop = (e) => this.handleDrop(e, targetId);
    return node.addEventListener("dragenter", handleDragEnter), node.addEventListener("dragover", handleDragOver), node.addEventListener("drop", handleDrop), () => {
      node.removeEventListener("dragenter", handleDragEnter), node.removeEventListener("dragover", handleDragOver), node.removeEventListener("drop", handleDrop);
    };
  }
  addEventListeners(target) {
    target.addEventListener && (target.addEventListener("dragstart", this.handleTopDragStart), target.addEventListener("dragstart", this.handleTopDragStartCapture, !0), target.addEventListener("dragend", this.handleTopDragEndCapture, !0), target.addEventListener("dragenter", this.handleTopDragEnter), target.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), target.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), target.addEventListener("dragover", this.handleTopDragOver), target.addEventListener("dragover", this.handleTopDragOverCapture, !0), target.addEventListener("drop", this.handleTopDrop), target.addEventListener("drop", this.handleTopDropCapture, !0));
  }
  removeEventListeners(target) {
    target.removeEventListener && (target.removeEventListener("dragstart", this.handleTopDragStart), target.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), target.removeEventListener("dragend", this.handleTopDragEndCapture, !0), target.removeEventListener("dragenter", this.handleTopDragEnter), target.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), target.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), target.removeEventListener("dragover", this.handleTopDragOver), target.removeEventListener("dragover", this.handleTopDragOverCapture, !0), target.removeEventListener("drop", this.handleTopDrop), target.removeEventListener("drop", this.handleTopDropCapture, !0));
  }
  getCurrentSourceNodeOptions() {
    let sourceId = this.monitor.getSourceId(), sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
    return _objectSpread5({
      dropEffect: this.altKeyPressed ? "copy" : "move"
    }, sourceNodeOptions || {});
  }
  getCurrentDropEffect() {
    return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
  }
  getCurrentSourcePreviewNodeOptions() {
    let sourceId = this.monitor.getSourceId(), sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
    return _objectSpread5({
      anchorX: 0.5,
      anchorY: 0.5,
      captureDraggingState: !1
    }, sourcePreviewNodeOptions || {});
  }
  isDraggingNativeItem() {
    let itemType = this.monitor.getItemType();
    return Object.keys(NativeTypes_exports).some(
      (key) => NativeTypes_exports[key] === itemType
    );
  }
  beginDragNativeItem(type, dataTransfer) {
    this.clearCurrentDragSourceNode(), this.currentNativeSource = createNativeDragSource(type, dataTransfer), this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource), this.actions.beginDrag([
      this.currentNativeHandle
    ]);
  }
  setCurrentDragSourceNode(node) {
    this.clearCurrentDragSourceNode(), this.currentDragSourceNode = node;
    let MOUSE_MOVE_TIMEOUT = 1e3;
    this.mouseMoveTimeoutTimer = setTimeout(() => {
      var ref;
      return (ref = this.rootElement) === null || ref === void 0 ? void 0 : ref.addEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
    }, MOUSE_MOVE_TIMEOUT);
  }
  clearCurrentDragSourceNode() {
    if (this.currentDragSourceNode) {
      if (this.currentDragSourceNode = null, this.rootElement) {
        var ref;
        (ref = this.window) === null || ref === void 0 || ref.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
      }
      return this.mouseMoveTimeoutTimer = null, !0;
    }
    return !1;
  }
  handleDragStart(e, sourceId) {
    e.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(sourceId));
  }
  handleDragEnter(_e, targetId) {
    this.dragEnterTargetIds.unshift(targetId);
  }
  handleDragOver(_e, targetId) {
    this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(targetId);
  }
  handleDrop(_e, targetId) {
    this.dropTargetIds.unshift(targetId);
  }
  constructor(manager, globalContext, options) {
    this.sourcePreviewNodes = /* @__PURE__ */ new Map(), this.sourcePreviewNodeOptions = /* @__PURE__ */ new Map(), this.sourceNodes = /* @__PURE__ */ new Map(), this.sourceNodeOptions = /* @__PURE__ */ new Map(), this.dragStartSourceIds = null, this.dropTargetIds = [], this.dragEnterTargetIds = [], this.currentNativeSource = null, this.currentNativeHandle = null, this.currentDragSourceNode = null, this.altKeyPressed = !1, this.mouseMoveTimeoutTimer = null, this.asyncEndDragFrameId = null, this.dragOverTargetIds = null, this.lastClientOffset = null, this.hoverRafId = null, this.getSourceClientOffset = (sourceId) => {
      let source = this.sourceNodes.get(sourceId);
      return source && getNodeClientOffset(source) || null;
    }, this.endDragNativeItem = () => {
      this.isDraggingNativeItem() && (this.actions.endDrag(), this.currentNativeHandle && this.registry.removeSource(this.currentNativeHandle), this.currentNativeHandle = null, this.currentNativeSource = null);
    }, this.isNodeInDocument = (node) => Boolean(node && this.document && this.document.body && this.document.body.contains(node)), this.endDragIfSourceWasRemovedFromDOM = () => {
      let node = this.currentDragSourceNode;
      node == null || this.isNodeInDocument(node) || (this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover());
    }, this.scheduleHover = (dragOverTargetIds) => {
      this.hoverRafId === null && typeof requestAnimationFrame < "u" && (this.hoverRafId = requestAnimationFrame(() => {
        this.monitor.isDragging() && this.actions.hover(dragOverTargetIds || [], {
          clientOffset: this.lastClientOffset
        }), this.hoverRafId = null;
      }));
    }, this.cancelHover = () => {
      this.hoverRafId !== null && typeof cancelAnimationFrame < "u" && (cancelAnimationFrame(this.hoverRafId), this.hoverRafId = null);
    }, this.handleTopDragStartCapture = () => {
      this.clearCurrentDragSourceNode(), this.dragStartSourceIds = [];
    }, this.handleTopDragStart = (e) => {
      if (e.defaultPrevented)
        return;
      let { dragStartSourceIds } = this;
      this.dragStartSourceIds = null;
      let clientOffset = getEventClientOffset(e);
      this.monitor.isDragging() && (this.actions.endDrag(), this.cancelHover()), this.actions.beginDrag(dragStartSourceIds || [], {
        publishSource: !1,
        getSourceClientOffset: this.getSourceClientOffset,
        clientOffset
      });
      let { dataTransfer } = e, nativeType = matchNativeItemType(dataTransfer);
      if (this.monitor.isDragging()) {
        if (dataTransfer && typeof dataTransfer.setDragImage == "function") {
          let sourceId = this.monitor.getSourceId(), sourceNode = this.sourceNodes.get(sourceId), dragPreview = this.sourcePreviewNodes.get(sourceId) || sourceNode;
          if (dragPreview) {
            let { anchorX, anchorY, offsetX, offsetY } = this.getCurrentSourcePreviewNodeOptions(), dragPreviewOffset = getDragPreviewOffset(sourceNode, dragPreview, clientOffset, {
              anchorX,
              anchorY
            }, {
              offsetX,
              offsetY
            });
            dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
          }
        }
        try {
          dataTransfer?.setData("application/json", {});
        } catch {
        }
        this.setCurrentDragSourceNode(e.target);
        let { captureDraggingState } = this.getCurrentSourcePreviewNodeOptions();
        captureDraggingState ? this.actions.publishDragSource() : setTimeout(
          () => this.actions.publishDragSource(),
          0
        );
      } else if (nativeType)
        this.beginDragNativeItem(nativeType);
      else {
        if (dataTransfer && !dataTransfer.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute("draggable")))
          return;
        e.preventDefault();
      }
    }, this.handleTopDragEndCapture = () => {
      this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
    }, this.handleTopDragEnterCapture = (e) => {
      if (this.dragEnterTargetIds = [], this.isDraggingNativeItem()) {
        var ref;
        (ref = this.currentNativeSource) === null || ref === void 0 || ref.loadDataTransfer(e.dataTransfer);
      }
      if (!this.enterLeaveCounter.enter(e.target) || this.monitor.isDragging())
        return;
      let { dataTransfer } = e, nativeType = matchNativeItemType(dataTransfer);
      nativeType && this.beginDragNativeItem(nativeType, dataTransfer);
    }, this.handleTopDragEnter = (e) => {
      let { dragEnterTargetIds } = this;
      if (this.dragEnterTargetIds = [], !this.monitor.isDragging())
        return;
      this.altKeyPressed = e.altKey, dragEnterTargetIds.length > 0 && this.actions.hover(dragEnterTargetIds, {
        clientOffset: getEventClientOffset(e)
      }), dragEnterTargetIds.some(
        (targetId) => this.monitor.canDropOnTarget(targetId)
      ) && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = this.getCurrentDropEffect()));
    }, this.handleTopDragOverCapture = (e) => {
      if (this.dragOverTargetIds = [], this.isDraggingNativeItem()) {
        var ref;
        (ref = this.currentNativeSource) === null || ref === void 0 || ref.loadDataTransfer(e.dataTransfer);
      }
    }, this.handleTopDragOver = (e) => {
      let { dragOverTargetIds } = this;
      if (this.dragOverTargetIds = [], !this.monitor.isDragging()) {
        e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none");
        return;
      }
      this.altKeyPressed = e.altKey, this.lastClientOffset = getEventClientOffset(e), this.scheduleHover(dragOverTargetIds), (dragOverTargetIds || []).some(
        (targetId) => this.monitor.canDropOnTarget(targetId)
      ) ? (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = this.getCurrentDropEffect())) : this.isDraggingNativeItem() ? e.preventDefault() : (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none"));
    }, this.handleTopDragLeaveCapture = (e) => {
      this.isDraggingNativeItem() && e.preventDefault(), this.enterLeaveCounter.leave(e.target) && (this.isDraggingNativeItem() && setTimeout(
        () => this.endDragNativeItem(),
        0
      ), this.cancelHover());
    }, this.handleTopDropCapture = (e) => {
      if (this.dropTargetIds = [], this.isDraggingNativeItem()) {
        var ref;
        e.preventDefault(), (ref = this.currentNativeSource) === null || ref === void 0 || ref.loadDataTransfer(e.dataTransfer);
      } else
        matchNativeItemType(e.dataTransfer) && e.preventDefault();
      this.enterLeaveCounter.reset();
    }, this.handleTopDrop = (e) => {
      let { dropTargetIds } = this;
      this.dropTargetIds = [], this.actions.hover(dropTargetIds, {
        clientOffset: getEventClientOffset(e)
      }), this.actions.drop({
        dropEffect: this.getCurrentDropEffect()
      }), this.isDraggingNativeItem() ? this.endDragNativeItem() : this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
    }, this.handleSelectStart = (e) => {
      let target = e.target;
      typeof target.dragDrop == "function" && (target.tagName === "INPUT" || target.tagName === "SELECT" || target.tagName === "TEXTAREA" || target.isContentEditable || (e.preventDefault(), target.dragDrop()));
    }, this.options = new OptionsReader(globalContext, options), this.actions = manager.getActions(), this.monitor = manager.getMonitor(), this.registry = manager.getRegistry(), this.enterLeaveCounter = new EnterLeaveCounter(this.isNodeInDocument);
  }
};

// node_modules/react-dnd-html5-backend/dist/index.js
var HTML5Backend = function(manager, context, options) {
  return new HTML5BackendImpl(manager, context, options);
};

// app/routes/todos.tsx
var import_node6 = require("@remix-run/node"), import_react27 = require("@remix-run/react"), import_react28 = require("react");

// app/components/Todo.tsx
var import_react25 = require("react"), import_react26 = require("@remix-run/react");

// app/assets/mario.mp3
var mario_default = "/build/_assets/mario-4HVYHUNP.mp3";

// app/components/icons/index.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), EditButton = () => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
      },
      void 0,
      !1,
      {
        fileName: "app/components/icons/index.tsx",
        lineNumber: 9,
        columnNumber: 3
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/icons/index.tsx",
    lineNumber: 2,
    columnNumber: 2
  },
  this
), DeleteButton = () => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { type: "submit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      },
      void 0,
      !1,
      {
        fileName: "app/components/icons/index.tsx",
        lineNumber: 27,
        columnNumber: 4
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/icons/index.tsx",
    lineNumber: 20,
    columnNumber: 3
  },
  this
) }, void 0, !1, {
  fileName: "app/components/icons/index.tsx",
  lineNumber: 19,
  columnNumber: 2
}, this), MoveToToday = () => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { type: "submit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M5 11l7-7 7 7M5 19l7-7 7 7"
      },
      void 0,
      !1,
      {
        fileName: "app/components/icons/index.tsx",
        lineNumber: 46,
        columnNumber: 4
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/icons/index.tsx",
    lineNumber: 39,
    columnNumber: 3
  },
  this
) }, void 0, !1, {
  fileName: "app/components/icons/index.tsx",
  lineNumber: 38,
  columnNumber: 2
}, this);

// app/components/Todo.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), TodoItem = ({ isDragging, todo, today, current }) => {
  let [audio, setAudio] = (0, import_react25.useState)(null), [editable, setEditable] = (0, import_react25.useState)(!1), fetcher = (0, import_react26.useFetcher)(), isDeleting = fetcher.formData?.get("id") === todo.id && fetcher.formData?.get("_action") === "delete", isChangingStatus = fetcher.formData?.get("id") === todo.id && fetcher.formData?.get("_action") === "changeStatus", handleChange = (event) => fetcher.submit(event.currentTarget, { replace: !0 });
  (0, import_react25.useEffect)(() => {
    setAudio(new Audio(mario_default));
  }, []);
  let start = (status) => {
    if (status === "OUTSTANDING") {
      audio.crossOrigin = "anonymous";
      var playPromise = audio.play();
      playPromise !== void 0 && playPromise.then(function() {
      }).catch(function() {
      });
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    "li",
    {
      hidden: isDeleting,
      className: "py-1 flex text-xl md:text-2xl",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: !editable && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(fetcher.Form, { replace: !0, method: "post", onChange: handleChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              type: "checkbox",
              defaultChecked: todo.status === "COMPLETED",
              value: todo.status,
              name: "status"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Todo.tsx",
              lineNumber: 69,
              columnNumber: 9
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/Todo.tsx",
            lineNumber: 68,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", name: "id", value: todo.id }, void 0, !1, {
            fileName: "app/components/Todo.tsx",
            lineNumber: 76,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", name: "_action", value: "changeStatus" }, void 0, !1, {
            fileName: "app/components/Todo.tsx",
            lineNumber: 77,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "div",
            {
              onClick: () => {
                start(todo.status);
              },
              className: `${todo.status === "COMPLETED" || isChangingStatus ? "line-through" : ""} ml-3 text-gray-800`,
              children: todo.text
            },
            void 0,
            !1,
            {
              fileName: "app/components/Todo.tsx",
              lineNumber: 78,
              columnNumber: 8
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Todo.tsx",
          lineNumber: 67,
          columnNumber: 7
        }, this) }, void 0, !1, {
          fileName: "app/components/Todo.tsx",
          lineNumber: 66,
          columnNumber: 6
        }, this) }, void 0, !1, {
          fileName: "app/components/Todo.tsx",
          lineNumber: 64,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex", children: [
          editable ? "" : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(fetcher.Form, { replace: !0, method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "ml-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", name: "id", value: todo.id }, void 0, !1, {
              fileName: "app/components/Todo.tsx",
              lineNumber: 98,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", name: "_action", value: "delete" }, void 0, !1, {
              fileName: "app/components/Todo.tsx",
              lineNumber: 99,
              columnNumber: 8
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Todo.tsx",
            lineNumber: 97,
            columnNumber: 7
          }, this) }, void 0, !1, {
            fileName: "app/components/Todo.tsx",
            lineNumber: 96,
            columnNumber: 6
          }, this),
          !editable && todo.status === "OUTSTANDING" ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "button",
            {
              onClick: () => setEditable(!0),
              className: "flex justify-end",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(EditButton, {}, void 0, !1, {
                fileName: "app/components/Todo.tsx",
                lineNumber: 110,
                columnNumber: 7
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Todo.tsx",
              lineNumber: 106,
              columnNumber: 6
            },
            this
          ) : "",
          !editable && !today && todo.status === "OUTSTANDING" ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(fetcher.Form, { replace: !0, method: "post", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", name: "id", value: todo.id }, void 0, !1, {
              fileName: "app/components/Todo.tsx",
              lineNumber: 117,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", name: "_action", value: "moveToToday" }, void 0, !1, {
              fileName: "app/components/Todo.tsx",
              lineNumber: 118,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(MoveToToday, {}, void 0, !1, {
              fileName: "app/components/Todo.tsx",
              lineNumber: 120,
              columnNumber: 8
            }, this) }, void 0, !1, {
              fileName: "app/components/Todo.tsx",
              lineNumber: 119,
              columnNumber: 7
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Todo.tsx",
            lineNumber: 116,
            columnNumber: 6
          }, this) : "",
          editable ? "" : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_react26.Link,
            {
              className: `${todo.notes ? "text-black" : "text-slate-300"}`,
              to: `/todos/notes/${todo.id}?year=${current.year}&month=${current.month}&day=${current.day}`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-6 w-6",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  strokeWidth: 2,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Todo.tsx",
                      lineNumber: 139,
                      columnNumber: 8
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Todo.tsx",
                  lineNumber: 131,
                  columnNumber: 7
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/Todo.tsx",
              lineNumber: 127,
              columnNumber: 6
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Todo.tsx",
          lineNumber: 94,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "bg-pink-200 flex flex-wrap", children: [
          editable && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(fetcher.Form, { replace: !0, method: "post", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "input",
              {
                defaultValue: todo.text,
                className: "focus:border-b-2 focus:outline-none text-2xl appearance-none bg-pink-200",
                type: "text",
                name: "text"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Todo.tsx",
                lineNumber: 154,
                columnNumber: 8
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/Todo.tsx",
              lineNumber: 153,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", name: "id", value: todo.id }, void 0, !1, {
              fileName: "app/components/Todo.tsx",
              lineNumber: 161,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { hidden: !0, type: "submit", name: "_action", value: "edit", children: "Edit" }, void 0, !1, {
              fileName: "app/components/Todo.tsx",
              lineNumber: 163,
              columnNumber: 8
            }, this) }, void 0, !1, {
              fileName: "app/components/Todo.tsx",
              lineNumber: 162,
              columnNumber: 7
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Todo.tsx",
            lineNumber: 152,
            columnNumber: 6
          }, this),
          editable && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "button",
            {
              onClick: () => {
                setEditable(!1);
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-6 w-6",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M6 18L18 6M6 6l12 12"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Todo.tsx",
                      lineNumber: 182,
                      columnNumber: 8
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Todo.tsx",
                  lineNumber: 175,
                  columnNumber: 7
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/Todo.tsx",
              lineNumber: 170,
              columnNumber: 6
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Todo.tsx",
          lineNumber: 150,
          columnNumber: 4
        }, this)
      ]
    },
    todo.id,
    !0,
    {
      fileName: "app/components/Todo.tsx",
      lineNumber: 59,
      columnNumber: 3
    },
    this
  );
};

// app/utils/index.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), rating = (percentage) => {
  if (percentage === 100)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: "\u{1F603}" }, void 0, !1, {
      fileName: "app/utils/index.tsx",
      lineNumber: 2,
      columnNumber: 33
    }, this);
  if (percentage > 80)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: "\u{1F642}" }, void 0, !1, {
      fileName: "app/utils/index.tsx",
      lineNumber: 3,
      columnNumber: 30
    }, this);
  if (percentage > 60)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: "\u2639\uFE0F" }, void 0, !1, {
      fileName: "app/utils/index.tsx",
      lineNumber: 4,
      columnNumber: 30
    }, this);
  if (percentage > 40)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: "\u{1F614}" }, void 0, !1, {
      fileName: "app/utils/index.tsx",
      lineNumber: 5,
      columnNumber: 30
    }, this);
  if (percentage > 20)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: "\u{1F622}" }, void 0, !1, {
      fileName: "app/utils/index.tsx",
      lineNumber: 6,
      columnNumber: 30
    }, this);
  if (percentage > 0)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: "\u{1F622}" }, void 0, !1, {
      fileName: "app/utils/index.tsx",
      lineNumber: 7,
      columnNumber: 29
    }, this);
  if (percentage === 0)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: "\u{1F62D}" }, void 0, !1, {
      fileName: "app/utils/index.tsx",
      lineNumber: 8,
      columnNumber: 31
    }, this);
}, dateProvider = (year, month, day) => {
  let current = {};
  current.year = year, current.month = month, current.day = day;
  let date = new Date(year, month - 1, day), longMonth = date.toLocaleString("default", { month: "long" }), t = new Date(date);
  t.setDate(t.getDate() + 1);
  let tomorrow = {};
  tomorrow.day = t.getDate(), tomorrow.month = t.getMonth() + 1, tomorrow.year = t.getFullYear();
  let y = new Date(date);
  y.setDate(y.getDate() - 1);
  let yesterday = {};
  return yesterday.day = y.getDate(), yesterday.month = y.getMonth() + 1, yesterday.year = y.getFullYear(), { yesterday, current, tomorrow, longMonth };
};

// app/routes/todos.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), ItemTypes = {
  TODO_ITEM: "todo"
}, action4 = async ({ request }) => {
  let user = await requireUserEmail(request), formData = await request.formData(), { _action, ...values } = Object.fromEntries(formData), errors = {};
  if (_action === "add")
    return formData.get("text") || (errors.text = "Please provide text!"), Object.keys(errors).length > 0 ? (0, import_node6.json)(errors, { status: 422 }) : await addTodo({ ...values, user });
  if (_action === "edit")
    return await updateTodo({ ...values, user });
  if (_action === "delete") {
    let id = formData.get("id");
    return await deleteTodo(id, user);
  }
  if (_action === "changeStatus") {
    let status = formData.get("status") === "OUTSTANDING" ? "COMPLETED" : "OUTSTANDING";
    return await updateTodo({ ...values, status, user });
  }
  if (_action === "moveAllToToday") {
    let year = formData.get("year"), month = formData.get("month"), day = formData.get("day");
    (await getOutstandingTodosByDate(user, year, month, day)).forEach(async (t) => await moveToToday({ ...t, user }));
  }
  if (_action === "moveToToday")
    return await moveToToday({ ...values, user });
  if (_action === "droppedOnDate") {
    let id = formData.get("id"), year = formData.get("year"), month = formData.get("month"), day = formData.get("day");
    return await moveToDate({ id, year, month, day, user });
  } else
    return null;
}, loader3 = async ({ request, params }) => {
  let user = await getUser(request), url = new URL(request.url), now = /* @__PURE__ */ new Date(), today = {};
  if (today.day = now.getDate(), today.month = now.getMonth() + 1, today.year = now.getFullYear(), !url.searchParams.get("year") && !params.id)
    return (0, import_node6.redirect)(
      `/todos/calendar?year=${today.year}&month=${today.month}&day=${today.day}`
    );
  let urlParams = url.searchParams, { yesterday, current, tomorrow, longMonth } = dateProvider(
    parseInt(urlParams.get("year")),
    parseInt(urlParams.get("month")),
    parseInt(urlParams.get("day"))
  ), todosForDay = await getTodosByDate(
    user.email,
    current.year,
    current.month,
    current.day
  ), completed = todosForDay.filter((i) => i.status === "COMPLETED"), percentage = Math.floor(completed.length / todosForDay.length * 100);
  return {
    todosForDay,
    current,
    yesterday,
    tomorrow,
    longMonth,
    today,
    user,
    percentage
  };
};
function Todos() {
  let {
    todosForDay,
    current,
    percentage,
    yesterday,
    tomorrow,
    longMonth,
    today
  } = (0, import_react27.useLoaderData)(), fetcher = (0, import_react27.useFetcher)(), errors = (0, import_react27.useActionData)(), isAdding = fetcher?.state === "submitting" && fetcher.formData?.get("_action") === "add", isDeleting = fetcher?.state === "submitting" && fetcher.formData?.get("_action") === "delete", formRef = (0, import_react28.useRef)();
  return (0, import_react28.useEffect)(() => {
    isAdding && formRef.current?.reset();
  }, [isAdding]), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DndProvider, { backend: HTML5Backend, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "bg-pink-200 flex flex-wrap", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex-grow overflow-y-hidden md:relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "md:absolute md:inset-0 overflow-y-auto p-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          import_react27.Link,
          {
            to: `/todos/calendar?year=${yesterday.year}&month=${yesterday.month}&day=${yesterday.day}`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-6 w-6",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M7 16l-4-4m0 0l4-4m-4 4h18"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/todos.tsx",
                    lineNumber: 246,
                    columnNumber: 11
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/todos.tsx",
                lineNumber: 239,
                columnNumber: 10
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/todos.tsx",
            lineNumber: 236,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 235,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "text-lg", children: today.day === current.day ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: "Today" }, void 0, !1, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 257,
          columnNumber: 10
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
          current.day,
          " ",
          longMonth,
          " ",
          current.year
        ] }, void 0, !0, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 259,
          columnNumber: 10
        }, this) }, void 0, !1, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 255,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          import_react27.Link,
          {
            to: `/todos/calendar?year=${tomorrow.year}&month=${tomorrow.month}&day=${tomorrow.day}`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-6 w-6",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M17 8l4 4m0 0l-4 4m4-4H3"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/todos.tsx",
                    lineNumber: 275,
                    columnNumber: 11
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/todos.tsx",
                lineNumber: 268,
                columnNumber: 10
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/todos.tsx",
            lineNumber: 265,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 264,
          columnNumber: 8
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/todos.tsx",
        lineNumber: 234,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-3 mb-2 font-bold text-5xl flex flex-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: "TODOS" }, void 0, !1, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 286,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "ml-3", children: [
          " ",
          rating(percentage)
        ] }, void 0, !0, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 287,
          columnNumber: 8
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/todos.tsx",
        lineNumber: 285,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Dustbin, {}, void 0, !1, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 290,
          columnNumber: 8
        }, this),
        today.day !== current.day ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(fetcher.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { hidden: !0, name: "year", value: current.year }, void 0, !1, {
            fileName: "app/routes/todos.tsx",
            lineNumber: 294,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { hidden: !0, name: "month", value: current.month }, void 0, !1, {
            fileName: "app/routes/todos.tsx",
            lineNumber: 295,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { hidden: !0, name: "day", value: current.day }, void 0, !1, {
            fileName: "app/routes/todos.tsx",
            lineNumber: 296,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { type: "submit", name: "_action", value: "moveAllToToday", children: "Move all" }, void 0, !1, {
            fileName: "app/routes/todos.tsx",
            lineNumber: 297,
            columnNumber: 11
          }, this),
          errors?.text ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: errors.text }, void 0, !1, {
            fileName: "app/routes/todos.tsx",
            lineNumber: 300,
            columnNumber: 27
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 293,
          columnNumber: 10
        }, this) }, void 0, !1, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 292,
          columnNumber: 9
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/todos.tsx",
        lineNumber: 289,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("ul", { children: [
        todosForDay.length > 0 ? todosForDay.map((todo) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          Box,
          {
            current,
            today: today.day === current.day,
            todo
          },
          todo.id,
          !1,
          {
            fileName: "app/routes/todos.tsx",
            lineNumber: 308,
            columnNumber: 11
          },
          this
        )) : null,
        todosForDay.length === 0 && today.day === current.day && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { hidden: isAdding, className: "text-2xl", children: "Nothing to do - yipee!" }, void 0, !1, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 317,
          columnNumber: 9
        }, this),
        fetcher.formData?.get("text") && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { className: "py-1 flex text-xl md:text-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "checkbox" }, void 0, !1, {
            fileName: "app/routes/todos.tsx",
            lineNumber: 327,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/todos.tsx",
            lineNumber: 326,
            columnNumber: 12
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "ml-3 text-gray-800", children: fetcher.formData?.get("text") }, void 0, !1, {
            fileName: "app/routes/todos.tsx",
            lineNumber: 329,
            columnNumber: 12
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 325,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 324,
          columnNumber: 10
        }, this) }, void 0, !1, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 323,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/todos.tsx",
        lineNumber: 305,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-full mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(fetcher.Form, { ref: formRef, method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "input",
          {
            className: "w-full focus:border-b-2 focus:outline-none bg-pink-200 focus:border-blue-500 text-lg md:text-2xl appearance-none border-b-2 border-black",
            type: "text",
            name: "text"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/todos.tsx",
            lineNumber: 341,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 340,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "hidden", name: "year", value: current.year }, void 0, !1, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 347,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "hidden", name: "month", value: current.month }, void 0, !1, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 348,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "hidden", name: "day", value: current.day }, void 0, !1, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 349,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { hidden: !0, type: "submit", name: "_action", value: "add" }, void 0, !1, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 351,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 350,
          columnNumber: 10
        }, this),
        errors?.text ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: errors.text }, void 0, !1, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 353,
          columnNumber: 26
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/todos.tsx",
        lineNumber: 339,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/todos.tsx",
        lineNumber: 338,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/routes/todos.tsx",
        lineNumber: 337,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/todos.tsx",
      lineNumber: 233,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/todos.tsx",
      lineNumber: 232,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react27.Outlet, {}, void 0, !1, {
      fileName: "app/routes/todos.tsx",
      lineNumber: 359,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/todos.tsx",
    lineNumber: 231,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/todos.tsx",
    lineNumber: 230,
    columnNumber: 3
  }, this);
}
function Dustbin() {
  let fetcher = (0, import_react27.useFetcher)(), [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.TODO_ITEM,
    drop: (item) => (console.log(item), console.log(`You dropped todo ${item.id}`), fetcher.submit(
      { id: item.id, _action: "delete" },
      {
        method: "post",
        navigate: !1
      }
    ), { id: "Dustbin" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  })), isActive = canDrop && isOver, backgroundColor = "";
  return isActive ? backgroundColor = "bg-green-500" : canDrop && (backgroundColor = "bg-blue-500"), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { ref: drop, role: "Dustbin", className: ` ${backgroundColor}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DeleteButton, {}, void 0, !1, {
      fileName: "app/routes/todos.tsx",
      lineNumber: 401,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/todos.tsx",
      lineNumber: 400,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: fetcher.state === "submitting" ? `You dropped ${fetcher.formData.get(
      "id"
    )} optimistically` : fetcher.data?.message }, void 0, !1, {
      fileName: "app/routes/todos.tsx",
      lineNumber: 404,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/todos.tsx",
      lineNumber: 403,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/todos.tsx",
    lineNumber: 399,
    columnNumber: 3
  }, this);
}
function Box({ todo, current, today }) {
  let [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TODO_ITEM,
    item: { id: todo.id },
    end: (item, monitor) => {
      let dropResult = monitor.getDropResult();
      console.log(dropResult), item && dropResult && console.log(`You dropped ${item.id} into ${dropResult.id}!`);
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId()
    })
  }));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "div",
    {
      ref: drag,
      role: "Box",
      className: `${isDragging ? "opacity-40" : "opacity-100"} cursor-move`,
      "data-testid": `box-${todo.id}`,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        TodoItem,
        {
          isDragging,
          current,
          today,
          todo
        },
        todo.id,
        !1,
        {
          fileName: "app/routes/todos.tsx",
          lineNumber: 443,
          columnNumber: 4
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/routes/todos.tsx",
      lineNumber: 437,
      columnNumber: 3
    },
    this
  );
}

// app/routes/test.tsx
var test_exports = {};
__export(test_exports, {
  default: () => Test
});
var import_react29 = require("react");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Test() {
  let [audio, setAudio] = (0, import_react29.useState)(null);
  (0, import_react29.useEffect)(() => {
    setAudio(new Audio(mario_default));
  }, []);
  let playAudio = () => {
    console.log(audio), audio.crossOrigin = "anonymous";
    var playPromise = audio.play();
    console.log(playPromise), playPromise !== void 0 && playPromise.then(function() {
    }).catch(function(error) {
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    "div",
    {
      onClick: () => {
        playAudio();
      },
      children: "Hello world"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/test.tsx",
      lineNumber: 28,
      columnNumber: 3
    },
    this
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-YA5BYR27.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-KFWTLQHB.js", "/build/_shared/chunk-QHJ6WNJA.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-BXLUXBTM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/algolia": { id: "routes/algolia", parentId: "root", path: "algolia", index: void 0, caseSensitive: void 0, module: "/build/routes/algolia-KVNALKWG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/create-account": { id: "routes/create-account", parentId: "root", path: "create-account", index: void 0, caseSensitive: void 0, module: "/build/routes/create-account-DYEDIHXG.js", imports: ["/build/_shared/chunk-DQANP6B4.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: "index", index: void 0, caseSensitive: void 0, module: "/build/routes/index-I542R3F6.js", imports: ["/build/_shared/chunk-DQANP6B4.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-BGLNBD2E.js", imports: ["/build/_shared/chunk-DQANP6B4.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-GGSXPJWV.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/search": { id: "routes/search", parentId: "root", path: "search", index: void 0, caseSensitive: void 0, module: "/build/routes/search-HXDWZ2TE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/test": { id: "routes/test", parentId: "root", path: "test", index: void 0, caseSensitive: void 0, module: "/build/routes/test-DNCQEQ7Y.js", imports: ["/build/_shared/chunk-TOH3DRH5.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/todos": { id: "routes/todos", parentId: "root", path: "todos", index: void 0, caseSensitive: void 0, module: "/build/routes/todos-FRT6RHOW.js", imports: ["/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-TOH3DRH5.js", "/build/_shared/chunk-DQANP6B4.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "0d0588bc", hmr: { runtime: "/build/_shared/chunk-QHJ6WNJA.js", timestamp: 1770651705269 }, url: "/build/manifest-0D0588BC.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/create-account": {
    id: "routes/create-account",
    parentId: "root",
    path: "create-account",
    index: void 0,
    caseSensitive: void 0,
    module: create_account_exports
  },
  "routes/algolia": {
    id: "routes/algolia",
    parentId: "root",
    path: "algolia",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/search": {
    id: "routes/search",
    parentId: "root",
    path: "search",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "index",
    index: void 0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/todos": {
    id: "routes/todos",
    parentId: "root",
    path: "todos",
    index: void 0,
    caseSensitive: void 0,
    module: todos_exports
  },
  "routes/test": {
    id: "routes/test",
    parentId: "root",
    path: "test",
    index: void 0,
    caseSensitive: void 0,
    module: test_exports
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString, netlifyGraphToken;
  event.authlifyToken != null && (netlifyGraphToken = event.authlifyToken);
  let authHeader = event.headers.authorization, graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  authHeader != null && /Bearer /gi.test(authHeader) && (rawAuthorizationString = authHeader.split(" ")[1]);
  let loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  return Object.keys(loadContext).forEach((key) => {
    loadContext[key] == null && delete loadContext[key];
  }), loadContext;
}
var handler = (0, import_remix_adapter.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "development"
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=server.js.map
