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
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTotalPrice = void 0;
const product_model_1 = require("../product/product.model");
class setTotalPrice {
    static totalPriceSetter(objectId, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield product_model_1.ProductModel.findById(objectId);
            if (product) {
                return product.price * quantity;
            }
        });
    }
}
exports.setTotalPrice = setTotalPrice;
