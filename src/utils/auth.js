import Axios from "./axios";

export const register = (username, email, password) => {
    return Axios.post("signup", {
        name: username,
        email,
        password,
    });
}
// 로그인을 시도하는 함수.
export const login = async (email, password) => {
    const axiosResult = await Axios
        .post("user/login", {
            email: email,
            password: password,
        });

    // 로그인에 성공하면 사용자 정보를 로컬 저장소에 저장합니다.
    if (axiosResult.data.result) {
        localStorage.setItem("user", JSON.stringify(axiosResult.data.result));
        console.log("token is saved", axiosResult.data.result);
    }

    return axiosResult;
}

// 현재 로그인된 상태인지 확인하는 함수
export const isLogin = () => {
    // 로컬 저장소에서 사용자 정보를 가져옵니다.
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        console.log("token", user);
        return true;
    }
    console.log("not logined");

    return false;
}

// 로그아웃을 시도하는 함수
export const logout = () => {
    // 로컬 저장소에서 사용자 정보를 제거합니다.
    localStorage.removeItem("user");
}

// 현재 로그인된 사용자의 JWT를 반환하는 함수
export const getAccessToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user.accessToken;
}