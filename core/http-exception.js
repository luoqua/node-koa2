/**
 * 自定义异常处理基类
 * @class HttpException
 * @extends {Error}
 */
class HttpException extends Error {
  constructor(msg = "服务器异常", errorCode = 10000, status = 400) {
    super()
    this.errorCode = errorCode
    this.status = status
    this.msg = msg
  }
}

/**
 * 扩展异常处理基类 400
 * @class ParameterException
 * @extends {HttpException}
 */
class ParameterException extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.code = 400
    this.msg = msg || "参数错误"
    this.errorCode = errorCode || 10000
  }
}

class NotFound extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.code = 404
    this.msg = msg || "资源未找到"
    this.errorCode = errorCode || 10000
  }
}

class Success extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.code = 201 //操作成功
    this.msg = msg || "ok"
    this.errorCode = errorCode || 0
  }
}
class AuthFailed extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.msg = msg || '授权失败'
    this.errorCode = errorCode || 10004
    this.code = 401
  }
}

class Forbbiden extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.msg = msg || '禁止访问'
    this.errorCode = errorCode || 10006
    this.code = 403
  }
}
class LikeError extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.msg = msg || '你已经点赞过'
    this.errorCode = errorCode || 60001
    this.code = 400
  }
}

class DislikeError extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.msg = msg || '你已取消点赞'
    this.errorCode = errorCode || 60002
    this.code = 400
  }
}


module.exports = {
  HttpException,
  ParameterException,
  NotFound,
  Success,
  AuthFailed,
  Forbbiden,
  LikeError,
  DislikeError
}