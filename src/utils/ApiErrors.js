class ApiErrors extends Error {
    constructor(
        statusCode,
        message= 'something wrong',
        errors= [],
        stack= ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = this.success
        this.errors = errors // something wrong

        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
} 