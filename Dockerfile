FROM nginx:latest
COPY _site /usr/share/nginx/html/DigitaleBewerbungsmappe
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]
