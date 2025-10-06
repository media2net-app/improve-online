# GitHub Integration Setup

Deze applicatie heeft een volledige GitHub API integratie voor automatische repository updates en real-time data.

## 🚀 Features

### ✅ **Live GitHub Data**
- **Automatische repository import** van @media2net-app
- **Real-time updates** via GitHub webhooks
- **Caching systeem** voor optimale performance
- **Error handling** met fallback data

### 📊 **GitHub API Endpoints**
- `/api/github/repositories` - Alle repositories ophalen
- `/api/github/stats` - GitHub statistieken
- `/api/github/webhook` - Webhook voor automatische updates

### 🔄 **Automatische Updates**
- **Push events** - Repository updates
- **Star events** - Nieuwe stars
- **Fork events** - Nieuwe forks
- **Repository events** - Repository wijzigingen

## 🛠️ Setup Instructies

### 1. GitHub Personal Access Token (Optioneel)
Voor hogere API limits en private repositories:

```bash
# Maak een .env.local bestand
GITHUB_TOKEN=your_personal_access_token_here
```

### 2. GitHub Webhook Setup
Voor automatische updates:

1. Ga naar je GitHub repository settings
2. Navigeer naar "Webhooks"
3. Klik "Add webhook"
4. URL: `https://your-domain.com/api/github/webhook`
5. Content type: `application/json`
6. Events: Selecteer alle events of specifieke events
7. Klik "Add webhook"

### 3. Environment Variables
```bash
# .env.local
GITHUB_TOKEN=ghp_your_token_here
GITHUB_WEBHOOK_SECRET=your_webhook_secret_here
```

## 📁 Bestandsstructuur

```
lib/
├── github-api.ts          # GitHub API service
├── github-cache.ts        # Caching systeem
app/
├── api/github/
│   ├── repositories/route.ts  # Repository API
│   ├── stats/route.ts         # Stats API
│   └── webhook/route.ts       # Webhook handler
└── github/page.tsx        # GitHub overzicht pagina
```

## 🔧 API Usage

### Repository Data Ophalen
```typescript
import { githubAPI } from '@/lib/github-api'

// Alle repositories
const repos = await githubAPI.getRepositories()

// Specifieke repository
const repo = await githubAPI.getRepository('improve-online')

// GitHub statistieken
const stats = await githubAPI.getStats()
```

### Caching
```typescript
import { githubCache } from '@/lib/github-cache'

// Cache data
githubCache.set('key', data, ttl)

// Cache ophalen
const cached = githubCache.get('key')

// Cache wissen
githubCache.delete('key')
```

## 🎯 Features Overzicht

### **Live Data**
- ✅ Echte GitHub API calls
- ✅ Automatische cache refresh
- ✅ Error handling met fallback
- ✅ Loading states

### **Real-time Updates**
- ✅ GitHub webhooks
- ✅ Push event handling
- ✅ Star/fork tracking
- ✅ Repository changes

### **Performance**
- ✅ Intelligent caching
- ✅ Rate limit handling
- ✅ Optimized API calls
- ✅ Background updates

## 🚨 Rate Limits

GitHub API heeft rate limits:
- **Unauthenticated**: 60 requests/hour
- **Authenticated**: 5000 requests/hour
- **Caching**: Vermindert API calls significant

## 🔍 Monitoring

### Cache Statistics
```typescript
const stats = githubCache.getStats()
console.log('Cache hit rate:', stats.hitRate)
console.log('Valid entries:', stats.validEntries)
```

### API Errors
```typescript
try {
  const repos = await githubAPI.getRepositories()
} catch (error) {
  console.error('GitHub API error:', error.message)
}
```

## 🎨 UI Features

### **GitHub Overzicht Pagina**
- 📊 Live statistieken
- 📋 Repository tabel
- 🔄 Refresh functionaliteit
- ⚡ Loading states
- ❌ Error handling

### **Repository Details**
- 🌟 Stars, forks, watchers
- 🏷️ Topics en languages
- 📅 Update timestamps
- 🔗 Direct GitHub links
- 📋 Clone functionality

## 🔐 Security

### **Webhook Security**
- Signature verification
- Event validation
- Rate limiting
- Error handling

### **API Security**
- Token authentication
- Request validation
- CORS handling
- Error sanitization

## 📈 Performance

### **Caching Strategy**
- 5 minuten TTL voor repositories
- 1 uur TTL voor user info
- Background refresh
- Smart invalidation

### **Optimizations**
- Parallel API calls
- Batch processing
- Lazy loading
- Memory management

## 🐛 Troubleshooting

### **Common Issues**

1. **Rate Limit Exceeded**
   ```
   Solution: Add GitHub token or wait for reset
   ```

2. **Webhook Not Working**
   ```
   Solution: Check webhook URL and secret
   ```

3. **Cache Issues**
   ```
   Solution: Clear cache or restart application
   ```

### **Debug Mode**
```typescript
// Enable debug logging
console.log('GitHub API debug:', {
  cacheStats: githubCache.getStats(),
  apiCalls: githubAPI.getCallCount()
})
```

## 🚀 Deployment

### **Production Setup**
1. Set environment variables
2. Configure webhook URL
3. Enable GitHub token
4. Monitor rate limits
5. Setup error tracking

### **Monitoring**
- API response times
- Cache hit rates
- Error rates
- Webhook deliveries

---

**🎉 Je GitHub integratie is nu volledig operationeel!**

Alle repositories worden automatisch geïmporteerd en bijgewerkt via de GitHub API. De applicatie toont live data met caching voor optimale performance.
