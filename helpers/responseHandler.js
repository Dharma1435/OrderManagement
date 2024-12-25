const handleResponseHandler = (
  statusCode = INTERNAL_SERVER_ERROR.message,
  message = "Internal server error",
  success = false,
  data = {},
  error = {}
) => {
  return { statusCode, success, message, data, error };
};

const handleDataValidation = (validationErrorArr) => {
  return handleResponseHandler(
    401,
    "Api data validation failed",
    false,
    {},
    {
      validationErrorArr,
    }
  );
};

module.exports = {
  handleDataValidation,
};
