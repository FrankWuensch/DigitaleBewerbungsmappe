FROM jekyll/builder:latest

# Python und pip über apk (Alpine Paketmanager) installieren
RUN apk add --no-cache python3 py3-pip

WORKDIR /srv/jekyll

CMD ["bash"]

