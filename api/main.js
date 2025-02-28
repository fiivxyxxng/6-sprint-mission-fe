import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./ArticleService.js";
import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./ProductService.js";

/**
 * 게시글 API 테스트
 */
console.log("게시글 목록 조회:");
const articletList = await getArticleList({ page: 1, pageSize: 100 });
console.log(articletList);

console.log("게시글 상세 조회:");
const article = await getArticle(182);
console.log(article);

console.log("게시글 등록:");
const newArticle = await createArticle({
  title: "새 게시글",
  content: "API 테스트",
  image: "https://example.com/test.jpg",
});
console.log(newArticle);

console.log("게시글 수정:");
const patchedArticle = await patchArticle(183, {
  title: "수정된 게시글",
  content: "API 테스트",
  image: "https://example.com/test.jpg",
});
console.log(patchedArticle);

console.log("게시글 삭제:");
const deletedArticle = await deleteArticle(182);
console.log(deletedArticle);

/**
 * 상품 API 테스트
 */
console.log("상품 목록 조회:");
const productList = await getProductList();
console.log(productList);

console.log("상품 상세 조회:");
const product = await getProduct(150);
console.log(product);

console.log("상품 등록:");
const newProduct = await createProduct();
console.log(newProduct);

console.log("상품 수정:");
const patchedProduct = await patchProduct(151);
console.log(patchedProduct);

console.log("상품 삭제:");
await deleteProduct(150);
