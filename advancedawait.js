//封装一个 advancedawait，使用 JavaScript 的 Promise 和 async/await 语法来实现。

function advancedawait(promise) {
  return new Promise((resolve, reject) => {
    promise
      .then((result) => {
        resolve({
          success: true,
          result: result,
        });
      })
      .catch((error) => {
        resolve({
          success: false,
          error: error,
        });
      });
  });
}

// 使用示例
async function fetchData() {
  const response = await advancedawait(fetch("https://api.example.com/data"));
  if (response.success) {
    const data = await response.result.json();
    console.log(data);
  } else {
    console.log(response.error);
  }
}

fetchData();

// 在上面的示例中，advancedawait 函数接受一个 Promise 作为参数，并返回一个新的 Promise。
// 在内部，它使用 .then() 和 .catch() 方法来处理原始 Promise 的结果。
// 如果原始 Promise 成功，advancedawait 返回一个带有 success 和 result 属性的对象，其中 result 是原始 Promise 的结果。
// 如果原始 Promise 失败，advancedawait 返回一个带有 success 和 error 属性的对象，其中 error 是原始 Promise 的错误信息。
// 在 fetchData 函数中，我们使用 advancedawait 函数来处理一个异步请求。如果请求成功，我们将结果转换为 JSON，并打印出来。如果请求失败，我们打印出错误信息。
