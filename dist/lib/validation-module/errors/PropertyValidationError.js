"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by kokh0716 on 6/26/2017.
 */
var PropertyValidationError = (function (_super) {
    __extends(PropertyValidationError, _super);
    function PropertyValidationError(componentId) {
        var _this = this;
        var message = "Component with id \"" + componentId + "\" contains wrong property.";
        _this = _super.call(this, message) || this;
        _this.name = 'ComponentNotFoundError';
        return _this;
    }
    return PropertyValidationError;
}(Error));
exports.default = PropertyValidationError;