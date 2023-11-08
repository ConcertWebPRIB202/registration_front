FROM ubuntu:22.04

RUN apt-get update && apt-get upgrade -y
RUN apt-get install curl git unzip nano p7zip-full -y
RUN curl -sL https://deb.nodesource.com/setup_18.x -o /tmp/nodesource_setup.sh
RUN bash /tmp/nodesource_setup.sh
RUN apt-get install nodejs -y
RUN apt install software-properties-common -y
COPY . .
CMD cd registration_front && npm run dev