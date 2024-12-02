# Menggunakan image Node.js sebagai base
FROM node:16-alpine

# Set work directory
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua file project ke dalam container
COPY . .

# Build aplikasi untuk produksi
RUN npm run build

# Menggunakan image Nginx untuk serving aplikasi React
FROM nginx:stable-alpine

# Copy build React ke Nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Jalankan Nginx
CMD ["nginx", "-g", "daemon off;"]
