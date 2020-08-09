export const OK = (res, content) => {
  res.status(200).json({
    status: 200,
    data: content,
  });
};
export const CREATED = (res, content) => {
  res.status(201).json({
    status: 201,
    data: content,
  });
};
export const NOT_CONTENT = (res) => {
  res.status(204).end();
};

export const REDIRECT = (res, redirection) => {
  res.status(301).redirect(redirection);
};

export const BAD_REQUEST = (res, description = {}) => {
  res.status(400).json({
    status: 400,
    error: 'Bad Request',
    description,
  });
};
export const UNAUTHORIZED = (res, description = {}) => {
  res.status(401).json({
    status: 401,
    error: 'Unauthorized',
    description,
  });
};
export const NOT_FOUND = (res, description = {}) => {
  res.status(404).json({
    status: 404,
    error: 'Not Found',
    description,
  });
};

export const INTERNAL_ERROR = (res, description = {}) => {
  res.status(500).json({
    status: 500,
    error: 'Internal Server Error',
    description,
  });
};

export const IMAGE = (res, content) => {
  const [data, base64] = content.split('base64,');
  const [_, contentType] = data.split(':');
  const buffer = Buffer.from(base64, 'base64');

  res
    .status(200)
    .set({
      'Content-Type': contentType,
      'Content-Length': buffer.length,
    })
    .end(buffer);
};
