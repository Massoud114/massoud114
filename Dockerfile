FROM node:slim

ADD . /app

WORKDIR /app

RUN corepack enable \
&& yarn install --non-interactive

EXPOSE 5173

CMD ["yarn", "run", "dev"]
