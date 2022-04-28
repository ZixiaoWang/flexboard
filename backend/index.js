var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("crawler/cache", ["require", "exports", "puppeteer"], function (require, exports, puppeteer_1) {
    "use strict";
    exports.__esModule = true;
    exports.getPage = exports.getBrowser = exports.initCache = void 0;
    var cache = {
        browser: null,
        page: null
    };
    function initCache() {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!!cache.browser) return [3 /*break*/, 2];
                        _a = cache;
                        return [4 /*yield*/, (0, puppeteer_1.launch)()];
                    case 1:
                        _a.browser = _c.sent();
                        _c.label = 2;
                    case 2:
                        if (!!cache.page) return [3 /*break*/, 4];
                        _b = cache;
                        return [4 /*yield*/, cache.browser.newPage()];
                    case 3:
                        _b.page = _c.sent();
                        _c.label = 4;
                    case 4: return [2 /*return*/, true];
                }
            });
        });
    }
    exports.initCache = initCache;
    function getBrowser(force) {
        if (force === void 0) { force = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, initCache()];
                    case 1:
                        _b.sent();
                        if (!force) return [3 /*break*/, 3];
                        cache.browser.close();
                        _a = cache;
                        return [4 /*yield*/, (0, puppeteer_1.launch)()];
                    case 2:
                        _a.browser = _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/, cache.browser];
                }
            });
        });
    }
    exports.getBrowser = getBrowser;
    function getPage(force) {
        if (force === void 0) { force = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, initCache()];
                    case 1:
                        _b.sent();
                        if (!force) return [3 /*break*/, 3];
                        cache.page.close();
                        _a = cache;
                        return [4 /*yield*/, cache.browser.newPage()];
                    case 2:
                        _a.page = _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/, cache.page];
                }
            });
        });
    }
    exports.getPage = getPage;
});
define("crawler/indices", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.ITEMS = void 0;
    exports.ITEMS = [
        {
            "href": "https://en.sse.net.cn/indices/ccfinew.jsp",
            "text": "CCFI",
            "api": "https://en.sse.net.cn/GCSPI/gcspi_ca?indexName=ccfi"
        },
        {
            "href": "https://en.sse.net.cn/indices/scfinew.jsp",
            "text": "SCFI",
            "api": "https://en.sse.net.cn/GCSPI/gcspi_ca?indexName=scfi"
        },
        {
            "href": "https://en.sse.net.cn/indices/scfisnew.jsp",
            "text": "SCFIS",
            "api": "https://en.sse.net.cn/GCSPI/gcspi_ca?indexName=scfis"
        },
        {
            "href": "https://en.sse.net.cn/indices/cbfinew.jsp",
            "text": "CBFI",
            "api": "https://en.sse.net.cn/GCSPI/gcspi_ca?indexName=cbfi"
        },
        {
            "href": "https://en.sse.net.cn/indices/cbcfinew.jsp",
            "text": "CBCFI",
            "api": "https://en.sse.net.cn/GCSPI/gcspi_ca?indexName=cbcfi"
        },
        {
            "href": "https://en.sse.net.cn/indices/cbofinew.jsp",
            "text": "CBOFI",
            "api": "https://en.sse.net.cn/GCSPI/gcspi_ca?indexName=cbofi"
        },
        {
            "href": "https://en.sse.net.cn/indices/cbgfinew.jsp",
            "text": "CBGFI",
            "api": "https://en.sse.net.cn/GCSPI/gcspi_ca?indexName=cbgfi"
        },
        {
            "href": "https://en.sse.net.cn/indices/cdfinew2.jsp",
            "text": "CDFI",
            "api": "https://en.sse.net.cn/GCSPI/gcspi_ca?indexName=cdfi"
        },
        {
            "href": "https://en.sse.net.cn/indices/fdinew2.jsp",
            "text": "FDI",
            "api": "https://en.sse.net.cn/GCSPI/gcspi_ca?indexName=fdi"
        },
        {
            "href": "https://en.sse.net.cn/indices/ctfinew2.jsp",
            "text": "CTFI",
            "api": "https://en.sse.net.cn/GCSPI/gcspi_ca?indexName=ctfi"
        },
        {
            "href": "https://en.sse.net.cn/indices/csinew.jsp",
            "text": "CSI",
            "api": "https://en.sse.net.cn/GCSPI/gcspi_ca?indexName=csi"
        },
        {
            "href": "https://en.sse.net.cn/indices/cicfinew2.jsp",
            "text": "CICFI",
            "api": "https://en.sse.net.cn/GCSPI/gcspi_ca?indexName=cicfi"
        },
        {
            "href": "https://en.sse.net.cn/indices/seafinew2.jsp",
            "text": "SEAFI",
            "api": "https://en.sse.net.cn/GCSPI/gcspi_ca?indexName=seafi"
        },
        {
            "href": "https://en.sse.net.cn/indices/srftinew2.jsp",
            "text": "SRFTI",
            "api": "https://en.sse.net.cn/GCSPI/gcspi_ca?indexName=srfti"
        },
        {
            "href": "https://en.sse.net.cn/indices/brstinew2.jsp",
            "text": "BRSTI",
            "api": "https://en.sse.net.cn/GCSPI/gcspi_ca?indexName=brsti"
        },
        {
            "href": "https://en.sse.net.cn/indices/brtvinew2.jsp",
            "text": "BRTVI",
            "api": "https://en.sse.net.cn/GCSPI/gcspi_ca?indexName=brtvi"
        },
        {
            "href": "https://en.sse.net.cn/indices/brcvinew2.jsp",
            "text": "BRCVI",
            "api": "https://en.sse.net.cn/GCSPI/gcspi_ca?indexName=brcvi"
        },
        {
            "href": "https://en.sse.net.cn/indices/srfinew2.jsp",
            "text": "SRFI",
            "api": "https://en.sse.net.cn/GCSPI/gcspi_ca?indexName=srfi"
        },
        {
            "href": "https://en.sse.net.cn/indices/gcspi_main.jsp",
            "text": "GCSPI",
            "api": "https://en.sse.net.cn/GCSPI/gcspi_ca?indexName=gcspi"
        },
        {
            "href": "https://en.sse.net.cn/indices/gcspi_main.jsp",
            "text": "MTSR",
            "api": "https://en.sse.net.cn/GCSPI/gcspi_ca?indexName=mtsr"
        },
        {
            "href": "https://en.sse.net.cn/indices/gcspi_ca.jsp",
            "text": "CASR",
            "api": "https://en.sse.net.cn/GCSPI/gcspi_ca?indexName=casr"
        },
        {
            "href": "https://en.sse.net.cn/indices/gcspi_port.jsp",
            "text": "PCSR",
            "api": "https://en.sse.net.cn/GCSPI/gcspi_ca?indexName=pcsr"
        },
        {
            "href": "https://en.sse.net.cn/indices/twfi.jsp",
            "text": "TWFI",
            "api": "https://en.sse.net.cn/GCSPI/gcspi_ca?indexName=twfi"
        },
        {
            "href": "https://en.sse.net.cn/indices/ccri.jsp",
            "text": "CCRI",
            "api": "https://en.sse.net.cn/GCSPI/gcspi_ca?indexName=ccri"
        },
    ];
});
define("crawler/task", ["require", "exports", "path", "fs-extra", "crawler/cache"], function (require, exports, path_1, fs_extra_1, cache_1) {
    "use strict";
    exports.__esModule = true;
    exports.task = void 0;
    path_1 = __importDefault(path_1);
    fs_extra_1 = __importDefault(fs_extra_1);
    function task(item) {
        var e_1, _a, e_2, _b;
        return __awaiter(this, void 0, void 0, function () {
            var page, table, trs, rows, trs_1, trs_1_1, tr, row, cells, cells_1, cells_1_1, cell, colspan, rowspan, text, e_2_1, e_1_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, (0, cache_1.getPage)()];
                    case 1:
                        page = _c.sent();
                        return [4 /*yield*/, page.goto(item.href)];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, page.waitForSelector("table.indiceslist")];
                    case 3:
                        _c.sent();
                        return [4 /*yield*/, page.$("table.indiceslist")];
                    case 4:
                        table = _c.sent();
                        if (!table)
                            return [2 /*return*/, []];
                        return [4 /*yield*/, table.$$("tr")];
                    case 5:
                        trs = _c.sent();
                        rows = [];
                        _c.label = 6;
                    case 6:
                        _c.trys.push([6, 27, 28, 33]);
                        trs_1 = __asyncValues(trs);
                        _c.label = 7;
                    case 7: return [4 /*yield*/, trs_1.next()];
                    case 8:
                        if (!(trs_1_1 = _c.sent(), !trs_1_1.done)) return [3 /*break*/, 26];
                        tr = trs_1_1.value;
                        row = [];
                        return [4 /*yield*/, tr.$$("td")];
                    case 9:
                        cells = _c.sent();
                        _c.label = 10;
                    case 10:
                        _c.trys.push([10, 18, 19, 24]);
                        cells_1 = (e_2 = void 0, __asyncValues(cells));
                        _c.label = 11;
                    case 11: return [4 /*yield*/, cells_1.next()];
                    case 12:
                        if (!(cells_1_1 = _c.sent(), !cells_1_1.done)) return [3 /*break*/, 17];
                        cell = cells_1_1.value;
                        return [4 /*yield*/, page.evaluate(function (element) { return element.getAttribute("colspan"); }, cell)];
                    case 13:
                        colspan = (_c.sent()) || 0;
                        return [4 /*yield*/, page.evaluate(function (element) { return element.getAttribute("rowspan"); }, cell)];
                    case 14:
                        rowspan = (_c.sent()) || 0;
                        return [4 /*yield*/, page.evaluate(function (element) { return element.innerText; }, cell)];
                    case 15:
                        text = (_c.sent()) || "";
                        row.push({
                            rowspan: rowspan,
                            colspan: colspan,
                            text: text
                        });
                        _c.label = 16;
                    case 16: return [3 /*break*/, 11];
                    case 17: return [3 /*break*/, 24];
                    case 18:
                        e_2_1 = _c.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 24];
                    case 19:
                        _c.trys.push([19, , 22, 23]);
                        if (!(cells_1_1 && !cells_1_1.done && (_b = cells_1["return"]))) return [3 /*break*/, 21];
                        return [4 /*yield*/, _b.call(cells_1)];
                    case 20:
                        _c.sent();
                        _c.label = 21;
                    case 21: return [3 /*break*/, 23];
                    case 22:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 23: return [7 /*endfinally*/];
                    case 24:
                        rows.push(row);
                        _c.label = 25;
                    case 25: return [3 /*break*/, 7];
                    case 26: return [3 /*break*/, 33];
                    case 27:
                        e_1_1 = _c.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 33];
                    case 28:
                        _c.trys.push([28, , 31, 32]);
                        if (!(trs_1_1 && !trs_1_1.done && (_a = trs_1["return"]))) return [3 /*break*/, 30];
                        return [4 /*yield*/, _a.call(trs_1)];
                    case 29:
                        _c.sent();
                        _c.label = 30;
                    case 30: return [3 /*break*/, 32];
                    case 31:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 32: return [7 /*endfinally*/];
                    case 33: return [4 /*yield*/, fs_extra_1["default"].writeJSON(path_1["default"].resolve(__dirname, "../../frontend/data/" + item.text + ".json"), rows)];
                    case 34:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    exports.task = task;
});
define("crawler/index", ["require", "exports", "colors", "crawler/cache", "crawler/indices", "crawler/task"], function (require, exports, colors_1, cache_2, indices_1, task_1) {
    "use strict";
    exports.__esModule = true;
    exports.crawl = void 0;
    colors_1 = __importDefault(colors_1);
    function crawl() {
        var e_3, _a;
        return __awaiter(this, void 0, void 0, function () {
            var items, items_1, items_1_1, item, e_3_1, browser;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        items = indices_1.ITEMS;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 7, 8, 13]);
                        items_1 = __asyncValues(items);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, items_1.next()];
                    case 3:
                        if (!(items_1_1 = _b.sent(), !items_1_1.done)) return [3 /*break*/, 6];
                        item = items_1_1.value;
                        return [4 /*yield*/, (0, task_1.task)(item)];
                    case 4:
                        _b.sent();
                        console.log(colors_1["default"].green(item.text) + " has finished");
                        _b.label = 5;
                    case 5: return [3 /*break*/, 2];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_3_1 = _b.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _b.trys.push([8, , 11, 12]);
                        if (!(items_1_1 && !items_1_1.done && (_a = items_1["return"]))) return [3 /*break*/, 10];
                        return [4 /*yield*/, _a.call(items_1)];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_3) throw e_3.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13: return [4 /*yield*/, (0, cache_2.getBrowser)()];
                    case 14:
                        browser = _b.sent();
                        browser.close();
                        return [2 /*return*/];
                }
            });
        });
    }
    exports.crawl = crawl;
});
define("index", ["require", "exports", "crawler/index"], function (require, exports, crawler_1) {
    "use strict";
    exports.__esModule = true;
    function main() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Crawling start!");
                        console.log("==============================");
                        return [4 /*yield*/, (0, crawler_1.crawl)()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    main();
});
