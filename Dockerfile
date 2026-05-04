FROM nginx:latest
COPY _site /usr/share/nginx/html/DigitaleBewerbungsmappe
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
