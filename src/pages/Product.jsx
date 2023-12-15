"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PageNav_1 = __importDefault(require("../components/PageNav"));
const Product_module_css_1 = __importDefault(require("./Product.module.css"));
function Product() {
    return (<main className={Product_module_css_1.default.product}>
      <PageNav_1.default />
      <section>
        <img src="img-1.jpg" alt="person with dog overlooking mountain with sunset"/>
        <div>
          <h2>About WorldWide.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </section>
    </main>);
}
exports.default = Product;
