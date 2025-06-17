# Overleaf Environment Variables for Render

## Required Environment Variables

### Basic Configuration
```
NODE_ENV=production
PORT=3000
```

### MongoDB Configuration
```
OVERLEAF_MONGO_URL=mongodb://localhost:27017/overleaf
MONGO_URL=mongodb://localhost:27017/overleaf
```

### Redis Configuration
```
OVERLEAF_REDIS_HOST=localhost
REDIS_HOST=localhost
REDIS_PORT=6379
```

### Application Settings
```
OVERLEAF_APP_NAME=Overleaf Community Edition
APP_NAME=Overleaf Community Edition
```

### Email Configuration
```
EMAIL_CONFIRMATION_DISABLED=true
OVERLEAF_EMAIL_FROM_ADDRESS=noreply@yourdomain.com
```

### File Types and Features
```
ENABLED_LINKED_FILE_TYPES=project_file,project_output_file
ENABLE_CONVERSIONS=true
```

### Security
```
SESSION_SECRET=your-super-secret-session-key
WEB_API_USER=overleaf
WEB_API_PASSWORD=overleaf
```

### Host Configuration
```
LISTEN_ADDRESS=0.0.0.0
OVERLEAF_ALLOW_PUBLIC_ACCESS=true
```

### Service Hosts (for microservices)
```
CHAT_HOST=localhost
CLSI_HOST=localhost
CONTACTS_HOST=localhost
DOCSTORE_HOST=localhost
DOCUMENT_UPDATER_HOST=localhost
FILESTORE_HOST=localhost
HISTORY_V1_HOST=localhost
NOTIFICATIONS_HOST=localhost
PROJECT_HISTORY_HOST=localhost
REALTIME_HOST=localhost
WEB_HOST=localhost
WEBPACK_HOST=localhost
```

## Optional Environment Variables

### LDAP Configuration (if using LDAP auth)
```
OVERLEAF_LDAP_URL=ldap://ldap:389
OVERLEAF_LDAP_SEARCH_BASE=ou=people,dc=example,dc=com
OVERLEAF_LDAP_SEARCH_FILTER=(uid={{username}})
OVERLEAF_LDAP_BIND_DN=cn=admin,dc=example,dc=com
OVERLEAF_LDAP_BIND_CREDENTIALS=password
```

### SMTP Configuration (if using email)
```
OVERLEAF_EMAIL_SMTP_HOST=smtp.gmail.com
OVERLEAF_EMAIL_SMTP_PORT=587
OVERLEAF_EMAIL_SMTP_SECURE=false
OVERLEAF_EMAIL_SMTP_USER=your-email@gmail.com
OVERLEAF_EMAIL_SMTP_PASS=your-app-password
```

### Custom Branding
```
OVERLEAF_SITE_URL=https://your-overleaf-domain.com
OVERLEAF_NAV_TITLE=Your Company Overleaf
OVERLEAF_HEADER_IMAGE_URL=https://your-domain.com/logo.png
OVERLEAF_ADMIN_EMAIL=admin@yourdomain.com
```

### Footer Customization
```
OVERLEAF_LEFT_FOOTER=[{"text": "Custom left footer text"}]
OVERLEAF_RIGHT_FOOTER=[{"text": "Custom right footer text"}]
```

### Templates
```
OVERLEAF_TEMPLATES_USER_ID=your-template-user-id
OVERLEAF_NEW_PROJECT_TEMPLATE_LINKS=[{"name":"All Templates","url":"/templates/all"}]
```

### Performance Settings
```
GRACEFUL_SHUTDOWN_DELAY_SECONDS=30
UV_THREADPOOL_SIZE=16
```

### Debug Settings (set to false in production)
```
OVERLEAF_PROXY_LEARN=false
```

## Render-Specific Variables

When using Render's managed services, these will be automatically set:

```
OVERLEAF_MONGO_URL=fromDatabase.connectionString
OVERLEAF_REDIS_HOST=fromService.host
REDIS_HOST=fromService.host
```

## Quick Setup for Render

For a basic deployment, you only need these essential variables:

```
NODE_ENV=production
PORT=3000
EMAIL_CONFIRMATION_DISABLED=true
ENABLED_LINKED_FILE_TYPES=project_file,project_output_file
ENABLE_CONVERSIONS=true
SESSION_SECRET=your-random-secret-key
OVERLEAF_APP_NAME=Overleaf Community Edition
OVERLEAF_ALLOW_PUBLIC_ACCESS=true
``` 