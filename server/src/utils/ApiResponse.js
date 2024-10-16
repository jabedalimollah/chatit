class ApiResponse {
  constructor(
    status,
    data,
    message = "success",
    token = null,
    statusInfo = "success"
  ) {
    this.status = status;
    this.data = data;
    this.statusInfo = statusInfo;
    this.message = message;
    this.token = token;
  }
}
export default ApiResponse;
