module.exports = function() {
    const useS3 =
        (process.env.USE_S3 && process.env.USE_S3 !== 'false') || false;
    const bucket = process.env.S3_BUCKET || '';
    const prefix = process.env.S3_PREFIX || '';
    const folder = process.env.S3_PATH || process.env.NODE_ENV || '';
    const urlHash = process.env.URL_HASH || '';
    const cloudfront = process.env.CLOUDFRONT_URL || false;

    const publicPath = cloudfront
        ? `${cloudfront}${urlHash}`
        : `http://${bucket}.s3.amazonaws.com/${prefix}/${folder}/`;

    return useS3 ? publicPath : '/';
};
