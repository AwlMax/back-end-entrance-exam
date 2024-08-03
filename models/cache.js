const CACHE = new Map();

class Cache {
  constructor(size = 5, ttl = 60 * 1000) {
    this.size = size;
    this.ttl = ttl;
    this.cache = CACHE;
  }

  _isExpired(timestamp) {
    return (Date.now() - timestamp) > this.ttl;
  }

  has(key) {
    if (this.cache.has(key)) {
      const { timestamp } = this.cache.get(key);
      if (!this._isExpired(timestamp)) {
        return true;
      } else {
        this.cache.delete(key);
      }
    }
    return false;
  }

  get(key) {
    return this.cache.get(key)?.data;
  }

  set(key, data) {
    if (this.cache.size >= this.size) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    this.cache.set(key, { data, timestamp: Date.now() });
  }

  clear() {
    this.cache.clear();
  }

  delete(key) {
    return this.cache.delete(key);
  }
}

module.exports = Cache;
