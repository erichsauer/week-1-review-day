"use strict";
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
var pool = require('../utils/pool');
module.exports = /** @class */ (function () {
    function Profile(_a) {
        var id = _a.id, name = _a.name, character = _a.character, quote = _a.quote;
        this.id = id;
        this.name = name || 'friend';
        this.character = character || 'default character';
        this.quote = quote || 'default quote';
    }
    Profile.insert = function (_a) {
        var name = _a.name, character = _a.character, quote = _a.quote;
        return __awaiter(this, void 0, void 0, function () {
            var rows;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, pool.query("INSERT INTO profiles (name, character, quote) VALUES ($1, $2, $3) RETURNING *", [name, character, quote])];
                    case 1:
                        rows = (_b.sent()).rows;
                        return [2 /*return*/, new Profile(rows[0])];
                }
            });
        });
    };
    Profile.retrieve = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var rows, profiles, rows, profile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!id) return [3 /*break*/, 2];
                        return [4 /*yield*/, pool.query("SELECT * FROM profiles")];
                    case 1:
                        rows = (_a.sent()).rows;
                        profiles = rows.map(function (profile) { return new Profile(profile); });
                        return [2 /*return*/, profiles];
                    case 2: return [4 /*yield*/, pool.query("SELECT * FROM profiles WHERE id=$1", [
                            id,
                        ])];
                    case 3:
                        rows = (_a.sent()).rows;
                        profile = new Profile(rows[0]);
                        return [2 /*return*/, profile];
                }
            });
        });
    };
    Profile.updateById = function (id, _a) {
        var name = _a.name, character = _a.character, quote = _a.quote;
        return __awaiter(this, void 0, void 0, function () {
            var rows;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, pool.query("UPDATE profiles SET name=$1, character=$2, quote=$3 WHERE id=$4 RETURNING *", [name, character, quote, id])];
                    case 1:
                        rows = (_b.sent()).rows;
                        return [2 /*return*/, new Profile(rows[0])];
                }
            });
        });
    };
    Profile.deleteById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var rows;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, pool.query("DELETE FROM profiles WHERE id=$1 RETURNING *", [id])];
                    case 1:
                        rows = (_a.sent()).rows;
                        return [2 /*return*/, new Profile(rows[0])];
                }
            });
        });
    };
    return Profile;
}());
