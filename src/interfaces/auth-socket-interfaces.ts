export interface UserRegisterResponse {
	status: string,
	code: number,
	token: string
}

export interface UserRegisterRequest {
	email: string,
	username: string,
	password: string
}

export interface UserLoginResponse {
	status: string,
	code: number,
	token?: string,
	username?: string,
	email?: string
}

export interface UserLoginRequest {
	email: string,
	password: string,
}