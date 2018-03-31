module.exports = {
    exportPathMap: function () {
      return {
        '/':                  { page: '/' },
        '/about':             { page: '/about' },
        '/p/exporting-pages': { page: '/post', query: { title: "Learn to Export HTML Pages" } },
    }
    }
  }
