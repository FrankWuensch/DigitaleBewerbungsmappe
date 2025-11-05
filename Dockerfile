FROM jekyll/builder:latest

# Installiere Python und pip (bzw. python3-pip)
RUN apt-get update && apt-get install -y python3-pip

# Optional: Arbeitsverzeichnis setzen
WORKDIR /app

# Standardkommando
CMD ["bash"]
