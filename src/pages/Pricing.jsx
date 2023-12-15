"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Uses the same styles as Product
const PageNav_1 = __importDefault(require("../components/PageNav"));
const Product_module_css_1 = __importDefault(require("./Product.module.css"));
function Product() {
    return (<main className={Product_module_css_1.default.product}>
      <PageNav_1.default />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers"/>
      </section>
    </main>);
}
exports.default = Product;
