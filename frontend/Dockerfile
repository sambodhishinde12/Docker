FROM node:alpine3.22

ENV BACKEND_URL=http://0.0.0.0:4000

COPY . .

WORKDIR /app

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm" ]

CMD [ "start" ]
