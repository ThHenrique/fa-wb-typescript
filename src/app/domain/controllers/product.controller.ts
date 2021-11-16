import Input from "../services/Number-text.input";

import { BusinessModel, Product as ProductModel } from "../models";

export default class ProductController {
  private input: Input;
  private business: BusinessModel;
  private productList: Array<ProductModel>;

  constructor(business: BusinessModel) {
    this.input = new Input();
    this.business = business;
    this.productList = business.products;
  }

  generatingProductCode() {
    if (this.productList.length > 0) {
      const lastProductCode = this.productList.at(-1);
      let productCode = lastProductCode?.id;
      if (!productCode) return 1;
      return productCode + 1;
    }
    return 0;
  }

  findProduct() {
    let productCode = this.input.number(`Código do Produto: `);

    const productFiltered = this.productList.filter(
      (product) => product.id === productCode
    );

    if (productFiltered.length == 0) {
      console.log("Produto não encontrado, tente novamente!");

      return this.findProduct();
    }
    return productFiltered[0];
  }

  public create(): void {
    console.log("\nInício do cadastro do produto");

    const name = this.input.text(`Nome: `);
    const price = this.input.number(`Preço: `);
    const amount = this.input.number(`Quantidade: `);
    const productCode: number = this.generatingProductCode();
    const product = new ProductModel(productCode, name, price, amount);

    this.productList.push(product);
    console.log("\nCadastro concluído :)\n");
  }

  public index(): void {
    console.log(`\nLista de produtos:`);
    this.productList.forEach((product) => {
      console.log(`
      Código do produto: ${product.id}
      Nome: ${product.name}
      Preço: R$ ${product.price}
      Quantidade: ${product.amount}
      --------------------------------------`);
    });
    console.log(`\n`);
  }

  public show(): void {
    const product: ProductModel = this.findProduct();
    console.log(`
    Nome: ${product.name}
    Preço: R$ ${product.price}
    Quantidade: ${product.amount}
    --------------------------------------`);
    console.log(`\n`);
  }

  public put(): void {
    const product: ProductModel = this.findProduct();
    let price = this.input.number(`Atualizar preço do produto: `);
    let amount = this.input.number(`Atualizar quantidade: `);
    const payload = { amount, price };
    product.update = payload;
    console.log(`\n`);
  }

  public delete(): void {
    const product: ProductModel = this.findProduct();

    const productListUpdated = this.productList.filter(
      (productRemoving: ProductModel) => {
        return productRemoving.id !== product.id;
      }
    );

    this.business.setListProduct(productListUpdated);
    console.log(`\n`);
  }
}
