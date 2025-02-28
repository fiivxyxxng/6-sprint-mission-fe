import axios from "axios";

const instance = axios.create({
  baseURL: "https://sprint-mission-api.vercel.app",
});

/**
 * 게시글 목록 조회
 * @param {number} page
 * @param {number} pageSize
 * @param {string} [keyword]
 */
export const getArticleList = (params) => {
  return instance
    .get("/articles", { params })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.status);
      } else {
        console.log(error.message);
      }
    });
};

/**
 * 게시글 상세 조회
 */
export const getArticle = (id) => {
  return instance
    .get(`/articles/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.status, "게시글을 찾을 수 없음");
      } else {
        console.log(error.message);
      }
    });
};

/**
 * 게시글 등록
 */
export const createArticle = (data) => {
  return instance
    .post("/articles", data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.status, "유효성 검사 오류");
      } else {
        console.log(error.message);
      }
    });
};

/**
 * 게시글 수정
 */
export const patchArticle = (id, data) => {
  return instance
    .patch(`/articles/${id}`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.status, "게시글을 찾을 수 없음");
      } else {
        console.log(error.message);
      }
    });
};

/**
 * 게시글 삭제
 */
export const deleteArticle = (id) => {
  return instance
    .delete(`/articles/${id}`)
    .then((response) => {
      console.log(response.status, "성공적으로 삭제됨");
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.status, "게시글을 찾을 수 없음");
      } else {
        console.log(error.message);
      }
    });
};
