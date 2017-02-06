"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var index_1 = require("../../index");
var Post_1 = require("./Post");
var ForeignKey_1 = require("../../lib/annotations/ForeignKey");
var User_1 = require("./User");
var Comment = (function (_super) {
    __extends(Comment, _super);
    function Comment() {
        _super.apply(this, arguments);
    }
    __decorate([
        index_1.PrimaryKey,
        index_1.AutoIncrement,
        index_1.Column, 
        __metadata('design:type', Number)
    ], Comment.prototype, "id", void 0);
    __decorate([
        index_1.Column, 
        __metadata('design:type', String)
    ], Comment.prototype, "text", void 0);
    __decorate([
        ForeignKey_1.ForeignKey(function () { return Post_1.Post; }),
        index_1.Column, 
        __metadata('design:type', Number)
    ], Comment.prototype, "postId", void 0);
    __decorate([
        index_1.BelongsTo(function () { return Post_1.Post; }), 
        __metadata('design:type', Object)
    ], Comment.prototype, "post", void 0);
    __decorate([
        ForeignKey_1.ForeignKey(function () { return User_1.User; }),
        index_1.Column, 
        __metadata('design:type', Number)
    ], Comment.prototype, "userId", void 0);
    __decorate([
        index_1.BelongsTo(function () { return User_1.User; }), 
        __metadata('design:type', Object)
    ], Comment.prototype, "user", void 0);
    Comment = __decorate([
        index_1.Table, 
        __metadata('design:paramtypes', [])
    ], Comment);
    return Comment;
}(index_1.Model));
exports.Comment = Comment;
//# sourceMappingURL=Comment.js.map