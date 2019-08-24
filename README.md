**Building Docker Image from a specified commit**

`cd /home/divyanshu/programming/docker-from-commit/.git && \
git archive --format=tar.gz <commit-id> | docker build -t dsinecos/docker-from-commit -`

- To build from a commit on the `dev` branch

`cd /home/divyanshu/programming/docker-from-commit/.git && \
git archive --format=tar.gz b569071f6c371047a340fe032de911c92b74aff7 | docker build -t dsinecos/docker-from-commit -`

**Run Docker Container**

`docker run -p 6060:6060 dsinecos/docker-from-commit:latest`

[Reference - StackOverflow](https://stackoverflow.com/a/57399501/7640300)