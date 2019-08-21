# Inherit from base node
FROM node:10.16.3
ARG NPM_REGISTRY=https://registry.npmjs.org/
ARG PACKAGE_INSTALLER=npm

# Set our env vars
ENV PORT=3000\
    PATH=/app/user/node_modules/.bin:$PATH

# Create some needed directories
RUN mkdir -p /app/user && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* &&\
    if [ "$PACKAGE_INSTALLER" = "yarn" ]; then \
    npm install -g yarn; \
    ${PACKAGE_INSTALLER} config set ignore-optional false; \
    fi &&\
    ${PACKAGE_INSTALLER} config set registry "$NPM_REGISTRY"

WORKDIR /app/user
COPY package.json package-lock.json /app/user/
RUN $PACKAGE_INSTALLER install && \
    $PACKAGE_INSTALLER cache verify && \
    $PACKAGE_INSTALLER rebuild
COPY . /app/user
RUN npm run build
