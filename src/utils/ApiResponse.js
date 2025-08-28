class ApiResponse {
    constructor(
        statusCode,
        message = "Operation successful",
        data = null
    ) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.success = true;
    }
}

export { ApiResponse };