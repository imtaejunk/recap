// 사용자 정보와 게시글 데이터를 가져오는 함수

async function fetchUserData(userId) {
  try {
    //사용자 정보 가져오기
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!userResponse.ok) throw new Error("사용자의 정보를 가져오는데 실패");
    const user = await userResponse.json();

    //게시글 가져오기
    const postsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    if (!postsResponse.ok) throw new Error("게시글 가져오는데 실패");
    const posts = await postsResponse.json;

    console.log("사용자 정보:", user);
    console.log("게시글 목록:", posts);
  } catch (error) {
    console.log(error.message);
  }
}

fetchUserData(1);
